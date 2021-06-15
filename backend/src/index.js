/* Envioroment Variables */
require('dotenv').config();                      
const app = require('./app');
require('./database');

/* Initialize Server */
async function main(){
    await app.listen(4000);
    console.log(`Server on Port 4000`);
}

/* Run Server */
main();