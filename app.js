console.log('Starting app.js');

// require the build-in module
const fs = require('fs'); // file system
const os = require('os'); // operating system-related

// require the self-define file
const notes = require('./notes.js'); // use the relative path
//console.log('Result: ', notes.add(9, -2));

// require 3rd party module
const _ = require('lodash'); // the name in the package.jason file

console.log(_.isString(true)); // false
console.log(_.isString('CH')); // true

var filteredArray = _.uniq(['CH', 1, 'CH', 1, 2, 3, 4]);
console.log(filteredArray); // ['CH', 1, 2, 3, 4]

/*
var user = os.userInfo();
console.log(user);

fs.appendFile('greeting.txt', `Hello ${user.username}!`, (err) => {
    if (err) {
        console.log('fail to write the file');
    }
});
*/