/**
 * this function receive an array of links from a 
 * md file and returns the total number 
 * of links inside it 
 */
const totalLinks = (fileWithLinks) => {
  console.log(`Total: ${fileWithLinks.length}`);
    return fileWithLinks.length;
}


/**
 * this function receive the total of links and
 * returns the total number of unique links inside a md file
 */
const countUniqueLinks = (arrayLinksObject) => {
  let result = arrayLinksObject.map(a => a.href);
  console.log(`Unique: ${new Set(result).size}`);
  return new Set(result).size;
}



module.exports.totalLinks = totalLinks;
module.exports.countUniqueLinks = countUniqueLinks;