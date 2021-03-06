const mongoose = require('mongoose');

/* Create Database - it comes from env file*/
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/test';

/* Connect whit database */
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

/* Connection Successfully */
connection.once('open', () => {
    console.log('Database is conected.');
});