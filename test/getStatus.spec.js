const { getStatus } = require('../request.js');

describe('getStatus receives a linkObject and returns a boolean', () => {
    test('that if a linkObject is ok, it gets the statuscode from axios library', () => {
      let linkArray1 = [
        {href: 'https://nodejs.org/', text: "Node.js", file: 'C:/Users/sarai/Documents/Scanned Documents/Documents/Laboratoria/CDMX012-md-links/doc.md'}, 
        {href: "https://nodejs.org/", text: "Node.js", file: "C:/Users/sarai/Documents/Scanned Documents/Documents/Laboratoria/CDMX012-md-links/doc.md"}, 
      ]
      expect(getStatus(linkArray1)).toStrictEqual(Promise.resolve({href: 'https://nodejs.org/', text: "Node.js", file: 'C:/Users/sarai/Documents/Scanned Documents/Documents/Laboratoria/CDMX012-md-links/doc.md', statusCode: "200", ok: "ok"}, 
      {href: "https://nodejs.org/", text: "Node.js", file: "C:/Users/sarai/Documents/Scanned Documents/Documents/Laboratoria/CDMX012-md-links/doc.md", statusCode: "200", ok: "ok"},
    )); 
    });
  });



  describe('getStatus receives a linkObject and returns a boolean', () => {
    test('that if a linkObject is ok, it gets the statuscode from axios library', () => {
        const linkObj1 = [
            {href: 'https://nodejs.org/', statusCode: "200"}
        ]
        const linkObj2 = [
            {href: 'https://nodejs.com/', statusCode: "NA"}
        ]
        expect(getStatus(linkObj1)).toEqual(Promise.resolve({href: 'https://nodejs.org/', statusCode: "200", 
        ok: "ok"}))
    })
});