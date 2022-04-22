const { isItMd } = require('../pathFile.js');

let path1 = 'C:\Users\sarai\Documents\Scanned Documents\Documents\Laboratoria\CDMX012-md-links\doc.md';
let path2 = 'C:'; 

describe('isItMd function receives a path and returns a boolean', () => {
    test('that if a path is a mdfile returns true', () => {
      expect(isItMd(path1)).toBe(true);
    });
  
    test('that if a path is not a mdfile returns false', () => {
      expect(isItMd(path2)).toBe(false);
    });
  });