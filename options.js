const fs = require('fs');

/**
 * this function receive a md file and 
 * returns the total number of links inside it 
 */
const totalLinks = (fileWithLinks) => {
  console.log('hola');
    return fileWithLinks.length;
}


/**
 * this function receive the total of links and
 * returns the total number of unique links inside a md file
 */
const countUniqueLinks = (arrayLinks) => {
  console.log(new Set(arrayLinks).size);
  return new Set(arrayLinks).size
}

/*
  let counts = {};
  for (let i = 0; i < arrayLinks.length; i++) {
      counts[arrayLinks[i]] = 1 + (counts[arrayLinks[i]] || 0);
  }
  return counts; */

module.exports.totalLinks = totalLinks;
module.exports.countUniqueLinks = countUniqueLinks;