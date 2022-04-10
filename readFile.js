const path = require('path');
const fs = require('fs');

const file = fs.readFileSync('./pathDir.js', 'utf-8');
console.log(file);

/*fs.readFileSync('pathDir.js', 'utf8'(err, file)=> {
    if(err)
    console.log('Unable to read file' + err);
    else
    console.log(file);
});*/