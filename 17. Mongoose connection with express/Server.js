import mongoose from "mongoose";
try{
    await mongoose.connect("mongodb://127.0.0.1/mongoosedatabase");
    mongoose.set('debug',true);

}catch(e)
{
    console.error('Error',e);
    process.exit();
}

const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    age:{type:Number,required:true,min:5},
    createdat:{type:Date,default:Date.now()},
});

const users = mongoose.model("User",userSchema);

//Insertion
await users.insertMany([
    {name:'Ahmed Ali', age:30, email:'ahmed@gmail.com'},
    {name:'Sara Khan', age:22, email:'sara@gmail.com'},
    {name:'Hassan Shah', age:28, email:'hassan@gmail.com'},
    {name:'Fatima Malik', age:26, email:'fatima@gmail.com'},
    {name:'Usman Tariq', age:24, email:'usman@gmail.com'}
]);

//Read
const read=await users.find();

console.log(read);


//Update
//Update One //Condition + updateable values
await users.updateOne({email:'Thapa@gmail.com'},{age:26,name:'Aliraza'});

//Update Many
await users.updateMany({age:{$lt:25}},{$set:{email:'ali@gmai.com'}})

await mongoose.connection.close();