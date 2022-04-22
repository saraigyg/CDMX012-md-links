const { brokenLinks } = require('../request.js');

let path1 = 'C:\Users\sarai\Documents\Scanned Documents\Documents\Laboratoria\CDMX012-md-links\doc.md';


describe('brokenLinks receives an arrayLinks and returns a boolean', () => {
    test('that if a link does not have 200 statusCode, returns true', () => {
      expect(brokenLinks(path1)).toBe(3);
    });

    test('that if a link has a 200 statusCode, returns false', () => {
        expect(brokenLinks(path1)).toBe(3);
      });
  });