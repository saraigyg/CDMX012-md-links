const { countUniqueLinks } = require('../options.js');

let path1 = 'C:\Users\sarai\Documents\Scanned Documents\Documents\Laboratoria\CDMX012-md-links\doc.md';


describe('countUniqueLinks function receives a filewithlinks and returns a the total number of non repetitive links', () => {
    test('that if a file has links within returns the number of links that are unique', () => {
      expect(countUniqueLinks(path1)).toBe(3);
    });
  });