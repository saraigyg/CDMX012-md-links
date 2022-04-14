const fs = require('fs'); 
const path = require('path');

/**
 * funcion que recibe un path y regresa un booleano
 * si es que el path existe o no 
 */

 const pathExist = (userPath) => {
   if(fs.existsSync(userPath)) {
      return true;
   }
   else {
      return false; 
   }
}

/**
 * funcion que recibe un path y regresa un booleano
 * si es que el path existe como absoluto o no 
 */

const pathRoot = (userRoot) => {
   if(path.isAbsolute(userRoot)) {
      return true;
   }
   else {
      return false;
   }
}

/**
 * funcion que recibe un archivo y regresa un booleano
 * si es que el archivo es archivo o no
 */

const isItFile = (entryFile) => {
   if (fs.lstatSync(entryFile).isFile()) {
      return true;
   }
   else {
      return false;
   }
}

/**
 * funcion que recibe un archivo y regresa un booleano
 * si es que el archivo tiene extension md 
 */
const isItMd = (entryMd) => {
   if (path.extname(entryMd) == ".md" || path.extname(entryMd) == ".markdown") {
      return true;
   }
   else {
      return false;
   }
}

/**
 * funcion que recibe un path y regresa un arreglo
 * con todos los paths de archivos encontrados 
 */
const readFolder = (entryPath) => {
   const results = [];
   fs.readdirSync(entryPath).forEach(file => {
      const fullPath = path.join(entryPath, file);
      if (fs.lstatSync(fullPath).isDirectory()) {
         results.concat(readFolder(fullPath));
      }
      else {
         results.push(fullPath);
      }
    });
    return results;
}

module.exports.pathExist = pathExist;
module.exports.pathRoot = pathRoot;
module.exports.isItFile = isItFile;
module.exports.isItMd = isItMd;
module.exports.readFolder = readFolder;
