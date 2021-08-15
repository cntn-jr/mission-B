'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    name: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: '入力項目が正しくありません'
        },
      }
    },
    email: {
      type:DataTypes.STRING,
      validate: {
        isEmail: {
          msg: '入力項目が正しくありません'
        },
        notEmpty: {
          msg: '入力項目が正しくありません'
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: '入力項目が正しくありません'
        },
      }
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};