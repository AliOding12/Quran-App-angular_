const mysql2 = require('mysql2/promise');
const mysqlpool = mysql2.createPool({
host:'127.0.0.1',
user:'root',
password:'root',
database:'register',
waitForConnections: true
})
module.exports = mysqlpool;// Add database configuration for Express
// Update database configuration with connection pooling
// Add environment-based DB configuration
