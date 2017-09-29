console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note:', title, body);
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