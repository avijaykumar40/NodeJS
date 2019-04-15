const fs = require('fs')
const yargs = require('yargs')
const _ = require('lodash')

const notes = require('./notesV1.js')

const titleOptions = {
		describe: 'Title of note',
		demand: true,
		alias: 't'
}

const bodyOptions = {
		describe: 'Body of note',
		demand: true,
		alias: 'b'		
}
//console.log('Using Process : ', process.argv)
// Using Yars
const argv = yargs.
command('add', 'Add a new note',{
	title: titleOptions,
	body: bodyOptions
})
.command('list', 'List all notes')
.command('read','Read a note',{
	title: titleOptions
})
.command('remove', 'Remove a note',{
	title: titleOptions
})
.help()
.argv
//console.log('Using Yargs : ', argv)
//var command = process.argv[2]
var command = argv._[0]
 
if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body)
	if(note){
		console.log('Note Created')
		notes.logNote(note) 
	}else{
		console.log('Note Title taken')
	}
}else if (command === 'list') {
	var allNotes = notes.getAll()
	console.log(`Printing ${allNotes.length} note(s)`)
	allNotes.forEach((note) => notes.logNote(note))

}else if (command === 'read') {
	var note = notes.getNote(argv.title)
	if(note){
		console.log('Note Found')
		notes.logNote(note)  
	}else{
		console.log('Note not found')
	}	
}else if (command === 'remove') {
	var isRemoved = notes.deleteNote(argv.title)
	var message = isRemoved ? 'Note sucessfully removed' : 'Note not found'
	console.log(`Note Status : ${message}`)
}else{
	console.log('Commmand not recognized')
}








