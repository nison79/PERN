const { Pool } = require('pg')
// pools will use environment variables
// for connection information
const pool = new Pool({
  user: postgres,
  host: localhost,
  database: logstailusers,
  password: drmtcsn79,
  port:5432


});
module.exports = { 
  query: (text,params) => pool.query(text,params)
};