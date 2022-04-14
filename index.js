const { resolve } = require('path');
const { argv } = require('process');
const { pathExist, pathRoot, isItFile, isItMd, readFolder } = require ('./pathFile.js'); 


const mdLinks = (path, options) => {
  const userPathExist = pathExist(path);
  if (userPathExist) {
    console.log('the path exists');
  }
  else {
    console.log('the path does not exist');
  }

  const isPathAbs = pathRoot(path);
  if (isPathAbs) {
    console.log('the path is absolute');
  }
  else {
    path = resolve(path);
    console.log('the path is now absolute: ' + path); 
  }
  
  const isFile = isItFile(path);
 if (isFile) {
   console.log('this is a file');
   const isMd = isItMd(path);
   if (isMd) {
     console.log('this file has md extension');
   }
 }
 else {
   const allFiles = readFolder(path);
   console.log(allFiles);
 }
};

const main = (args) => {
  const userPath = args[2].toString();
  console.log(args);
  mdLinks(userPath);
};

main(argv);
module.exports.mdLinks = mdLinks;
