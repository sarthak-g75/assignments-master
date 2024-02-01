var fs = require('fs')
const editData = 'hello hi wassup'
fs.writeFile('hello.txt', editData, (err) => {
  if (err) throw err
})
