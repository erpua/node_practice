//require is sync module
//the second and other requires are form cash
//import => async. The behaviors are different
const {info, log} = require('./module')
const My = require('./moduleClass')

//global variables => bad practice.
//global it's Window var 
global.a = 5

info('name')
log('name')

const my = new My('My')

my.info('class')
my.log('class')

