module.exports = (sequelize, Sequelize) => {
  const Pollution = sequelize.define("pollution", {
    ts: {
      type: Sequelize.STRING
    },
    aqius: {
      type: Sequelize.STRING
    },
    mainus: {
      type: Sequelize.STRING
    },
    aqicn: {
      type: Sequelize.STRING
    },
    maincn: {
      type: Sequelize.STRING
    },
  });

  return Pollution;
};
