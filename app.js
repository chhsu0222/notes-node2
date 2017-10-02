console.log('Starting app.js');

// require the build-in module
const fs = require('fs'); // file system
// require 3rd party module
const _ = require('lodash'); // the name in the package.jason file
// install yargs with the command: npm install yargs@4.7.1 --save  
// @means version
const yargs = require('yargs');

// require the self-define file
const notes = require('./notes.js'); // use the relative path


const argv = yargs.argv
//console.log('process:', process.argv);
console.log('yargs:', argv);
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
    
} else if (command === 'list') {
    notes.listNote();
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note removed' : 'Note not found';
    console.log(message);
    
} else {
    console.log('command not recognized');
}

