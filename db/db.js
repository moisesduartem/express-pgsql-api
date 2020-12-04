const Pool = require("pg").Pool;

module.exports = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "api",
    password: "1234",
    port: 5432
});