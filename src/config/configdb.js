const { Pool } = require('pg')
 
const pool = new Pool({
  user: 'backendgo',
  host: 'localhost',
  database: 'vokrafdb',
  password: '12345678',
})

module.exports = pool