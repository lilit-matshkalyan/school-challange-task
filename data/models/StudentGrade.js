/* eslint-disable func-names */

/**
 * Sequelize Model's definition documentation
 * @see https://sequelize.org/master/manual/models-definition.html
 */

/** Sequelize Model's usage documentation
 * @see https://sequelize.org/master/manual/models-usage.html
 * */

const {
    STUDENT_GRADE, STUDENT_STUDENT_GRADE, SUBJECT_STUDENT_GRADE
} = require('../lcp/resources');
const { PUBLIC } = require('../lcp/schemas');


module.exports = (sequelize, DataTypes) => {
    const StudentGrade = sequelize.define(
        STUDENT_GRADE.MODEL,
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            studentId: {
                required: true,
                allowNull: false,
                type: DataTypes.UUID
            },
            subjectId: {
                required: true,
                allowNull: false,
                type: DataTypes.UUID
            },
            grade: {
                required: true,
                allowNull: false,
                type: DataTypes.INTEGER
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
                    fields: ['studentId']
                },
                {
                    fields: ['subjectId']
                },
                {
                    unique: true,
                    fields: ['studentId', 'subjectId']
                }
            ]
        }
    );

    StudentGrade.associate = (models) => {
        StudentGrade.belongsTo(models.Student, {
            as: STUDENT_STUDENT_GRADE.ALIAS.PLURAL,
            foreignKey: 'studentId',
            onDelete: 'CASCADE'
        });
        StudentGrade.belongsTo(models.Subject, {
            as: SUBJECT_STUDENT_GRADE.ALIAS.PLURAL,
            foreignKey: 'subjectId',
            onDelete: 'CASCADE'
        });
    };


    return StudentGrade;
};
