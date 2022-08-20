const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use("/add-product", (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

app.use("/", (req, res, next) => {
    console.log('in the middleware');
    res.send('<h1>Hello from Express</h1>');
    next();
});


app.listen(3500);
