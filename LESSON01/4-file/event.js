//module events
const EventEmitter = require('events')
const fs = require('fs')

class MyEmitter extends EventEmitter { }

const me = new MyEmitter()

me.on('read', (err, data) => {
  const result = data.toUpperCase()
  me.emit('write', result)
})

me.on('write', (data) => {
  fs.writeFile('newpath.js', data, (err) => {
    console.log('Write')
  })
})

//read file and convert to utf-8
fs.readFile('../3-internal/path.js', 'utf-8', (err, data) => {
  //emit => is to call event
  me.emit('read', err, data)
})

