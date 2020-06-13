const bd = require('mysql')
const util = require('util')
const pool = bd.createPool({
    connectionLimit:5,
    host: 'localhost',
    user:'root',
    password:'',
    database:'pappy'

})

pool.query = util.promisify(pool.query)
module.exports = pool