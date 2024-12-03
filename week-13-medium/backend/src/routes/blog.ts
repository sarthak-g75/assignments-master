import { Hono } from 'hono'
export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string
    SECRET_KEY: string
  }
  Variables: {
    userId: string
  }
}>()
import { sign, verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

blogRouter.use('/*', async (c, next) => {
  const header = c.req.header('Authorization')
  if (!header) {
    return c.json({ message: 'Missing Authorization header' }, 401)
  }
  const token = header.split(' ')[1]
  const decoded = await verify(token, c.env.SECRET_KEY)
  if (!decoded) {
    return c.json({ message: 'Invalid token' }, 401)
  }
  if (decoded.id) {
    c.set('userId', decoded.id as string)
    return next()
  }
  return c.json({ message: 'Unauthorized' }, 403)
})
// Api to create a blog
blogRouter.post('/create-blog', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const body = await c.req.json()
  if (!body.title || !body.content) {
    return c.json({ message: 'Missing required fields' }, 400)
  }
  try {
    const userId = c.get('userId')
    if (!userId) {
      return c.json({ message: 'Unauthorized' }, 401)
    }
    const checkUser = await prisma.user.findUnique({
      where: { id: userId },
    })
    if (!checkUser) {
      return c.json({ message: 'Unauthorized' }, 401)
    }
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
        published: body.published || false,
      },
    })
    return c.json({ message: 'Blog created', blog }, 200)
  } catch (e) {
    return c.json({ message: 'Error creating blog' }, 500)
  }
})
// Api to update a blog
blogRouter.put('/update-blog/:id', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const body = await c.req.json()
  const id = c.req.param('id')
  const userId = c.get('userId')
  if (!userId) {
    return c.json({ message: 'Unauthorized' }, 401)
  }
  const checkUser = await prisma.user.findUnique({
    where: { id: userId },
  })
  if (!checkUser) {
    return c.json({ message: 'Unauthorized' }, 401)
  }
  const blog = await prisma.post.update({
    where: { id: id },
    data: {
      title: body.title,
      content: body.content,
      published: body.published,
    },
  })
  return c.json({ message: 'Blog updated', blog }, 200)
})
// Api to get a single blog
blogRouter.get('/get-blog/:id', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const id = c.req.param('id')
  if (!id) {
    return c.json({ message: 'Missing required fields' }, 400)
  }

  const blog = await prisma.post.findFirst({
    where: {
      id: id,
    },
  })
  return c.json({ message: 'Blog retrieved successfully', blog }, 200)
})
blogRouter.get('/all-blogs', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const blogs = await prisma.post.findMany({})
  return c.json({ message: 'Blog retrieved successfully', blogs }, 200)
})
