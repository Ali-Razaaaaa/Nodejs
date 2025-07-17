import {MongoClient} from 'mongodb';

//Create 
const client = new MongoClient("mongodb://127.0.0.1");
await client.connect();
const db = client.db("mongodb_nodejs_db");
const userCollection=db.collection("Users");
userCollection.insertOne({name:'Ali Raza', Age:25});
userCollection.insertMany([
    {name:'Muzamil', Age:12},
    {name:'Hasnain', Age:13},
    {name:'Mozam', Age:14},
    {name:'Zakria', Age:34}
    
],);

console.log("Documents inserted successfully!");

//Read