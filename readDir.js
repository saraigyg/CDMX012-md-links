const fs = require('fs');

const testDirectory = './testing';

fs.readdirSync(testDirectory).forEach(file => {
    if (testDirectory ===undefined) {
        console.log('no such directory');
    }
    else
    console.log(file);
 });

//const dir = fs.readdirSync('./', 'utf-8');
//console.log(dir);

/*fs.readdirSync('./', 'utf8', (err, dir)=> {
    if(err)
    console.log(err);
    else
    console.log(dir);
});
*/
