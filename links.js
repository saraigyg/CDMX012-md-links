const cheerio = require('cheerio');

const got = (...args) => import('got').then(({default: got}) => got(...args)); 
// You cannot use "require" with the latest version of got
// If you're using ES Module or TypeScript, just import got like this: import got from 'got'

const extractLinks = async (url) => {
  try {
    // Fetching HTML
    const response = await got(url);
    const html = response.body;

    // Using cheerio to extract <a> tags
    const $ = cheerio.load(html);

    const linkObjects = $('a');
    // this is a mass object, not an array

    // Collect the "href" and "title" of each link and add them to an array
    const links = [];
    linkObjects.each((index, element) => {
      links.push({
        text: $(element).text(), // get the text
        href: $(element).attr('href'), // get the href attribute
      });
    });

    console.log(links);
    // do something else here with these links, such as writing to a file or saving them to your database
  } catch (error) {
    console.log(error.response.body);
  }
};

// Try it
const URL = 'http://books.toscrape.com/';
extractLinks(URL);