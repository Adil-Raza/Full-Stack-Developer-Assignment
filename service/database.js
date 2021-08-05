const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'qwerty',
    database: 'assignment',
    host: 'localhost',
    port: 3306
})

module.exports = pool