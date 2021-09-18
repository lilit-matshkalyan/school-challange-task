'use strict';

module.exports = {
    up: async (queryInterface) => {
        const nowDate = new Date();
        await queryInterface.bulkInsert('Clazz', [
            {
                id: '9d25f9dc-3ae5-437b-a495-8d56851526e3',
                name: 'First Clazz',
                teacherId: '53705bc1-ae11-480a-9977-f2818e55eb32',
                createdAt: nowDate,
                updatedAt: nowDate
            },
            {
                id: '5d8400e5-464d-470d-8b2b-5fbb048b1c2f',
                name: 'First Clazz',
                teacherId: 'de93e8c1-c971-42f7-bbda-4dd2344e2338',
                createdAt: nowDate,
                updatedAt: nowDate
            },
            {
                id: '46a81ad5-59a1-4550-93c1-b8091440f705',
                name: 'First Clazz',
                teacherId: '9a650b8e-dacb-4317-8d6f-fee106325d07',
                createdAt: nowDate,
                updatedAt: nowDate
            },
            {
                id: '8c7849e8-480b-499f-8f9f-d5b17cf0bab4',
                name: 'First Clazz',
                teacherId: '35d4f7cc-31d3-4b25-b0a9-4b01bfd157fd',
                createdAt: nowDate,
                updatedAt: nowDate
            },
        ], {});
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('Clazz', null, {});
    }
};
