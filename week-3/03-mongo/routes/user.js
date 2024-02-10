const { Router } = require('express')
const router = Router()
const userMiddleware = require('../middleware/user')
const { User, Course } = require('../db/index')

// User Routes
router.post('/signup', async (req, res) => {
  // Implement user signup logic
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username: username })
    if (user) {
      res.status(405).send('User with this username already exists')
    } else {
      await User.create({ username: username, password: password }).then(() => {
        res.status(200).json({ message: 'User created successfully' })
      })
    }
  } catch (error) {
    res.status(500).send('internal server error')
  }
})

router.get('/courses', async (req, res) => {
  // Implement listing all courses logic
  try {
    await Course.find()
      .select('')
      .then((result) => {
        res.status(200).json({ Courses: result })
      })
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
})

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    // const user = User.findOne({ username: req.header.username })
    const courseId = req.params.courseId
    const username = req.headers.username
    await Course.findById(courseId).then((result) => {
      if (result) {
        // console.log(result)
        User.updateOne(
          { username: username },
          { $push: { purchasedCourses: courseId } }
        ).then(() => {
          res.status(200).json({ message: 'Course purchased successfully' })
        })
      }
    })
  } catch (error) {
    res.status(500).send('internal server error')
  }
})

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const username = req.headers.username
    // console.log(username)
    await User.findOne({ username: username }).then((result) => {
      //   console.log(result.purchasedCourses)
      Course.find({ _id: { $in: result.purchasedCourses } }).then((courses) => {
        // console.log(courses)
        res.status(200).json({ courses: courses })
      })
    })
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
})

module.exports = router
