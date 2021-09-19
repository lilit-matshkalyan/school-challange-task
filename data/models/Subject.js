/* eslint-disable func-names */

/**
 * Sequelize Model's definition documentation
 * @see https://sequelize.org/master/manual/models-definition.html
 */

/** Sequelize Model's usage documentation
 * @see https://sequelize.org/master/manual/models-usage.html
 * */

const {
    SUBJECT, TEACHER, SUBJECT_STUDENT_GRADE
} = require('../lcp/resources');
const { PUBLIC } = require('../lcp/schemas');


module.exports = (sequelize, DataTypes) => {
    const Subject = sequelize.define(
        SUBJECT.MODEL,
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

    Subject.associate = (models) => {
        Subject.belongsTo(models.Teacher, {
            as: TEACHER.ALIAS.PLURAL,
            foreignKey: 'teacherId',
            onDelete: 'CASCADE'
        });
        Subject.hasMany(models.StudentGrade, {
            as: SUBJECT_STUDENT_GRADE.ALIAS.PLURAL,
            foreignKey: 'subjectId'
        });
    };


    return Subject;
};
