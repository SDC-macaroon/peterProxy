const sum = require('./index.js');


describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await fetch('/reviews/2001');
    expect(response.statusCode).toBe(200);
  });
});
