var express = require('express');
var router = express.Router();

/////////// --- Khai báo các xử lý trong 1 Controller
router.get("/", getProductDetail1);

function getProductDetail1(req, res) {
    res.sendFile(__dirname + "/public/productdetail1.html");
}


/// --- EXports
module.exports = router;