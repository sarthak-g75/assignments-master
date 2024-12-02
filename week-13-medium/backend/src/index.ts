import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    SECRET_KEY: string
  }
}>()

app.use('/api/v1/blog/*', async (c, next) => {
  const header = c.req.header('Authorization')
  if (!header) {
    return c.json({ message: 'Missing Authorization header' }, 401)
  }
  const token = header.split(' ')[1]
  const decoded = await verify(token, c.env.SECRET_KEY)
  if (!decoded) {
    return c.json({ message: 'Invalid token' }, 401)
  }
  return next()
})

app.post('/api/v1/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const body = await c.req.json()
  if (!body.email || !body.name || !body.password) {
    return c.json({ message: 'Missing required fields' }, 400)
  }
  const checkUserEmail = await prisma.user.findUnique({
    where: { email: body.email },
  })
  if (checkUserEmail) {
    return c.json({ message: 'Email already exists' }, 400)
  }
  const user = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
      password: body.password,
    },
  })
  const token = await sign(
    { id: user.id, email: body.email, name: body.name },
    c.env.SECRET_KEY
  )
  return c.json({ token, message: 'Signup success' })
})
app.post('/api/v1/login', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const body = await c.req.json()
  if (!body.email || !body.password) {
    return c.json({ message: 'Missing required fields' }, 400)
  }
  const user = await prisma.user.findUnique({
    where: { email: body.email },
  })
  if (!user) {
    return c.json({ message: 'Invalid email or password' }, 400)
  }
  const isPasswordValid = body.password === user.password
  if (!isPasswordValid) {
    return c.json({ message: 'Invalid email or password' }, 400)
  }
  const token = await sign(
    { id: user.id, email: user.email, name: user.name },
    c.env.SECRET_KEY
  )
  return c.json({ token, message: 'Login success' })
})
app.post('/api/v1/blog', async (c) => {})
app.put('/api/v1/blog/:id', async (c) => {})
app.get('/api/v1/blog/:id', async (c) => {})
app.get('/api/v1/allblogs', async (c) => {})

export default app
