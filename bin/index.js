#! /usr/bin/env node
console.log("Hello World!");
const yargs = require("yargs");
const chalk = require('chalk');
const { resolve } = require('path');
const { argv } = require('process');
const { pathExist, pathRoot, isItFile, isItMd, readFolder, searchLinks } = require ('../pathFile.js'); 
const { getStatus, brokenLinks } = require('../request.js');
const { totalLinks, countUniqueLinks } = require('../options.js');

const usage = "\nUsage: tran <lang_name> sentence to be translated";const options = yargs  
      .usage(usage)  
      .option("l", {alias:"languages", describe: "List all supported languages.", type: "boolean", demandOption
: false })                                                                                                    
      .help(true)  
      .argv;

const mdLinks = (path, options) => {
  const userPathExist = pathExist(path);
  if (userPathExist) {
    console.log(chalk.blue('this path exists'));
  }
  else {
    console.log(chalk.red.bold('this path DOES NOT exist, please try another one'));
  }

  const isPathAbs = pathRoot(path);
  if (isPathAbs) {
    console.log(chalk.blue('this path is absolute'));
  }
  else {
    path = resolve(path);
    console.log(chalk.magenta('this path is now absolute: ' + path)); 
  }

  const isFile = isItFile(path);
 if (isFile) {
   console.log(chalk.blue('this path concerns to a file'));

   const isMd = isItMd(path);
   if (isMd) {
     console.log(chalk.blue('this file has md extension'));

     const findLinks = searchLinks(path);
     if (options.validate) {
      /**
       * una promesa que recibe un arreglo de promesas 
       *y devuelve una promesa que devuelve un arreglo con 
       *todas las promesas resueltas
       */ 
      const findLinksValidated = Promise.all(findLinks.map(getStatus));
      const promiseLinksValidated = findLinksValidated.then((resau) => {console.log(resau.flat()); return resau.flat()});
      return promiseLinksValidated;
    }
    console.log(findLinks);
    return Promise.resolve(findLinks);
   }
   else {
     console.log(chalk.red.bold('this file HAS NOT md extension, md files only please '));
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
  userOptions.combination = userOptions.stats && userOptions.validate;
  console.log(args, userOptions);

  const project = mdLinks(userPath, userOptions);
  project.then((rest) => { 
    if (userOptions.combination) {
     return totalLinks(rest), countUniqueLinks(rest), brokenLinks(rest);
    }
    else if (userOptions.stats) {
      return totalLinks(rest), countUniqueLinks(rest);
    }
    else {
      console.log(chalk.yellow.bold('Please choose one of the following options: --validate , --stats or --validate --stats'));
    }
  }) .catch (error => {
    console.log(chalk.red.bold(error));
  });
};

main(argv);
module.exports.mdLinks = mdLinks;
