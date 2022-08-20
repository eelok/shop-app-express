const express = require('express');
const app = express();

const router = express.Router();

router.get("/", (req, res, next) => {
    console.log('in the middleware');
    res.send('<h1>Hello from Express</h1>');
    next();
});

module.exports = router;