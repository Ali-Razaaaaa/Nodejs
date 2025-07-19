import { MongoClient } from "mongodb";


const client = new MongoClient('mongodb://localhost:27017');

//Create 
async function Create()
{
    try
    {
        await client.connect();

        const db=client.db('Users');
        const collections=db.collection('Users');

        await collections.insertMany(
            [
        {Name:'Ali Raza Bugti', Age:23},
        {Name:'Hasnain Bugti', Age:20},
        {Name:'Muzamil Bugti', Age:13},
        {Name:'Sameer Bugti', Age:33},
        {Name:'Abdullah Bugti', Age:45},
            ],
    );

    console.log('Inserted Sucessfully');
    await client.close();

    }catch(e)
    {
        console.log('Error Occured',e);
    }
}
//Read
async function Read()
{
    try
    {
        await client.connect();

        const db=client.db('Users');
        const collections=db.collection('Users');
        
        const users=await collections.find().toArray();
        
        console.log(users);

        await client.close();
    }catch(e)
    {
        console.log('Error',e);
    }
}
//Update
async function Update()
{
    try
    {
        await client.connect();

        const db=client.db('Users');
        const collections=db.collection('Users');

        await collections.updateOne({Name:'Hasnain Bugti'},{$set: {Age:30}}
      
        );
        console.log('Updated SuccessFully');
        await client.close();

    }catch(e)
    {
        console.log('Error',e);
    }
}
//Delete
async function Delete() {
    try {
        await client.connect();

        const db = client.db('Users');
        const collections = db.collection('Users');

        const result = await collections.deleteOne({ Name: 'Hasnain Bugti' });

        if (result.deletedCount === 0) {
            console.log('No document found to delete.');
        } else {
            console.log('Deleted Successfully');
        }

        await client.close();
    } catch (e) {
        console.log('Error', e);
    }
}

Delete(); 
Update();
Read();
Create();