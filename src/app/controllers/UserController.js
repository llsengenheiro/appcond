import User from '../models/User';

class UserController {
  async strore(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'Usuário já existe' });
    }
    const { id, name, email, type_user } = await User.create(req.body);

    return res.json({ id, name, email, type_user });
  }
}
export default new UserController();
