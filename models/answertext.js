'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AnswerText extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AnswerText.init({
    content_answer: DataTypes.STRING,
    question_id: DataTypes.INTEGER,
    answer_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AnswerText',
  });
  return AnswerText;
};