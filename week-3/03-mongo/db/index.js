const mongoose = require('mongoose')

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://sarthak78:sarthak5@notebook.apkoif4.mongodb.net/test')
  .then(() => {
    console.log('connected to mongo')
  })
// Define schemas
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,

  // Schema definition here
})

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
})

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  imageLink: String,
  description: String,
  price: Number,
})

const Admin = mongoose.model('Admin', AdminSchema)
const User = mongoose.model('User', UserSchema)
const Course = mongoose.model('Course', CourseSchema)

module.exports = {
  Admin,
  User,
  Course,
}
