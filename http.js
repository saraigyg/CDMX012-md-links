const https = require('https');

/***********************OPTION ONE HTTPS.REQUEST********************** */

/*const options = {
    hostname: 'example.com',
    port: 443,
    path: '/todos',
    method: 'GET'
  }*/
  
  const req = https.request(respon => {
    console.log(`href: ${respon.url}`);
    console.log(`text: ${respon.links}`);
    console.log(`file: ${respon.path}`);
    console.log(`statusCode: ${respon.statusCode}`);
    console.log(`message: ok`);
  
    respon.on('data', d => {
      process.stdout.write(d)
    })
  })
  
  req.on('error', error => {
    console.error(error);
    console.log(`message: fail`);
  })
  
  req.end()

  /*************************  OPTION TWO READ ME******************************/
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    console.log(`href: ${links.url}`);
    console.log(`text: ${links.links}`);
    console.log(`file: ${links.path}`);
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    console.log(`href: ${links.url}`);
    console.log(`text: ${links.links}`);
    console.log(`file: ${links.path}`);
    console.log(`statusCode: ${links.statusCode}`);
    console.log(`message: ok`);
    // => [{ href, text, file, status, ok }, ...]
  })
  .catch(console.error, `message: fail`);

mdLinks("./some/dir")
  .then(links => {
    console.log(`href: ${links.url}`);
    console.log(`text: ${links.links}`);
    console.log(`file: ${links.path}`);
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);