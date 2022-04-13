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
      return path.resolve(userRoot);
   }
}

/*const pathAbsolute = (userPathAbs) => {
   if (path.resolve(userPathAbs)) {
      return '';
   }
   else {
      return null;
   }
}*/

const pathAFile = (userFile) => {
   if (fs.lstatSync(userFile).isFile) {
      return true;
   }
   else {
      return false;
   }
}

const pathADirectory = (userDirectory) => {
   if (fs.lstatSync(userDirectory).isDirectory) {
      return true;
   }
   else {
      return false;
   }
}

const readFile = (userReadFile) => {
   if (fs.readFileSync(userReadFile)) {
      return {};
   }
   else {
      return null;
   }
}

const readFolder = (userReadFolder) => {
   fs.readdirSync(userReadFolder).forEach(file => {
      let fullPath = path.join(userReadFolder, file);
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
/*module.exports.pathAbsolute = pathAbsolute;*/
module.exports.pathAFile = pathAFile;
module.exports.pathADirectory = pathADirectory;
module.exports.readFile = readFile;
module.exports.readFolder = readFolder;

/*
      
         const readFile = fs.readFileSync(__filename);
         if (path.extname(readFile) === '.md' || path.extname(readFile) === '.markdown') {
            console.log(readFile);
         }
         else {
            console.log('');
         }
      }
         const readDir = fs.readdirSync(__dirname);
         readDir.forEach(file => {
             console.log((`File name: ${file} | Extension type: ${path.extname(file)}`));
*/