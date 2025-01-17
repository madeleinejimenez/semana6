var express = require('express');
var router = express.Router();
var autoRoutes = require("./auto.routes");

/* GET home page. */
router.use("/autos", autoRoutes);


module.exports = router;
