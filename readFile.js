const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');

const testFile = fs.readFileSync('README.md', 'utf8');

try {
  const { links } = markdownLinkExtractor(testFile);
  links.forEach(link => console.log(link));
  // console.log(testFile);
} catch (err) {
  console.error('No such file:' + err);
}