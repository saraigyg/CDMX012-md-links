const { pathRoot } = require('../pathFile.js');

describe('pathRoot function receives a path and returns a boolean', () => {
    test('that if a pathroot is absolute returns true', () => {
      let path1 = 'C:/Users/sarai/Documents/Scanned Documents/Documents/Laboratoria/CDMX012-md-links/doc.md';
      expect(pathRoot(path1)).toBe(true);
    });
  
    test('that if a path is not absolute returns false', () => {
      let path2 = 'C:'; 
      expect(pathRoot(path2)).toBe(false);
    });
  });