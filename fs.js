const fs = require('fs');

fs.readFile('index.js', 'utf-8', ()=> {
    if(error) {
        console.log(`Error ${error}`)
    } else {
        console.log(data);
    }
});
