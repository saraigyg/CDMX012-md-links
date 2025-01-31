#! /usr/bin/env node

// requerimientos para correr mdLinks y main functions
const yargs = require("yargs");
const chalk = require('chalk');
const { resolve } = require('path');
const { argv } = require('process');
const { pathExist, pathRoot, isItFile, isItMd, readFolder, searchLinks } = require ('../pathFile.js'); 
const { getStatus, brokenLinks } = require('../request.js');
const { totalLinks, countUniqueLinks } = require('../options.js');

// para la ventana de help 
const usage = "\nUsage: md-links <sarai gyg>/md-links>\n";
const options = yargs
      .usage(usage)  
      .option("validate", { describe: "validate links with http request", demandOption: false })
      .option("stats", { describe: "return total and unique links", demandOption: false })
      .option("validate --stats", { describe: "validate links and return total, unique and broken links", demandOption: false })                                                                                                    
      .help(true)
      .showHelpOnFail(true, 'Specify --help for available options')
      .epilogue('Laboratoria CDMX-012 - saraigyg') 
      .argv;

      // funcion mdLinks
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
    * ocupando funcion readFolder para retornar muchas promesas pero
    * despues con flat regresar una sola promesa
    */
   const allFiles = readFolder(path);
   const arrayPromises = Promise.all(allFiles.map((e) => {return mdLinks(e, options)}));
   const promiseResult = arrayPromises.then((res) => {return res.flat()});
   return promiseResult;
 }
};

/**
 * funcion main para que el usuario interaccione con el cli 
 * y además se lean los stats 
 * */ 
 const main = (args) => {
  const userPath = args[2].toString();
  const userOptions = {};
  userOptions.validate = args.slice(3).includes('--validate');
  userOptions.stats = args.slice(3).includes('--stats');
  userOptions.combination = userOptions.stats && userOptions.validate;
  console.log(args, userOptions);
// los stats y la combinacion de stats y validate, llamando la funcion mdLinks
  const project = mdLinks(userPath, userOptions);
  project.then((rest) => { 
    if (userOptions.combination) {
     return totalLinks(rest), countUniqueLinks(rest), brokenLinks(rest);
    }
    else if (userOptions.stats) {
      return totalLinks(rest), countUniqueLinks(rest);
    }
    else {
      console.log(chalk.yellow.bold('Please write --help after your path given to see further options'));
    }
  }) .catch (error => {
    console.log(chalk.red.bold(error));
  });
};

module.exports.mdLinks = mdLinks;
module.exports.main = main;
