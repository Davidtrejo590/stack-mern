/* Create Express Instance - Server Code */
const express = require('express');
const cors = require('cors');
const app = express();

/* Server Settings */
app.set('port', process.env.PORT || 4000);

/* Server Middleware */
app.use(cors());
app.use(express.json());

/* Server Routes */
app.use('/api/users', require('./routes/users.route'));
app.use('/api/notes', require('./routes/notes.route'));

/* Export express instance */
module.exports = app;

