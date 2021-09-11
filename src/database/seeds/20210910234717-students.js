module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'students',
      [
        {
          name: 'usuario',
          lastname: '01',
          email: 'usuario01@usuario.com',
          age: 33,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'usuario',
          lastname: '02',
          email: 'usuario02@usuario.com',
          age: 25,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'usuario',
          lastname: '03',
          email: 'usuario03@usuario.com',
          age: 18,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'usuario',
          lastname: '04',
          email: 'usuario04@usuario.com',
          age: 37,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'usuario',
          lastname: '05',
          email: 'usuario05@usuario.com',
          age: 23,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('students', null, {});
  },
};
