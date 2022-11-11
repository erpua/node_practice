// all fs modules work on callbacks
const fs = require('fs')
const file = require('../3-internal/path.js')

console.log('__dirname => ', __dirname)
console.log('__filename => ', __filename)

fs.readFile(file, (err, data) => {
  if(err) {
    console.error(err.message)
    return
  }

  // sync operations block event loop
  if(!fs.existsSync('./temp')) {
    fs.mkdirSync('./temp')
  }

  console.log('data => ', data)
  console.log('data.toString() => ', data.toString())
  fs.writeFile(
    './temp/path.js',
    `${data.toString()}console.log('Successfully updated'`,
    (err) => {
      if(err) {
        console.error(err)
        return
      }
    },
  )
})