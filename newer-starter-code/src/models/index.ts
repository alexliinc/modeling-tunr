//Connect
import * as Sequelize from 'sequelize';

var sequelize = new Sequelize('postgres://alexli@localhost:5432/tunr_models');

var Artist = sequelize.import("./artist");
var Manager = sequelize.import("./manager");

const db = <any>{};
db.models = {
	Artist,
	Manager
};

//Export models and Sequelize for seed and dbSetup
db.Sequelize = Sequelize;
db.sequelize = sequelize;

export {db};