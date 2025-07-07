const filesystem = require('fs');
const path = require('path');

// File path define
const filename = path.join(__dirname, 'writtenfile.txt');

// Create
filesystem.writeFileSync(filename, 'Hi I have written in the file', 'utf-8');

// Read
const readfile = filesystem.readFileSync(filename, 'utf-8');
console.log('File Content After Create:', readfile);

// Update (Append)
filesystem.appendFileSync(filename, ' Hi I have Updated data', 'utf-8');

// Read again after update
const updatedContent = filesystem.readFileSync(filename, 'utf-8');
console.log('File Content After Update:', updatedContent);

// Rename
const newfile = 'newfile.txt';
const newfilepath = path.join(__dirname, newfile);
filesystem.renameSync(filename, newfilepath);

// Delete
filesystem.unlinkSync(newfilepath);
console.log('File Deleted Successfully');
