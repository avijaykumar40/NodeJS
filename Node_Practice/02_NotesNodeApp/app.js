console.log('Starting app.js')

//Loading inbuilt filesystem module
const fs = require('fs')
// Loading the OS module
const os = require('os')
// loading external module
const _ = require('lodash')
// Loading notes.js file into app.js 
// to use the properties we need to export the same from notes.js
const notes = require('./notes.js')

var user = os.userInfo()

// If we run on Node V7 or greater we will get error for below line
//fs.appendFile('greetings.txt','Hello World!')
// It will create a new file and if file exist will append the data at last

// Adding a callback method as parameter
// fs.appendFile('greetings.txt','Hello ' + user.username + 'you are ' + notes.age, (err) => {
	// if(err){
		// console.log('Unable to write to file')
	// }
// })

// Its a synchronous function this will not take the callback func argument
// `` template is the new feature of ES6
// fs.appendFileSync('greetingsSyn.txt',`Hello World from Sync Function for user ${user.username}!`)

// lodash module 
console.log(_.isString('ABC'))
console.log(_.isString(true)) 
console.log(_.uniq([1,2,3,1,4,1,6,1,6])) // Remove duplicates from Array



