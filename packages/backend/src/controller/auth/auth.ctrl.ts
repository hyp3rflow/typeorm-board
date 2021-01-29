import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import User from 'models/User';
import { dataValidator } from 'lib/argValidator';
import { loginSchema, registerSchema, tokenSchema } from './auth.valid';

export const login: RequestHandler = async (req, res, next) => {
  try {
    await dataValidator(req.body, loginSchema);
    const { user_id, password } = req.body;

    const findUser = await User.findOne({ where: { user_id } });

    if (findUser && findUser.user_password === password) {
      const token = jwt.sign(
        { user_id, user_name: findUser.user_name },
        'jwtSecret',
        { expiresIn: '1d' }
      );

      return res.json({
        token,
      });
    } else {
      throw findUser ? new Error('WRONG_PASSWORD') : new Error('INVALID_ID');
    }
  } catch (err) {
    next(err);
  }
};

export const register: RequestHandler = async (req, res, next) => {
  try {
    await dataValidator(req.body, registerSchema);
    const { user_id, user_name, password } = req.body;

    const validUsername = await User.findOne({
      where: { user_id },
    });
    if (validUsername) {
      return res.status(406).json({ msg: '이미 존재하는 username입니다.' });
    }

    const newUser = new User();
    newUser.user_id = user_id;
    newUser.user_name = user_name;
    newUser.user_password = password;
    await User.save(newUser);

    return res.status(200).json({ msg: '회원가입 성공!' });
  } catch (err) {
    next(err);
  }
};

export const validateToken: RequestHandler = async (req, res, next) => {
  try {
    await dataValidator(req.body, tokenSchema);
    const { token } = req.body;

    jwt.verify(token, 'jwtSecret', (err: any) => {
      if (err)
        return res.status(406).json({ msg: '유효하지 않은 토큰입니다.' });
      return res.json({ msg: '유효한 토큰입니다.' });
    });
  } catch (err) {
    next(err);
  }
};
