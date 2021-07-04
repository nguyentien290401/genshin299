var express = require('express');
var router = express.Router();

router.get("/", getNewProduct);

function getNewProduct(req, res) {
    res.sendFile(__dirname + "/public/addproduct.html");
}

/// --- EXports
module.exports = router;