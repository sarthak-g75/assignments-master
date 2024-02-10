const { Router } = require('express')
const adminMiddleware = require('../middleware/admin')
const router = Router()
const jwt = require('jsonwebtoken')
const sec = 'sarthakIsBest'
const { Admin, Course } = require('../db/index')

// Admin Routes
router.post('/signup', async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body
  try {
    await Admin.findOne({ username: username }).then((val) => {
      if (val) {
        res.status(403).json({ message: 'Admin Already exists' })
      } else {
        Admin.create({ username: username, password: password }).then(() => {
          res.status(200).json({ message: 'Admin Created Successfully' })
        })
      }
    })
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
})

router.post('/signin', async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body
  try {
    await Admin.findOne({ username: username, password: password }).then(
      (val) => {
        if (val) {
          const token = jwt.sign(username, sec)
          res.status(200).json({ token: token })
        } else {
          res.status(411).json({ message: 'Incorrect pass or username' })
        }
      }
    )
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
})

router.post('/courses', adminMiddleware, async (req, res) => {
  // Implement course creation logic
  //   const { title, description, price, imageLink, published } = req.body
  try {
    await Course.create(req.body).then((val) => {
      res
        .status(200)
        .json({ message: 'Course created Successfully', courseId: val._id })
    })
  } catch (error) {
    res.status(500).send('Internal server error')
  }
})

router.get('/courses', adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    await Course.find({}).then((result) => {
      res.status(200).json({ course: result })
    })
  } catch (error) {
    res.status(500).send('Internal server error')
  }
})

module.exports = router
