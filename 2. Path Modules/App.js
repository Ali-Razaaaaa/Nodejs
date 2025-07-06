console.log(__dirname);
console.log(__filename);


const path= require('path'); /*Intiialied Path object*/


/*1. Join */
const filename=path.join('alirazaPc','Downloads','code.txt'); /* Returns the given path for cross platforms */
console.log('join',filename);

/*2. Resolve*/

const resolved=path.resolve('alirazaPc','Downloads','code.txt'); /* Returns path from starting  */
console.log('Resolved',resolved);


/*3. Parse  */

const parsedfile=path.parse(resolved); /* Returns Everything in detail */
console.log('Parsed',parsedfile);
