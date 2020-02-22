import { createPool } from 'mysql2/promise';

export async function connect(){
    const connect = await createPool({
        host: 'remotemysql.com',
        user: '0RqcwAd0Oc',
        password : 'hotHIcM2vM',
        database : '0RqcwAd0Oc',
        port : 3306,
        connectionLimit : 10
    });
    return connect;
}