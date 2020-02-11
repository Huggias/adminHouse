 import { createPool } from 'mysql2/promise';

export async function connect(){
    const connect = await createPool({
        host: 'localhost',
        user: 'root',
        password : '',
        database : 'adminHouse',
        connectionLimit : 10
    });
    return connect;
}