var fs = require('fs')
fs.readFile('hello.txt', (err, data) => {
  if (err) throw err

  console.log(data.toString())
})
