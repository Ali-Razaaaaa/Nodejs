import mysql from 'mysql2/promise';


//!Connection
const db=await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"samsung",
    database:"mysql_db",
});

//!Create Database

// await db.execute(`
//   create table users (
//     id int primary key,
//     username varchar(50) not null,
//     email varchar(100) not null unique
//   );
// `);

//! Insert
//await db.execute(`insert into users(id,username,email) values(1,'Ali Raza Bugti', 'razabugti@gmail.com')`)
//? Prepared Statement is recommeded Way
//await db.execute(`insert into users(id,username,email) values(?,?,?)`,[1,'Ali Raza Bugti',"razabugtiali@gmail.com"]);
//??Multiple Insertion

// const values=[
//     [2,'Muzamil Bugti','riceresearch@gmail.com'],
//     [3,'Raket Bugti','Fun@gmail.com'],
// ];

// await db.query(`insert into users(id,username,email) values ?`,[values]);

//! Read
const [rows] =await db.execute('select * from users');
//!Update
await db.execute(`update users
    set username='Babloo'
    where id=1
    `);
//!Delete
await db.execute(`Delete from users where username='Muzamil Bugti'`);

