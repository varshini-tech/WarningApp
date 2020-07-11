//importing packages
const axios=require("axios");


//check validity of each package

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


exports.handler = async (event) => {
    
    try {
        
    // converting string body to json
    const bodyContent = JSON.parse(event.body);
    
    // invoking the function to find invalid packages
    const res_ponse=await checkPackageValidity(bodyContent["packages"]);
    
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(res_ponse),
    };
    return response;
    } catch (e) {
        return {
            error:e
        }
    }
};
