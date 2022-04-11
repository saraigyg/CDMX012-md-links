const fs = require('fs')

fs.statSync('C:/Users/sarai/Documents/Scanned Documents/Documents/Laboratoria/CDMX012-md-links/test/md-links.spec.js', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  //total of links 
  // total of unique links 
  stats.isFile() //true
  stats.isDirectory() //false
  stats.isSymbolicLink() //false
  stats.size //1024000 //= 1MB
})