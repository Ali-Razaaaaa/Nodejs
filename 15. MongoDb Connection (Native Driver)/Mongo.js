import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");

async function run() {
  try {
    await client.connect();

    const db = client.db("Nodejs");
    const userCollection = db.collection("Users");

    const result = await userCollection.insertOne({ Price: 2400 });
    console.log("Inserted document ID:", result.insertedId);
  } catch (err) {
    console.error("Error inserting document:", err);
  } finally {
    await client.close();
  }
}

run();
