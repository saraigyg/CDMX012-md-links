const { countUniqueLinks } = require('../options.js');




describe('countUniqueLinks function receives a filewithlinks and returns a the total number of non repetitive links', () => {
    test('that if a file has links within returns the number of links that are unique', () => {
      //let path = 'C:/Users/sarai/Documents/Scanned Documents/Documents/Laboratoria/CDMX012-md-links/doc.md';
      let linkArray = [
        'https://nodejs.org/',
        'https://nodejs.org/',
        'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
        'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg'
      ]


      expect(countUniqueLinks(linkArray)).toBe(1);
    });
  });