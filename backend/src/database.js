/* Connect whit database */

const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mernstack';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database is conected.');
});