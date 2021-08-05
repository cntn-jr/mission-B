'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuestionForm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  QuestionForm.init({
    title_form: DataTypes.STRING,
    create_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'QuestionForm',
  });
  return QuestionForm;
};