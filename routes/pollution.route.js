const {
  getAllAqiusRecords,
  getHighersAqiusRecords,
} = require("../controllers/controller");
const axios = require("axios");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.get("/getAllAqiusRecords", async (req, res, next) => {
    try {
      // call getAllAqiusRecords from conroller to get all records 
      const AllAqiusRecords = await getAllAqiusRecords();
      var aquisAllvalues = [];
      
      // fetch data and get max of the records
      for (var index = 0; index < AllAqiusRecords.length; index++) {
        aquisAllvalues.push(parseInt(AllAqiusRecords[index].aqius));
      }
      var maxOfAquis = Math.max(...aquisAllvalues);

      // get all values equal to max value
      //  call getHighersAqiusRecords from controller
      const highersAqiusRecords = await getHighersAqiusRecords(maxOfAquis);

      // return result 'highersAqiusRecords'
      res.status(200).json({ highersAqiusRecords });
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

  // get “nearest_city” data
  app.get("/getNearestCity", (req, res) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://api.airvisual.com/v2/nearest_city?key=64d9b40a-369c-4dbc-b4f3-0d6edf3a2294",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        // customizing the result
        let customObj =
          '{"Result" : { "Pollution": {' +
          JSON.stringify(response.data.data.current.pollution) +
          "}}}";
          // return result 'customObj'
        res.send(customObj);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  
};
