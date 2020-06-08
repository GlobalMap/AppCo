const sqlite3 = require("sqlite3").verbose();
const fs = require('fs');

const DBSOURSE = "db.sqlite";

let db = new sqlite3.Database(DBSOURSE, (err) => {
    if(err) {
        // не відкривається db
        console.log(err.message);
    } else {
        console.log("Connected to the SQLITE database");
        db.run(`CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name text,
            last_name text,
            email text,
            gender text,
            ip_address text
        )`,
        (err) => {
            if (err) {
                console.log(err.message)
            } else {
                 fs.readFile('./database/users.json', (err, data) => {
                     if(err) {
                         console.log(err);
                     } else {
                         let insert = 'INSERT INTO users (first_name, last_name, email, gender, ip_address) VALUES(?,?,?,?,?)';
                         let dataParse = JSON.parse(data);
                         dataParse.map(data => {
                             db.run(insert, [data.first_name, data.last_name, data.email, data.ip_address])
                         });
                     }
                 });
            }
        })
    }
});

module.exports = db;