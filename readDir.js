const fs = require('fs');
// const markdownLinkExtractor = require('markdown-link-extractor');


 try {
     fs.readdirSync('./test', 'utf8').forEach(file => {
        console.log(file);
    })
  } catch (err) {
    console.error('No such directory:' + err);
  }

/*
const testDirectory = './test';
const testDirectory = fs.readdirSync('./test').forEach(file => {
   console.log(file);
 });*/
