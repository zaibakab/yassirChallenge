const db = require("../models");
const Pollution = db.pollutions;
const Op = db.Sequelize.Op;

exports.addNewRecordOFPollutionOfParisZone = (customObj) => {
  if (!customObj) {
    return "Content can not be empty!";
  }

  const pollution = {
    ts: customObj.ts,
    aqius: customObj.aqius,
    mainus: customObj.mainus,
    aqicn: customObj.aqicn,
    maincn: customObj.maincn,
  };

  Pollution.create(pollution)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};