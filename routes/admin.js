const express = require('express');
const path  = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post("/add-product", (req, res, next) => {
    products.push({title: req.body.title});
    console.log(req.body);
    res.redirect("/");
});

exports.routers = router;
exports.products = products;