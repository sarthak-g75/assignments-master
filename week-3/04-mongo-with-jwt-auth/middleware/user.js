const jwt = require('jsonwebtoken')
const sec = 'sarthakIsBest'
function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization.split(' ')[1]
  const decoded = jwt.verify(token, sec)
  // console.log(decoded)
  if (decoded) {
    req.user = decoded
    next()
  } else {
    res.status(403).json({ message: 'Not Authorized' })
  }
}

module.exports = userMiddleware
