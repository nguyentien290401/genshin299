var express = require('express');
var router = express.Router();

router.get("/", getDeleteProduct);

function getDeleteProduct(req, res) {
    res.sendFile(__dirname + "/public/deleteproduct.html");
}

/// --- EXports
module.exports = router;