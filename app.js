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

// Define the commands exposed by your application
// Let the users know how the commands are meant to be executed
// .command(cmd, desc, [builder])

const titleOptions = {
    describe: 'Title of note',
    demand: true,   // required or not. Default value is false
    alias: 't'      // provide a shortcut 
};

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
        .command('add', 'Add a new note', {
            // node app.js add --help => see these detail description
            title: titleOptions,
            body: bodyOptions
        })
        .command('list', 'List all notes')
        .command('read', 'Read a note', {
            title: titleOptions
        })
        .command('remove', 'Remove a note', {
            title: titleOptions
        })
        .help()
        .argv;
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
    var allNotes = notes.listNote();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(notes.logNote);
    /*
    allNotes.forEach((note) => notes.logNote(note));
    */
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

