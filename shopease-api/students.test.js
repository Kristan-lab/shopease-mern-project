const request = require('supertest');
const app = require('./app');

describe('GET /api/students', () => {
  it('should return 200 OK and an array of students', async () => {
    const res = await request(app)
      .get('/api/students')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(Array.isArray(res.body)).toBe(true);
  });
});