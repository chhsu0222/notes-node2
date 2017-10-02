console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };


    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }

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
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }


};

var listNote = () => {
    console.log('Listing all notes');
};

var getNote = (title) => {
    console.log('Reading note:', title);
};

var removeNote = (title) => {
    console.log('Removing note:', title);
};

module.exports = {
    addNote, //  ES6 syntex since key is equal to the value,
    listNote,  // same as listNode: listNode
    getNote,
    removeNote 
};