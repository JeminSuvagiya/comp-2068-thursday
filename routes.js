const express = require('express');
const app = express();

//Import the Page Routes
const pageRoutes = require('./routes/pages');

//Register the page routes with the app
app.use('/', pageRoutes);

//Export the chnages
module.exports = app;