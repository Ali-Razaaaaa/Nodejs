const filesystem=require('fs');
const filename='writtenfile.txt';
const path=require('path');
const filepath=path.join(__dirname,filename);


const writefile= async()=>
{
    try
    {
        await filesystem.promises.writeFile(filepath,'Hi I have written in the file', 'utf-8');
    }
    catch(err)
    {
        console.error('Error',err);
    }
}


const readfile=async()=>
{
    try{
       const data = await filesystem.promises.readFile(filepath,'utf-8');
       console.log(data);
    }
    catch(err)
    {
        console.error('Error',err);
    }
}
const updatefile=async()=>
{
    try
    {
        filesystem.promises.appendFile(filepath,'Hi I have updated the file\n', 'utf-8');
    }catch(err)
    {
        console.log('Error',err);
    }
}
const deletefile= async()=>
{
    try
    {
        filesystem.promises.unlink(filepath);
        console.log('Delete sucessfully');
    }
    catch(err)
    {
        console.log('Error',err);
    }
}

function performalloperations()
{
    writefile();
    readfile();
    updatefile();
}
performalloperations();
deletefile();