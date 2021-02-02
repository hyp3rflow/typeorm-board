import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

export const tokenMiddleware: RequestHandler = async (req, res, next) => {
  try {
    const { authorization: token } = req.headers;

    if (!token) {
      throw Error('AUTH_FAILED');
    }

    jwt.verify(token, 'jwtSecret', (err: any) => {
      if (err) throw Error('AUTH_FAILED');
      next();
    });
  } catch (err) {
    next(err);
  }
};
