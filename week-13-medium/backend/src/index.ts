import { Hono } from 'hono'
import { verify } from 'hono/jwt'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    SECRET_KEY: string
  }
  Variables: {
    userId: string
  }
}>()
app.use('/api/*', cors())
app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)

export default app
