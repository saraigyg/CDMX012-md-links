const { searchLinks } = require('../pathFile.js');

let path1 = 'C:\Users\sarai\Documents\Scanned Documents\Documents\Laboratoria\CDMX012-md-links\doc.md';
let path2 = 'C:'; 

describe('searchLinks function receives a path and returns a boolean', () => {
    test('that if a pathFile has a mdfile with links is true', () => {
      expect(searchLinks(path1)).toBe(true);
    });
  
    test('that if a path has not a mdfile with links returns false', () => {
      expect(searchLinks(path2)).toBe(false);
    });
  });