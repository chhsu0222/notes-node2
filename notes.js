console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
    
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };  

    /*
    filter method returns a new array with the elements meet the criteria
    It is like "forEach" method which takes a callback function
    (element, index, array)
    */
    var duplicateNotes = notes.filter((note) => note.title === title);
    /*
    same as 
    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });
    */

    if (duplicateNotes.length === 0) {
        // no duplicate notes
        notes.push(note);
        saveNotes(notes);
        return note;
    } // auto-return "undefined" if duplicateNotes.length !== 0


};

var listNote = () => {
    console.log('Listing all notes');
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var removeNote = (title) => {
    console.log('Removing note:', title);
};

var logNote = (note) => {
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};


module.exports = {
    addNote, //  ES6 syntex since key is equal to the value,
    listNote,  // same as listNode: listNode
    getNote,
    removeNote,
    logNote
};