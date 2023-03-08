const { Model } = require('sequelize');

const validator = require('validator');
const { roles } = require('../src/config/roles');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
      },
      name: {
        type: DataTypes.STRING,
        required: true,
        trim: true,
      },
      lastName: {
        type: DataTypes.STRING,
        trim: true,
      },
      email: {
        type: DataTypes.STRING,
        required: true,
        trim: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error('Invalid Email');
          }
        },
      },
      password: {
        type: DataTypes.STRING,
        required: true,
        trim: true,
        allowNull: false,
        validate: { min: 8 },
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: 'user',
        validate: {
          isIn: roles,
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
      timestamps: true,
    }
  );

  // Schema Hooks

  User.beforeCreate('beforeUserCreation', (user) => {
    user.email = user.email.toLowerCase();
  });

  // Hooks with custom names
  User.addHook('beforeCreate', 'isEmailTaken', (user) => {
    const emailExists = User.findOne({ email: user.email });

    return !!emailExists;
  });

  return User;
};
