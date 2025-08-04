const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
  it('responds with Hello from Node.js Demo App!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello from Node.js Demo App!');
  });
});