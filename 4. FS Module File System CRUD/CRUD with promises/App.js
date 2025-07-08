const filesystem = require('fs');
const path = require('path');

const filename = 'write.txt';
const filepath = path.join(__dirname, filename);

// Writing 
filesystem.promises.writeFile(filepath, 'Hi, I am writing in the file', 'utf-8')
    .then(() => console.log('File written successfully'))
    .catch((err) => console.log('Error writing file:', err));

// Reading
filesystem.promises.readFile(filepath, 'utf-8')
    .then((data) => console.log('File content:', data))
    .catch((err) => console.log('Error reading file:', err));

// Updating 
filesystem.promises.appendFile(filepath, 'This is the updated content', 'utf-8')
    .then(() => console.log('File updated successfully'))
    .catch((err) => console.log('Error updating file:', err));

// Deleting 
filesystem.promises.unlink(filepath)
    .then(() => console.log('File deleted successfully'))
    .catch((err) => console.log('Error deleting file:', err));
