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
console.log('process:', process.argv);
console.log('yargs:', argv);
var command = argv._[0];

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.listNote();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('command not recognized');
}

