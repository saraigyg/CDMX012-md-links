const { pathExist } = require('../pathFile.js');



describe('pathExist function receives a path and returns a boolean', () => {
    test('that if a path exists returns true', () => {
      let path1 = 'C:/Users/';
      expect(pathExist(path1)).toBe(true);
    });
    test('that if a path does not exist returns false', () => {
      let path2 = ':'; 
      expect(pathExist(path2)).toBe(false);
    });
  });