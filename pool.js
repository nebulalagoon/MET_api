const Pool = require('pg').Pool;
const fs = require('fs');

const config = { 
    user: 'doadmin',
    host: 'plavabaza-do-user-4688015-0.db.ondigitalocean.com',
    database: 'MET_physical_activity_table',
    password: 'ypczktwunvfs24j9',
    port: 25060,
    ssl: {
        rejectUnathorised: false,
        cert: fs.readFileSync("./ca-certificate.crt").toString(),
    }

}

const pool = new Pool (config);

module.exports = pool;