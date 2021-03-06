/* eslint-disable func-names */

/**
 * Sequelize Model's definition documentation
 * @see https://sequelize.org/master/manual/models-definition.html
 */

/** Sequelize Model's usage documentation
 * @see https://sequelize.org/master/manual/models-usage.html
 * */

const {
    STUDENT, CLAZZ, STUDENT_STUDENT_GRADE
} = require('../lcp/resources');
const { PUBLIC } = require('../lcp/schemas');


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
            clazzId: {
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
                    fields: ['clazzId']
                }
            ]
        }
    );

    Student.associate = (models) => {
        Student.belongsTo(models.Clazz, {
            as: CLAZZ.ALIAS.PLURAL,
            foreignKey: 'clazzId',
            onDelete: 'CASCADE'
        });
        Student.hasMany(models.StudentGrade, {
            as: STUDENT_STUDENT_GRADE.ALIAS.PLURAL,
            foreignKey: 'studentId'
        });
    };


    return Student;
};
