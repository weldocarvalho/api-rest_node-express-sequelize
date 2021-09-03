import User from '../models/User';

class UsersController {
  async store(req, res) {
    const {
      id, name, lastname, email, password,
    } = req.body;

    const user = await User.create({
      id,
      name,
      lastname,
      email,
      password,
    });

    res.json({ user });
  }
}

export default new UsersController();
