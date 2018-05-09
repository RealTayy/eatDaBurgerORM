var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function (req, res) {
    burger.get(function (data) {
        res.render('index', { burgers: data });
    });
});

router.get('/api/burgers', function (req, res) {
    burger.get(function (data) {
        res.json(data);
    });
});

router.post('/api/burgers', function (req, res) {
    burger.add(req.body.name, function (data) {
        res.json(data);
    });
});

router.put('/api/burgers/:id', function (req, res) {
    burger.update(req.params.id, req.body.devoured, function (data) {
        console.log('sup');
        res.json(data);
    });
});

router.delete('/api/burgers/:id', function (req, res) {
    burger.delete(req.params.id, function (data) {
        res.json(data);
    });
});

module.exports = router;