exports.createStudentSchema = {
    fullName: {type: 'string', optional: false, empty: false},
    clazzId: {type: 'string', optional: false, empty: false}
};

exports.updateStudentSchema = {
    fullName: {type: 'string', optional: true, empty: false},
    clazzId: {type: 'string', optional: true, empty: false}
};


exports.createStudentGradeSchema = {
    studentId: {type: 'string', optional: false, empty: false},
    subjectId: {type: 'string', optional: false, empty: false},
    grade: {
        type: 'number',
        optional: false,
        empty: false,
        positive: true,
        integer: true,
        min: 1,
        max: 5
    }
};

