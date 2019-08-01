const request = require('supertest');
const server = require('./server.js');
const db = require('../data/dbConfig.js');

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
    afterEach(async () => {
      await db('users').truncate();
    });

    it('should hit endpoint', async () => {
      const res = await request(server).get('/api/users');
      expect(res.status).toBe(200);
      expect(res.body).toEqual([]);
    });

    it('should return all users in the db', async () => {
      const users = [
        { id: 1, firstName: 'Shola', lastName: 'Ayeni', email: 'ayenisholah@yahoo.com', password: 1234 },
        { id: 2, firstName: 'Dare', lastName: 'Ayeni2', email: 'dareayeni@yahoo.com', password: 1234 }
      ];

      await db('users').insert(users);

      const res = await request(server).get('/api/users');
      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(2);
    });
  });
  
});

module.exports = server;