const fs = require('fs'); 
// if the file exists print first print this console.log 
if (fs.existsSync('./pathFile.js')) {
   console.log('The file exists');
}
// if the file does not exist print the next line
else {
   console.log('Error: No such file');
}




//const path = require('path');

//const pathFile = path.parse(__filename);

//console.log(pathFile);