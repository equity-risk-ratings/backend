const db = require('../data/dbConfig.js');
const Users = require('./users-model.js');

describe('the users model', () => {

  describe('add()', () => {

    afterEach(async () => {
      await db('users').truncate();
    });
    it('should add users into the database', async () => {
      await Users.add({ firstName: 'Shola', lastName: 'Ayeni', email: 'ayenisholah@yahoo.com', password: 1234 });
      await Users.add({ firstName: 'Dare', lastName: 'Ayeni2', email: 'dareayeni@yahoo.com', password: 1234 });

      const users = await db('users');

      expect(users).toHaveLength(2);
      expect(users[0].firstName).toBe('Shola');
    });
  });
});