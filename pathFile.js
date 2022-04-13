const fs = require('fs'); 
const path = require('path');

 const pathExist = (userPath) => {
   if(fs.existsSync(userPath)) {
      return true;
   }
   else {
      return false; 
   }
}

const pathRoot = (userRoot) => {
   if(path.isAbsolute(userRoot)) {
      return true;
   }
   else {
      return false;
   }
}

const readFile = (userFile) => {
   fs.readFileSync(userFile);
   if(fs.lstatSync(userFile).isFile()) {
      if (path.extname(userFile) == ".md") {
         console.log(userFile)
      }}
   };

const readFolder = (userFolder) => {
   fs.readdirSync(userFolder, {withFileTypes: true}).forEach(file => {
      let fullPath = path.join(userFolder, file);
      if (fs.lstatSync(fullPath).isDirectory()) {
         console.log(fullPath);
         readFolder(fullPath);
       } else {
         console.log(fullPath);
       }  
    });
  }

module.exports.pathExist = pathExist;
module.exports.pathRoot = pathRoot;
module.exports.readFile = readFile;
module.exports.readFolder = readFolder;