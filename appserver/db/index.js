const { Pool } = require('pg')

const pool = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE
})

module.exports = {
    query: (text, params) => pool.query(text, params)
}
