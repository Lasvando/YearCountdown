const express = require('express');
const fetch = require('node-fetch');
const request = require('request');
const router = express.Router();

router.get('/', (req, res) => {
    fetch(`http://numbersapi.com/${new Date().getMonth() + 1}/${new Date().getDate()}/date`)
        .then(function (response) {
            response.text().then(function (text) {
                var funFact = text;
                var day = new Date().getDate();
                var month = new Date().getMonth() + 1;
                var nextYear = new Date().getFullYear() + 1;
                res.render('index', { funFact: funFact, day: day, month: month, nextYear: nextYear });
            });
        });
});

module.exports = router;