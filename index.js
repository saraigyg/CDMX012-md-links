const { resolve } = require('path');
const { argv } = require('process');
const { pathExist, pathRoot, isItFile, isItMd, readFolder, searchLinks } = require ('./pathFile.js'); 
const { getStatus, brokenLinks } = require('./request.js');
const { totalLinks, countUniqueLinks } = require('./options.js');

const mdLinks = (path, options) => {
  const userPathExist = pathExist(path);
  if (userPathExist) {
    console.log('this path exists');
  }
  else {
    console.log('this path DOES NOT exist, please try another one');
  }
  const isPathAbs = pathRoot(path);
  if (isPathAbs) {
    console.log('this path is absolute');
  }
  else {
    path = resolve(path);
    console.log('this path is now absolute: ' + path); 
  }
  const isFile = isItFile(path);
 if (isFile) {
   console.log('this path concerns to a file');
   const isMd = isItMd(path);
   if (isMd) {
     console.log('this file has md extension');
     const findLinks = searchLinks(path);
     if (options.includes('--validate')) {
      /**
       * const findLinksMap = findLinks.map(getStatus);
       * console.log(findLinksMap);
       * una promesa que recibe un arreglo de promesas 
       *y devuelve una promesa que devuelve un arreglo con 
       *todas las promesas resueltas
       */ 
 
      const findLinksValidated = Promise.all(findLinks.map(getStatus));
      findLinksValidated.then(res => {console.log(res)});
      // console.log(findLinksValidated);
      if (options.includes('--stats')) {
        findLinksValidated.then(res => {totalLinks(res), countUniqueLinks(res), brokenLinks(res)});
      }
      return findLinksValidated;
    }
     if (options.includes('--stats')) {
      totalLinks(findLinks);
      countUniqueLinks(findLinks);
     }
     if (!options.includes('--validate') || !options.includes('--stats')) {
       console.log('Please choose one of the follow options: --validate , --stats , --validate --stats')
     }
    return Promise.resolve(findLinks);
   }
   else {
     console.log('this file HAS NOT md extension, md files only please ');
   }
 }
 else {
   const allFiles = readFolder(path);
   console.log(allFiles);
   allFiles.map((e) => {mdLinks(e, options)});
 }
};

const main = (args) => {
  const userPath = args[2].toString();
  const userOptions = args.slice(3);
  console.log(args, userOptions);
  mdLinks(userPath, userOptions);
};

main(argv);
module.exports.mdLinks = mdLinks;
