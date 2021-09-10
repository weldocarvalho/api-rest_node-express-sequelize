import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [2, 50],
              msg: 'o nome deve ter entre 2 e 50 caracteres',
            },
          },
        },
        lastname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [2, 50],
              msg: 'o sobrenome nome deve ter entre 2 e 50 caracteres',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'email já cadastrado',
          },
          validate: {
            isEmail: {
              msg: 'email inválido',
            },
          },
        },
        age: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'idade precisa ser um número inteiro',
            },
          },
        },
      },
      {
        sequelize,
      },
    );

    return this;
  }
}
