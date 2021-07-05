const express = require("express");
const expressSession = require("express-session");
const path = require("path");

const app = express();

xPORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/controllers/public')));

const Router = express.Router();

// --------- filter Request
app.use(
    (req, res, next) => {
        console.log("\n\n----------------\n TIME: ", Date.now());
        console.log("\n URL: ", req.url);
        console.log("\n QUERY: ", req.query);
        next();
    }
);

// --------- ERROR Handle
app.use(
  (err, req, res, next) => {
      console.log("\n ERR: ", Date.now());
      res.status(500).send("WEB Broken !");
  }
);

Router.get("/", getHome);

function getHome(req, res) {
    res.sendFile(__dirname + "/controllers/public/home.html");
}

  //__dirname : It will resolve to your project folder.

const HomeController = require("./controllers/HomeController");
app.use("/home", HomeController);

const ProductController = require("./controllers/ProductController");
app.use("/product", ProductController);

const ProductDetail1Controller = require("./controllers/ProductDetail1Controller");
app.use("/productdetail", ProductDetail1Controller);

const LoginController = require("./controllers/LoginController");
app.use("/login", LoginController);

const OrderController = require("./controllers/OrderController");
app.use("/order", OrderController);

const PaymentController = require("./controllers/PaymentController");
app.use("/payment", PaymentController);

const AddProductController = require("./controllers/AddProductController");
app.use("/new", AddProductController);

const DeleteProductController = require("./controllers/DeleteProductController");
app.use("/delete", DeleteProductController);

const ReportController = require("./controllers/ReportController");
app.use("/report", ReportController);

// Sử dụng Middleware (LIB) cho WEB
//-----------------------------------
app.use("/", Router);
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

// Mở WEB tại xPORT
//-----------------------------------
app.listen(xPORT);

console.log("\n WEB tại PORT: ", xPORT);