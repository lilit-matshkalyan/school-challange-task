'use strict';

module.exports = {
    up: async (queryInterface) => {
        const nowDate = new Date();
        await queryInterface.bulkInsert('Subject', [
            {
                id: '87ebf721-d4e9-4eb6-a611-2bc058ef384b',
                name: 'Mathematics',
                teacherId: '53705bc1-ae11-480a-9977-f2818e55eb32',
                createdAt: nowDate,
                updatedAt: nowDate
            },
            {
                id: '371f0c89-31a1-4956-8d52-38f28b422ac0',
                name: 'Chemistry',
                teacherId: 'de93e8c1-c971-42f7-bbda-4dd2344e2338',
                createdAt: nowDate,
                updatedAt: nowDate
            },
            {
                id: '52b94f01-056e-41d0-8831-ab8a265c5b78',
                name: 'Biology',
                teacherId: '9a650b8e-dacb-4317-8d6f-fee106325d07',
                createdAt: nowDate,
                updatedAt: nowDate
            },
            {
                id: '0721563e-0f32-4177-96c6-10527221976c',
                name: 'Physics',
                teacherId: '35d4f7cc-31d3-4b25-b0a9-4b01bfd157fd',
                createdAt: nowDate,
                updatedAt: nowDate
            },
            {
                id: '27764da1-fac5-4204-9364-2b4190351afe',
                name: 'Literacy',
                teacherId: '53705bc1-ae11-480a-9977-f2818e55eb32',
                createdAt: nowDate,
                updatedAt: nowDate
            },
            {
                id: '4d2a440c-4d7a-451a-8116-5ec590ea4e47',
                name: 'English',
                teacherId: '9a650b8e-dacb-4317-8d6f-fee106325d07',
                createdAt: nowDate,
                updatedAt: nowDate
            }
        ], {})
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('Subject', null, {});
    }
};
