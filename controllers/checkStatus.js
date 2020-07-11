//importing packages
const axios = require("axios");
const {
    response
} = require("express");

// checks validity of each package
const checkPackageValidity = async (packageNames) => {

    // hold the list of banned apps
    const bannedApps = [];

    // looping through list of packages
    for (let i = 0; i < packageNames.length; i++) {

        let response;
        try {
            response = await axios.get("https://play.google.com/store/apps/details?id=" + packageNames[i]);
        } catch (error) {
            if (error.response.status == 404)
                bannedApps.push(packageNames[i]);
        }
    }
    // returning banned apps
    return bannedApps;
};


module.exports.checkStatus = async (req, res) => {

    try {
        // getting the request body
        const requestBody = req.body;

        // check validity of packages
        const validityArray = await checkPackageValidity(requestBody["packages"]);

        // sends response to server
        res.send({
            status: true,
            data: validityArray
        });
    } catch (error) {
        res.send({
            status: false,
            error: error
        });
    }
};