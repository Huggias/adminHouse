// import admin from "firebase-admin";
// const serviceAccount = require("../../backend/adminhouse-52343-firebase-adminsdk-8trbs-a5e09e7c7d.json");
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://adminhouse-52343.firebaseio.com"
// });
// var db = admin.firestore();

// export default db;


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