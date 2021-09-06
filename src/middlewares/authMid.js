import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['necessário o login'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dataUser = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dataUser;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['faça login novamente. Usuário(a) inválido(a)'],
      });
    }

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      errors: ['token expirado ou inválido'],
    });
  }
};
