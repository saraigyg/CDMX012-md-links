const fs = require('fs');

const testFile = './pathFile.js';

fs.readFileSync(testFile).forEach(file => {
        console.log(file);
 });


 /*if (err.code === 'ENOENT') {
    console.log('File not found!');
  } else {
    throw err;
  }*/

//const file = fs.readFileSync('./pathDir.js', 'utf-8');
//console.log(file);
//{encoding:"utf8"}