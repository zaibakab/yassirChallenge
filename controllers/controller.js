const db = require("../models");
const Op = db.Sequelize.Op;
const Pollution = db.pollutions;
module.exports = {

  getAllAqiusRecords,
  getHighersAqiusRecords,
};

// get all records in pollution db 
async function getAllAqiusRecords() {
  const AllAqiusRecords = await Pollution.findAll();

  return AllAqiusRecords;
}

// get all highers records equad to higher valuer of Aqius
async function getHighersAqiusRecords(maxOfAquis) {
  const AllAqiusRecords = await Pollution.findAll({

    // find all with condition aqius equal to maxOfAquis 
    where: {
      aqius: {
        [Op.eq]: maxOfAquis,
      },
    },
    // get only two columns ["aqius", "createdAt"]
    attributes: ["aqius", "createdAt"],
    
  });

  return AllAqiusRecords;
}
