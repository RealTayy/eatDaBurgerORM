var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get('/api/burgers', function (req, res) {
    burger.get(function (data) {
        res.json(data);
    });
});

router.post('/api/burgers', function (req, res) {
    burger.add(req.body.name);
});

router.put('/api/burgers/:id', function (req, res) {
    burger.update(req.params.id, req.body.devoured);
});

router.delete('/api/burgers/:id', function (req, res) {
    burger.delete(req.params.id);
})

module.exports = router;