import { Hono } from 'hono'
export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string
    SECRET_KEY: string
  }
}>()
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signInInput, SignInInput, signUpInput } from '@sarthak78/medium-common'

userRouter.post('/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const body = await c.req.json()
  const { success } = signInInput.safeParse(body)
  if (!success) {
    return c.json({ message: 'Invalid input' }, 400)
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
userRouter.post('/login', async (c) => {
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
