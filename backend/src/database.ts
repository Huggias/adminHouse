import { createPool, createConnection } from 'mysql2/promise';
import {  } from "mysql2";
export async function connect(){
    const connect = createPool({
        host: 'remotemysql.com',
        user: '0RqcwAd0Oc',
        password : 'hotHIcM2vM',
        database : '0RqcwAd0Oc',
        port : 3306
    });
    // const connectLocal = await createPool({
    //     host: 'localhost',
    //     user: 'root',
    //     password : '',
    //     database : 'adminHouse'
    // });
    // connect.getConnection()
    var conn = connect.getConnection();
    return conn;
}