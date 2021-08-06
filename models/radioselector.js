'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RadioSelector extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RadioSelector.init({
    question_content: DataTypes.STRING,
    question_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'RadioSelector',
  });
  return RadioSelector;
};