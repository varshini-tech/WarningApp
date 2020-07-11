// importing packages
const express = require("express");

// port used 
const port = process.env.PORT || 7294;

// creating middleware
// converts body data in json format(one of the application)
const app = express();
app.use(express.json());

// importing routers
const checkStatusRouter = require("./routes/checkStatus");

// declaring major routes
app.use("/", checkStatusRouter);

// listening to port
app.listen(port, () => {
    console.log("Server started on port " + port);
});