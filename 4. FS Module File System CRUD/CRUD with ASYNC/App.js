const filesystem=require('fs');
const path=require('path');


const filename='writtenfile.txt';
const filepath=path.join(__dirname,filename);


//Create
filesystem.writeFile(filepath,'Hi I am writting in the file', 'utf-8', (err)=>{
    if(err)
    {
        console.log(err);
    }
    console.log('done');
});

//Read
filesystem.readFile(filepath,'utf-8',(err,data)=>
{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(data);
    }
})

//Update
filesystem.appendFile(filepath,'\nHI I have updated file content','utf-8',(err,data)=>
{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(data);
    }
})
//Delete File

filesystem.unlink(filepath,(err)=>
{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log('File Has Been Deleted');
    }
});