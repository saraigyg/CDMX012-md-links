const { brokenLinks } = require('../request.js');

describe('brokenLinks receives an arrayLinks and returns a boolean', () => {
    test('that if a link does not have 200 statusCode, returns true', () => {
      let linkArray1 = [{
        href: 'https://nodejs.org/', 
        statusCode: 200,
      }]
      expect(brokenLinks(linkArray1)).toBe(0);
    });

    test('that if a link has a 200 statusCode, returns false', () => {
      let linkArray2 = [{
        href:'https://user-images.githubusercontent.org/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
        statusCode: 404,
      }]
        expect(brokenLinks(linkArray2)).toBe(1);
      });
  });