const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
  it('should set the test env', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('GET /', () => {
    it('should return 200 text/html', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
      expect(res.type).toBe('text/html');
    });
  });

  describe('GET /api/user', () => {
    it('should return users', async () => {
      const res = await request(server).get('/api/users');
      expect(res.status).toBe(200);
      expect(res.body).toEqual([]);
    });
  });
  
});

module.exports = server;