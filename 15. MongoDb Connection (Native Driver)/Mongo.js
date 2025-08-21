import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");

async function run() {
  try
  {
    await client.connect();

    const db=client.db('Nodejs');
    const collection=db.collection('Users');

    const result = await collection.insertOne({name:'Ali Raza',Age:20});
    
    const results = await collection.insertMany([
      {name:'Ali Raza',Age:21},
      {name:'Ali',Age:22},
      {name:'Ali Bam',Age:23},
    ]);

    console.log(result.insertedId);
    
    console.log(results.insertedIds);
    
  }catch(e)
  {
    console.log('Error',e);
  }finally
  {
    await client.close();
  }
}

run();
