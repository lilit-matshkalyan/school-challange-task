/* eslint-disable func-names */

/**
 * Sequelize Model's definition documentation
 * @see https://sequelize.org/master/manual/models-definition.html
 */

/** Sequelize Model's usage documentation
 * @see https://sequelize.org/master/manual/models-usage.html
 * */

const {
    CLAZZ, TEACHER
} = require('../lcp/resources');
const { PUBLIC } = require('../lcp/schemas');


module.exports = (sequelize, DataTypes) => {
    const Clazz = sequelize.define(
        CLAZZ.MODEL,
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
            teacherId: {
                required: true,
                allowNull: false,
                type: DataTypes.UUID
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
                },
                {
                    fields: ['teacherId']
                }
            ]
        }
    );

    Clazz.associate = (models) => {
        Clazz.belongsTo(models.Teacher, {
            as: TEACHER.ALIAS.SINGULAR,
            foreignKey: 'teacherId',
            onDelete: 'CASCADE'
        });
        Clazz.hasMany(models.Student, {
            as: CLAZZ.ALIAS.PLURAL,
            foreignKey: 'clazzId'
        });
    };


    return Clazz;
};
