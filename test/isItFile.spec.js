const { isItFile } = require('../pathFile.js');

let path1 = 'C:\Users\sarai\Documents\Scanned Documents\Documents\Laboratoria\CDMX012-md-links\doc.md';
let path2 = 'C:'; 

describe('isItFile function receives a path and returns a boolean', () => {
    test('that if a path is file returns true', () => {
      expect(isItFile(path1)).toBe(true);
    });
  
    test('that if a path is not a file returns false', () => {
      expect(isItFile(path2)).toBe(false);
    });
  });