import User from '../models/User';

class UsersController {
  async store(req, res) {
    const {
      id, name, lastname, email, password,
    } = req.body;

    try {
      const user = await User.create({
        id,
        name,
        lastname,
        email,
        password,
      });

      return res.json({ user });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UsersController();
