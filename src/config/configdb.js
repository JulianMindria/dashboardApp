const { Pool } = require('pg')
 
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'electrindo',
  password: '12345678',
})

module.exports = pool