// var obj ={
// 	name : 'Vijay',
// 	age : 28 
// }
// var strObj = JSON.stringify(obj)
// console.log(typeof obj)
// console.log(typeof strObj)
// console.log(obj)
// console.log(strObj)

// var personString = '{"name" : "Vijay Kumar", "age" : 28}'
// var person = JSON.parse(personString)
// console.log(person)
// console.log(typeof person)

const fs = require('fs')

var orginalNote = {
	title : 'Some Title',
	body : 'Some body',
}
// originalNoteString
var originalNoteString = JSON.stringify(orginalNote)
fs.writeFileSync('notes.json', originalNoteString)

var noteString = fs.readFileSync('notes.json')
// note
var note = JSON.parse(noteString)
console.log(typeof note)
console.log(note.title)