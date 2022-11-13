const fs = require('fs');
const { resolve } = require('path');

console.log('Start')

setTimeout(() => {
  console.log('SetTimeout happened');
}, 0)

setImmediate(() => {
  console.log('setImmediate happened');
}, 0)

new Promise((resolve) => {
  resolve('Promise happened')
  process.nextTick(() => {console.log('NextTick BEFORE')})
}).then(console.log)

Promise.resolve().then(() => {console.log('Promise 1 happened')})
Promise.resolve().then(() => {console.log('Promise 2 happened')})
Promise.resolve().then(() => {console.log('Promise 3 happened')})
/* 
new Promise((resolve) => {
  resolve('Promise happened')
  process.nextTick(() => {console.log('NextTick AFTER')})
}).then(console.log) */

process.nextTick(() => {console.log('NextTick 1 happened')})
process.nextTick(() => {console.log('NextTick 2 happened')})
process.nextTick(() => {console.log('NextTick 3 happened')})


new Promise((resolve) => {
  resolve('Promise happened')
  process.nextTick(() => {console.log('NextTick AFTER')})
}).then(console.log)

fs.readFile(__filename, ()=> {

  setTimeout(() => {
    console.log('SetTimeout in readFile happened');
  }, 0)

  setImmediate(() => {
    console.log('setImmediate in readFile happened');
  }, 0)

   console.log('File read')
})


console.log('End')