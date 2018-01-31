const express = require('express');
const Router = express.Router;

Router.post('/', (req, res) => {
    console.log(req.body);
    res.send("img api");

});

Router.get('/', (req, res) => {
    res.send("img api get");
});

Router.get('/:id', (req, res) => {
    
});

Router.put('/', (req, res) => {
    
});

Router.delete('/', (req, res) => {
    
})