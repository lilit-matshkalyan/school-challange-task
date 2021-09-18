exports.createStudentSchema = {
    fullName: {type: 'string', optional: false, empty: false},
    clazzId: {type: 'string', optional: false, empty: false}
};


exports.updateStudentSchema = {
    fullName: {type: 'string', optional: true, empty: false},
    clazzId: {type: 'string', optional: true, empty: false}
};

