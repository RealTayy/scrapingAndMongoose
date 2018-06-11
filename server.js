/***************|
|* DEPENDECIES *|
|***************/
const express = require('express');
const mongojs = require('mongojs');
const logger = require('morgan');
const path = require('path');


// Initialize express app and set port variable
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for Express
app.use(logger('dev'));

// Set folder paths
const publicDir = path.join('./', 'app', 'public');

// Set up express to use public as static folder
app.use(express.static(publicDir));

/**********|
|* ROUTES *|
|**********/

app.get('/', (req, res) => {
	res.send(publicDir);
})

app.listen(PORT, () => { console.log('App listening on PORT: ' + PORT)});