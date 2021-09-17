/* eslint-disable func-names */

/**
 * Sequelize Model's definition documentation
 * @see https://sequelize.org/master/manual/models-definition.html
 */

/** Sequelize Model's usage documentation
 * @see https://sequelize.org/master/manual/models-usage.html
 * */

const {
  STUDENT
} = require('../lcp/resources');
const { SCHOOL_CHALLENGE_CORE_SCHEMA } = require('../lcp/schemas');


module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    STUDENT.MODEL,
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      fullName: {
        required: true,
        allowNull: false,
        type: DataTypes.STRING
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    },
    {
      timestamps: true,
      schema: SCHOOL_CHALLENGE_CORE_SCHEMA,
      freezeTableName: true,
      indexes: [
        {
          unique: true,
          fields: ['id']
        },
        {
          fields: ['fullName']
        }
      ]
    }
  );


  return Student;
};
