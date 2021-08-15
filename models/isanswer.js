'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IsAnswer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  IsAnswer.init({
    answer_user: DataTypes.INTEGER,
    form_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'IsAnswer',
  });
  return IsAnswer;
};