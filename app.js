console.log('Starting app.js');

// require the build-in module
const fs = require('fs'); // file system
// require 3rd party module
const _ = require('lodash'); // the name in the package.jason file

// require the self-define file
const notes = require('./notes.js'); // use the relative path

console.log(process.argv);

var command = process.argv[2];

if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read') {
    console.log('Getting a note');
} else if (command === 'remove') {
    console.log('Removing a note');
} else {
    console.log('command not recognized');
}

