console.log("Starting app.js");

const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;

console.log("Process",process.argv);
console.log("Yargs",yargs.argv);


var title = yargs.argv.title;
console.log(title)