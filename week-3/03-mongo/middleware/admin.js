// Middleware for handling auth
const { Admin } = require('../db/index')
async function adminMiddleware(req, res, next) {
  const username = req.headers.username
  const password = req.headers.password
  // console.log(password)
  await Admin.findOne({ username: username, password: password }).then(
    (val) => {
      // console.log(val)
      if (val) {
        next()
      } else {
        res.status(403).json({
          msg: 'Admin doesnt exist',
        })
      }
    }
  )

  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware
