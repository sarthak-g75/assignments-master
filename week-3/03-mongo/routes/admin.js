const { Router } = require('express')
const adminMiddleware = require('../middleware/admin')
const router = Router()
const { Admin, Course } = require('../db/index')

// Admin Routes
router.post('/signup', async (req, res) => {
  // Implement admin signup logic
  try {
    const { username, password } = req.body
    const user = await Admin.findOne({ username: username })
    if (user) {
      res.status(405).send('Admin with this username already exists')
    } else {
      await Admin.create({ username: username, password: password }).then(
        () => {
          res.status(200).json({ message: 'Admin created successfully' })
        }
      )
    }
  } catch (error) {
    res.status(500).send('internal server error')
  }
})

router.post('/courses', adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body
  try {
    await Course.create({
      title: title,
      description: description,
      price: price,
      imageLink: imageLink,
    }).then((val) => {
      res
        .status(200)
        .json({ message: 'Course created successfully', courseId: val._id })
    })
  } catch (error) {
    res.status(500), send('Internal Server Error')
  }
})

router.get('/courses', adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic

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

module.exports = router
