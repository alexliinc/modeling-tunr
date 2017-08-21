module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("manager", {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    officeNumber: Sequelize.STRING,
    cellNumber: Sequelize.STRING
  });
  return model;
};
