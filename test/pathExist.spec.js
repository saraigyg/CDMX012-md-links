const { pathExist } = require('../pathFile.js');

let path1 = 'C:\Users\sarai\Documents\Scanned Documents\Documents\Laboratoria\CDMX012-md-links\doc.md';
let path2 = 'C:'; 

describe('pathExist function receives a path and returns a boolean', () => {
    test('that if a path exists returns true', () => {
      expect(pathExist(path1)).toBe(true);
    });
  
    test('that if a path does not exist returns false', () => {
      expect(pathExist(path2)).toBe(false);
    });
  });