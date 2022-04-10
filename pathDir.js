 const fs = require('fs'); 
 // if the directory exists print first print this console.log 
 if (fs.existsSync('./test')) {
    console.log('The directory exists');
}
// if the directory does not exist print the next line
else {
    console.log('Error: No such directory');
}




//const path = require('path');

// const pathDirectory = path.parse(__dirname);

// console.log(pathDirectory);