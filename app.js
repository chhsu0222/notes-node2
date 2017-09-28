console.log('Starting app.js');

// require the build-in module
const fs = require('fs'); // file system
const os = require('os'); // operating system-related 

var user = os.userInfo();
console.log(user);

fs.appendFile('greeting.txt', `Hello ${user.username}!`, (err) => {
    if (err) {
        console.log('fail to write the file');
    }
});