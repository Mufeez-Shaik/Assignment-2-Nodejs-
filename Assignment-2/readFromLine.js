
var readline = require('readline');
  
var rl = readline.createInterface(
     process.stdin, process.stdout);

     
rl.question('What is Your Name ', (Name) => {
    console.log('My Name is: ' + Name);
});