/***************|
|* DEPENDECIES *| 
|***************/
/* GENERAL */
// Utilities for working with file and directory paths
const path = require('path');

/* WEB FRAMEWORKS */
// lightweight web framework for node server
const express = require('express');
// create instance of express router
const router = express.Router();

/* WEB SCRAPERS */
// tool for making HTTP calls
const request = require('request');
// scraper that implements jQuery
const cheerio = require('cheerio');

/******************|
|* INITIALIZATION *| 
|******************/
/* SET UP FOLDER PATHS */
const mongoModelDir = path.join(__dirname, '..', 'db', 'models', 'mongoose-models');

/* TALK TO MODELS */
const collectionName = require(path.join(mongoModelDir, 'ExSchema.js'));

/*****************|
|* SET UP ROUTER *| 
|*****************/
/* SET ROUTES */
router.get('/scrap', (req, res) => {
    collectionName.find({})
        .exec((error, data) => {
            res.json(data);
        })
});

router.post('/articles', (req, res) => {
});

router.delete('/article/:id', (req, res) => {
});

router.put('/notes/:id', (req, res) => {
});

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router
module.exports = router;