'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AnswerRadio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AnswerRadio.init({
    select_answer: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    answer_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AnswerRadio',
  });
  return AnswerRadio;
};