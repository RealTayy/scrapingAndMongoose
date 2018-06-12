/*****************|
|*  DEPENDECIES  *|
|*****************/
/* GENERAL */
// Utilities for working with file and directory paths
const path = require('path');

/* WEB FRAMEWORKS */
// lightweight web framework for node server
const express = require('express');
// Initialize express under app variable
const app = express();
const PORT = process.env.PORT || 3000;

/* DATABASE APIs */
// START mongodb module for node.js
const mongojs = require('mongojs');
// Database configuration
const databaseUrl = 'databaseName';
const collection = ['collectionName1', 'collectionName2'];
const db = mongojs(databaseUrl, collection);
db.on('error', (error) => console.log(`Database Error: ${error}`))
// END mongodb module for node.js

/* BODY PARSERS */
// node.js body parsing middleware avaiable under req.body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

/* LOGGERS */
/* morgan set to 'dev':
    RED         Server Error Codes
    YELLOW      Client Error Codes
    CYAN        Redirection Codes
    UNCOLORED   Other Codes         */
const logger = require('morgan');
app.use(logger('dev'));

/* SET UP FOLDER PATHS AND STATIS FOLDER */

// Setup app to use ./public as its static folder
app.use(express.static('public'));

/* WEB SCRAPERS */
// tool for making HTTP calls
const request = require('request');
// scraper that implements jQuery
const cheerio = require('cheerio');

/******************|
|* ROUTES GO HERE *|
|******************/
/* EXPRESS ROUTES GO HERE
// Look at myExpresNotes for example
*/

// Start server on relevant PORT
app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT);
});