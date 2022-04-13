const { argv } = require('process');
const { pathExist, pathRoot, pathAFile, pathADirectory, readFile, readFolder } = require ('./pathFile.js'); 


const mdLinks = (path, options) => {
  const userPathExist = pathExist(path);
  if (userPathExist) {
    console.log('the path exists');
  }
  else {
    console.log('the path does not exist');
  }

  const userPathRoot = pathRoot(path);
  if (userPathRoot) {
    console.log('the path is absolute');
  }
  else {
    console.log('the path is now absolute: ', path.resolve(userPathRoot));
  }
  
  const userFileIs = pathAFile(path);
  if (userFileIs) {
    console.log('the path belongs to a file');
  }
  else {
    console.log('the path does not belong to a file');
  }
  
  const userDirectoryIs = pathADirectory(path);
  if (userDirectoryIs) {
    console.log('the path belongs to a directory');
  }
  else {
    console.log('the path does not belong to a directory');
  }
  
  const userReadFile = readFile(path);
  if (userReadFile) {
    console.log('the file has been read');
  }
  else {
    console.log('the file has not been read');
  }
  
  const userReadFolder = readFolder(path);
  if (userReadFolder) {
    console.log('the directory has been read');
  }
  else {
    console.log('the directory has not been read');
  }
};

const main = (args) => {
  const userPath = args[2].toString();
  console.log(args);
  mdLinks(userPath);
};

main(argv);
module.exports.mdLinks = mdLinks;
