import User from '../models/User';

class UsersController {
  async store(req, res) {
    // const { id, name, lastname, email, password } = req.body;

    try {
      const user = await User.create(req.body);

      const { id, name, lastname, email } = user;

      return res.status(201).json({ id, name, lastname, email });
    } catch (e) {
      console.log(e);
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['id', 'name', 'email'],
      });

      if (!users.length > 0) {
        return res.status(400).json({
          errors: ['não existem usuários(as) cadastrados(as)'],
        });
      }

      return res.status(200).json({ users });
    } catch (error) {
      console.log(error);
      return res.status(500).json(null);
    }
  }

  async show(req, res) {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({
          errors: ['email deve ser enviado no corpo da requisição'],
        });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(400).json({
          errors: ['usuário(a) não encontrado(a)'],
        });
      }

      const { id, name } = user;

      return res.status(200).json({ id, name, email });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ errors: ['algo inesperado ocorreu'] });
    }
  }

  async update(req, res) {
    try {
      const id = req.userId;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não identificado. Faça login novamente'],
        });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          errors: ['usuário(a) não encontrado(a)'],
        });
      }

      const updatedData = await user.update(req.body);

      const { name, lastname, email } = updatedData;

      return res.status(201).json({ id, name, lastname, email });
    } catch (e) {
      console.log(e);
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const id = req.userId;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não identificado. Faça login novamente'],
        });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          errors: ['usuário(a) não encontrado(a)'],
        });
      }

      await user.destroy();

      return res.status(200).json({ success: 'usuário(a) apagado(a)' });
    } catch (e) {
      console.log(e);
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UsersController();
