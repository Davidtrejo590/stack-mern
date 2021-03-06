/* Envioroment Variables */
require('dotenv').config();                      
const app = require('./app');
require('./database');

/* Initialize Server */
async function main(){
    await app.listen(app.get('port'));
    console.log(`Server on Port ${app.get('port')}`);
}

/* Run Server */
main();