const { JSDOM } = require('jsdom'); 
const Node = new JSDOM('').window.Node;
const { searchLinks } = require('../pathFile.js');


//jest.mock('fs');

describe('searchLinks function receives a path and returns a boolean', () => {
    test('that if a pathFile has a mdfile with links is true', () => {
      let path1 = 'C:/Users/sarai/Documents/Scanned Documents/Documents/Laboratoria/CDMX012-md-links/doc.md';
      expect(searchLinks(path1)).toStrictEqual([
    {href: 'https://nodejs.org/', text: "Node.js", file: 'C:/Users/sarai/Documents/Scanned Documents/Documents/Laboratoria/CDMX012-md-links/doc.md'}, 
    {href: "https://nodejs.org/", text: "Node.js", file: "C:/Users/sarai/Documents/Scanned Documents/Documents/Laboratoria/CDMX012-md-links/doc.md"}, 
    {href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg", text: "md-links", file: "C:/Users/sarai/Documents/Scanned Documents/Documents/Laboratoria/CDMX012-md-links/doc.md"},
    {href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg", text: "md-links", file: "C:/Users/sarai/Documents/Scanned Documents/Documents/Laboratoria/CDMX012-md-links/doc.md"}, 
    {href: "https://user-images.githubusercontent.org/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6", text: "Node.js", file: "C:/Users/sarai/Documents/Scanned Documents/Documents/Laboratoria/CDMX012-md-links/doc.md"},
    {href: "https://user-images.githubusercontent.org/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6", text: "Node.js", file: "C:/Users/sarai/Documents/Scanned Documents/Documents/Laboratoria/CDMX012-md-links/doc.md"}
      ]);
    });
  });