// library allows us to schedule jobs (arbitrary functions)
const schedule = require("node-schedule");
const controller = require("../controllers/pollution.controller");
// we call axios for http request 
const axios = require("axios");

module.exports = schedule.scheduleJob("* * * * *", () => {
    // we use scheduleJob (* * * * *) for schecdule job every 1 minutes
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://api.airvisual.com/v2/nearest_city?lat=48.856613&lon=2.352222&key=64d9b40a-369c-4dbc-b4f3-0d6edf3a2294",
    headers: {},
  };

  axios
    .request(config)
    .then((response) => {
        // call 'addNewRecordOFPollutionOfParisZone' from controller for Post data into Db 
      controller.addNewRecordOFPollutionOfParisZone(response.data.data.current.pollution);
    })
    .catch((error) => {
      console.log(error);
    });
});
