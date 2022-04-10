const fs = require('fs');


try {
  const testFile = fs.readFileSync('./pathFile.text', 'utf8')
  console.log(testFile);
} catch (err) {
  console.error('No such file:' + err);
}