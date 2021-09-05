import jwt from 'jsonwebtoken';

export default (req, res, next) => {
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
