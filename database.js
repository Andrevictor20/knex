const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : '12345678',
      database : 'knex'
    }
  });
  
  module.exports = knex