'use strict';

module.exports = {
    up: async (queryInterface) => {
        const nowDate = new Date();
        await queryInterface.bulkInsert('Teacher', [
            {id: '9a650b8e-dacb-4317-8d6f-fee106325d07', name: 'Mrs. Treusch', createdAt: nowDate, updatedAt: nowDate},
            {id: '35d4f7cc-31d3-4b25-b0a9-4b01bfd157fd', name: 'Mrs. Darin', createdAt: nowDate, updatedAt: nowDate},
            {id: '53705bc1-ae11-480a-9977-f2818e55eb32', name: 'Mrs. Crotty', createdAt: nowDate, updatedAt: nowDate},
            {id: 'de93e8c1-c971-42f7-bbda-4dd2344e2338', name: 'Ms. Charron', createdAt: nowDate, updatedAt: nowDate}
        ], {});
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('Teacher', null, {});
    }
};
