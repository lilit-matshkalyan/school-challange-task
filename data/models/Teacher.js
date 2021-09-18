/* eslint-disable func-names */

/**
 * Sequelize Model's definition documentation
 * @see https://sequelize.org/master/manual/models-definition.html
 */

/** Sequelize Model's usage documentation
 * @see https://sequelize.org/master/manual/models-usage.html
 * */

const {
    TEACHER
} = require('../lcp/resources');
const { PUBLIC } = require('../lcp/schemas');


module.exports = (sequelize, DataTypes) => {
    const Teacher = sequelize.define(
        TEACHER.MODEL,
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            name: {
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
            schema: PUBLIC,
            freezeTableName: true,
            indexes: [
                {
                    unique: true,
                    fields: ['id']
                }
            ]
        }
    );

    Teacher.associate = (models) => {
        Teacher.hasOne(models.Clazz, {
            as: TEACHER.ALIAS.SINGULAR,
            foreignKey: 'teacherId'
        });
        Teacher.hasMany(models.Subject, {
            as: TEACHER.ALIAS.PLURAL,
            foreignKey: 'teacherId'
        });
    };


    return Teacher;
};
