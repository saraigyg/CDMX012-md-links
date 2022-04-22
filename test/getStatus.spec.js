const { getStatus } = require('../request.js');

let path1 = 'C:\Users\sarai\Documents\Scanned Documents\Documents\Laboratoria\CDMX012-md-links\doc.md';


describe('getStatus receives a linkObject and returns a boolean', () => {
    test('that if a linkObject is ok, it gets the statuscode from axios library', () => {
      expect(getStatus(path1)).toBe(3);
    });

    test('that if a linkObject is not ok, it gets the statuscode NA and a message fail', () => {
        expect(getStatus(path1)).toBe(3);
      });
  });