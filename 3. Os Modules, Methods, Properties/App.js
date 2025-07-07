const os = require('os');

console.log('Platform:',os.platform());
console.log('OS Type::',os.type());
console.log('Total Memory:',os.totalmem());
console.log('User:',os.userInfo());
console.log('Free Memory:',os.freemem());
console.log('System Uptime in Seconds:', os.uptime());
console.log('OS Architecture:', os.arch());