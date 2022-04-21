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
     if (options.validate) {
      /**
       * const findLinksMap = findLinks.map(getStatus);
       * console.log(findLinksMap);
       * una promesa que recibe un arreglo de promesas 
       *y devuelve una promesa que devuelve un arreglo con 
       *todas las promesas resueltas
       */ 
 
      const findLinksValidated = Promise.all(findLinks.map(getStatus));
      //findLinksValidated.then(res => {console.log(res)});
      // console.log(findLinksValidated);
     // if (options.includes('--stats')) {
     //   findLinksValidated.then(res => {totalLinks(res), countUniqueLinks(res), brokenLinks(res)});
     // }
      return findLinksValidated;
    }
    // if (options.includes('--stats')) {
    //  totalLinks(findLinks);
    //  countUniqueLinks(findLinks);
    // }
    // if (!options.includes('--validate') || !options.includes('--stats')) {
    //   console.log('Please choose one of the follow options: --validate , --stats , --validate --stats')
    // }
    return Promise.resolve(findLinks);
   }
   else {
     console.log('this file HAS NOT md extension, md files only please ');
   }
 }
 else {
   /**
    * arreglo de promesas
    * [promise1, promise2] 
    * promise.resolved = [promise1.resolved, ...]
    * promise.resolved = [[links1, links2],[links2, links3, links4],[links3]]
    * 
    * promise.resolved = [links1, links2, links3]
    */
   const allFiles = readFolder(path);
   const arrayPromises = Promise.all(allFiles.map((e) => {return mdLinks(e, options)}));
   const promiseResult = arrayPromises.then((res) => {return res.flat()});
   return promiseResult;
 }
};

const main = (args) => {
  const userPath = args[2].toString();
  const userOptions = {};
  userOptions.validate = args.slice(3).includes('--validate');
  userOptions.stats = args.slice(3).includes('--stats');
  console.log(args, userOptions);
  const project = mdLinks(userPath, userOptions);
  project.then()
  /**
   * project es una promesa, resolverla, imprimirla y mandar a llamar stats con una promesa
   */

};

main(argv);
module.exports.mdLinks = mdLinks;
