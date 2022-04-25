const { readFolder } = require('../pathFile.js');


describe('readFolder function receives a path and returns a boolean', () => {
    test('that if a path is a folder returns a fullPath ', () => {
      let path1 = 'C:/Users/sarai/Documents/Scanned Documents/Documents/Laboratoria/CDMX012-md-links/docs';
      expect(readFolder(path1)).toStrictEqual(["C:\\Users\\sarai\\Documents\\Scanned Documents\\Documents\\Laboratoria\\CDMX012-md-links\\docs\\docsfolder\\docs1.md", "C:\\Users\\sarai\\Documents\\Scanned Documents\\Documents\\Laboratoria\\CDMX012-md-links\\docs\\docsfolder\\docs2.md"]);
    });
  });