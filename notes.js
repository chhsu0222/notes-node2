console.log('Starting notes.js');

//console.log(module);

/* 
the exports project is a property of module and can be exported
for other file.
e.g. self-defined function reuse
*/
module.exports.add = (a, b) => {
    return a + b;
};