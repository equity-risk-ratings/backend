const db = require('../data/dbConfig.js');
const Users = require('./users-model.js');

describe('the users model', () => {

  afterEach(async () => {
    await db('users').truncate();
  });

  describe('add()', () => {
    it('should add users into the database', async () => {
      await Users.add({ firstName: 'Shola', lastName: 'Ayeni', email: 'ayenisholah@yahoo.com', password: 1234 });
      await Users.add({ firstName: 'Dare', lastName: 'Ayeni2', email: 'dareayeni@yahoo.com', password: 1234 });

      const users = await db('users');

      expect(users).toHaveLength(2);
      expect(users[0].firstName).toBe('Shola');
    });
  });

  describe('FindbyId()', () => {
  
    it('should return user with id', async () => {
      await db('users').insert([
        { firstName: 'Shola', lastName: 'Ayeni', email: 'ayenisholah@yahoo.com', password: 1234 },
        { firstName: 'Dare', lastName: 'Ayeni2', email: 'dareayeni@yahoo.com', password: 1234 }
      ]);

      const users = await db('users');
      expect(users[1].firstName).toBe('Dare');
    });

    it('return undefined on invalid id', async () => {
      const user = await Users.findById(3);

      expect(user).toBeUndefined();
    });
  });
});