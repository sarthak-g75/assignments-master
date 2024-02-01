var fs = require('fs')

fs.readFile('hello.txt', (err, data) => {
  if (err) throw err
  const stringData = data
    .toString()
    .split(' ')
    .filter((elem) => elem)
    .join(' ')

  //   const trimData = stringData.toString()

  console.log(stringData)
})
