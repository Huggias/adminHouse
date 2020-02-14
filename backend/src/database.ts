 import { createPool } from 'mysql2/promise';

export async function connect(){
    const connect = await createPool({
        host: 'sql10.freemysqlhosting.net',
        user: 'sql10322682',
        password : 'xqDLE7dYXk',
        database : 'sql10322682',
        connectionLimit : 10
    });
    return connect;
}
// host: 'localhost',
// user: 'root',
// password : '',
// database : 'adminHouse',
// connectionLimit : 10