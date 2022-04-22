const { pathRoot } = require('../pathFile.js');

let path1 = 'C:\Users\sarai\Documents\Scanned Documents\Documents\Laboratoria\CDMX012-md-links\doc.md';
let path2 = 'C:'; 

describe('pathRoot function receives a path and returns a boolean', () => {
    test('that if a pathroot is absolute returns true', () => {
      expect(pathRoot(path1)).toBe(true);
    });
  
    test('that if a path is not absolute returns false', () => {
      expect(pathRoot(path2)).toBe(false);
    });
  });