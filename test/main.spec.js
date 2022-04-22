const { main } = require('../index.js');

let path1 = 'C:\Users\sarai\Documents\Scanned Documents\Documents\Laboratoria\CDMX012-md-links\doc.md';


describe('main function receives arguments and returns a promise', () => {
    test('that if project is a promise resolved returns a promise', () => {
      expect(main(path1)).toBe(3);
    });

    test('that if a project is a promise rejected returns an error ', () => {
        expect(main(path1)).toBe(3);
      });
  });