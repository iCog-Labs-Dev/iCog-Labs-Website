const parse = require('pg-connection-string').parse;
const parsed = parse(process.env.DATABASE_URL);

console.log('🔍 Parsed DB Config:', parsed);

module.exports = () => ({
  connection: {
    client: 'postgres',
    connection: {
      host: parsed.host,
      port: process.env.DATABASE_PORT || parsed.port,   
      database: parsed.database,
      user: parsed.user,
      password: parsed.password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
});
