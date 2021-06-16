const mongoose = require('mongoose');

/* Create Database - it come from env file*/
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/test';

/* Connect whit database */
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

/* Connection Successfully */
connection.once('open', () => {
    console.log('Database is conected.');
});