const { readFolder } = require('../pathFile.js');

let path1 = 'C:\Users\sarai\Documents\Scanned Documents\Documents\Laboratoria\CDMX012-md-links\doc.md';
let path2 = 'C:'; 

describe('readFolder function receives a path and returns a boolean', () => {
    test('that if a path is a folder returns a fullPath ', () => {
      expect(readFolder(path1)).toBe(true);
    });
  
    test('that if a path is not a folder returns an array', () => {
      expect(readFolder(path2)).toBe(false);
    });
  });