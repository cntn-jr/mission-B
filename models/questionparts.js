'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuestionParts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  QuestionParts.init({
    title_parts: DataTypes.STRING,
    form_id: DataTypes.INTEGER,
    is_radio: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'QuestionParts',
  });
  return QuestionParts;
};