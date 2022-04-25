const axios = require('axios');
jest.mock('axios');

describe('getStatus receives a linkObject and returns a boolean', () => {
    test('that if a linkObject is ok, it gets the statuscode from axios library', () => {
        axios.get.mockImplementation(() => Promise.resolve(
        {href: 'https://nodejs.com/', statusCode: "NA"},
        {href: 'https://nodejs.org/', statusCode: "200"}))
    });
});