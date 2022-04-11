const fs = require('fs');


 try {
     const readDir = fs.readdirSync('./test', 'utf8');
     readDir.forEach(file => {
        console.log(file);
    })
  } catch (err) {
    console.error('No such directory:' + err);
  }

/*
const testDirectory = './test';
const testDirectory = fs.readdirSync('./test').forEach(file => {
   console.log(file);
 });*/
