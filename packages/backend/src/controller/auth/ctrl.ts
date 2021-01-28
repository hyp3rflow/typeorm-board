import { RequestHandler } from '../packages/backend/src/express';
import User from '../packages/backend/src/models/User';

export const register: RequestHandler = async (req, res, next) => {
  try {
    const user = new User();
    user.user_name = 'hyperflow';
    user.user_password = '123';

    await User.save(user);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
};
