const { Router } = require('express')
const router = Router()
const userMiddleware = require('../middleware/user')
const jwt = require('jsonwebtoken')
const sec = 'sarthakIsBest'
const { User, Course } = require('../db/index')
// User Routes
router.post('/signup', async (req, res) => {
  // Implement user signup logic
  const { usename, password } = req.body
  try {
    await User.create(req.body).then(() => {
      res.status(200).json({ message: 'User Created Successfully' })
    })
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
})

router.post('/signin', async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username
  try {
    await User.findOne(req.body).then((result) => {
      if (result) {
        const token = jwt.sign(username, sec)
        res.status(200).json({ token: token })
      } else {
        res.status(403).send('incorrect credentials')
      }
    })
  } catch (error) {
    res.status(500).send('internal server error')
  }
})

router.get('/courses', async (req, res) => {
  // Implement listing all courses logic
  await Course.find({}).then((result) => {
    res.status(200).json({ courses: result })
  })
})

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.user
  const courseId = req.params.courseId
  await User.updateOne(
    { username: username },
    {
      $push: { purchasedCourses: courseId },
    }
  ).then(() => {
    res.status(200).json({ message: 'Course purchased Successfully' })
  })
})
//   console.log(username)

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  //   console.log(req.user)
  const username = req.user
  await User.findOne({ username: username }).then((result) => {
    // console.log(result)
    Course.find({ _id: { $in: result.purchasedCourses } }).then((courses) => {
      res.status(200).json({ purchasedCourses: courses })
    })
  })
})

module.exports = router
