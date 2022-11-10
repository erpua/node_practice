console.log(process.execPath)
console.log(process.version)
console.log(process.platform)
console.log(process.arch)
console.log(process.title)
console.log(process.pid)
console.log(process.cwd())
console.log(process.argv)

process.on('exit', (code) => {
  console.log('Exit ' + code)
})

//1 => is an erro code
process.exit(1)
//process module does not import => it's global