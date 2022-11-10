// all fs modules work on callbacks
const fs = require('fs')
const file = require('../3-internal/path.js')

console.log('__dirname => ', __dirname)
console.log('__filename => ', __fileame)

fs.readFile(file, (err, data) => {
  if(err) {
    console.error(err.message)
    return
  }

  if(!fs.existsSync('./temp')) {
    fs.mkdirSync('./temp')
  }
})