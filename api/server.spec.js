const server = require('./server.js');

describe('server.js', () => {
  it('should set the test env', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });
});

module.exports = server;