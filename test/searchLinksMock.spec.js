'use strict';

jest.mock('fs');
const { searchLinks } = require('../pathFile.js');

describe('list linkObject if url matches regex', () => {
    const MOCK_FILE_INFO = {
      'C:/Users/sarai/Documents/Scanned Documents/Documents/Laboratoria/CDMX012-md-links/doc.md': 'console.log("doc links content");',
    };

beforeEach(() => {
    // Set up some mocked out file info before each test
require('fs').__setMockFiles(MOCK_FILE_INFO);
});

test('includes link object in the result if url matches regex', () => {
    const LinkObject = require('../pathFile');
    const linkObject =
      LinkObject.summarizesLinkObject('C:/Users/sarai/Documents/Scanned Documents/Documents/Laboratoria/CDMX012-md-links/doc.md');

    expect(url).toMatch(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
  });
});

/*describe('searchLinks function receives a path and returns a boolean', () => {
    test('that if a pathFile has a mdfile with links that match with regex is true', () => {
        let path= 'C:/Users/sarai/Documents/Scanned Documents/Documents/Laboratoria/CDMX012-md-links/doc.md';
        let href ='https://nodejs.org';
       const result = searchLinks(path,href);
      expect().toMatch(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
    });
  });*/