//importing packages
const express = require("express");

// declaring instance of router
const router = express.Router();

// importing controllers
const checkStatusController = require("../controllers/checkStatus");

// setting routes
router.post("/mobileapps",checkStatusController.checkStatus);

// exporting router
module.exports = router;