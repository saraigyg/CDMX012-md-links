const { totalLinks } = require('../options.js');

let path1 = 'C:\Users\sarai\Documents\Scanned Documents\Documents\Laboratoria\CDMX012-md-links\doc.md';


describe('totalLinks function receives a filewithlinks and returns a the total number of links', () => {
    test('that if a file has links within returns the number of links', () => {
      expect(totalLinks(path1)).toBe(3);
    });
  });