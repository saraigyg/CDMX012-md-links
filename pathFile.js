const fs = require('fs'); 
const path = require('path');
// const { validateLinks } = require('./request.js');

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
   let results = [];
   fs.readdirSync(entryPath).forEach(file => {
      const fullPath = path.join(entryPath, file);
      if (fs.lstatSync(fullPath).isDirectory()) {
         results = results.concat(readFolder(fullPath));  
      }
      else {
         results.push(fullPath);
      }
    });
    return results;
}

/**
 * funcion que recibe un file y regresa 
 * un arreglo de objetos con los links encontrados
 * con formato href, text y file
 *
 */

const searchLinks = (entryPathFile) => {
   const linkResults = [];
   const readLines = fs.readFileSync(entryPathFile, {encoding: 'utf-8'}).split('\n').filter(Boolean);
   // console.log(readLines);
   const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
   readLines.forEach(url => {
      if (url.match(expression)) {
         //si es vacio no lo regrese
         const linkObject = {};
         const text = url.substring(
            url.indexOf("[") + 1, 
            url.lastIndexOf("]")
        );
        const href = url.substring(
           url.indexOf(']') + 2,
           url.lastIndexOf(')')
        );
        linkObject['href'] = href;
        linkObject['text'] = text;
        linkObject['file'] = entryPathFile;
        linkResults.push(linkObject);
        // console.log(linkObject);
      }

   });
   return linkResults.filter((eObject) => {
      return eObject.href.match(expression)});
}




module.exports.pathExist = pathExist;
module.exports.pathRoot = pathRoot;
module.exports.isItFile = isItFile;
module.exports.isItMd = isItMd;
module.exports.readFolder = readFolder;
module.exports.searchLinks = searchLinks;
