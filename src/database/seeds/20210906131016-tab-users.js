const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: '3',
          name: 'usuario',
          lastname: '03',
          email: 'usuario03@usuario.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: '4',
          name: 'usuario',
          lastname: '04',
          email: 'usuario04@usuario.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: '5',
          name: 'usuario',
          lastname: '05',
          email: 'usuario05@usuario.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: '6',
          name: 'usuario',
          lastname: '06',
          email: 'usuario06@usuario.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: '7',
          name: 'usuario',
          lastname: '07',
          email: 'usuario07@usuario.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
