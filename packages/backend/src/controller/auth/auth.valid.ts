import Joi from 'joi';
import {
  STRING,
  token,
  userId,
  userName,
  userPassword,
} from 'lib/argValidator';

export const loginSchema = Joi.object({
  user_id: userId,
  password: STRING.required(),
});

export const registerSchema = Joi.object({
  user_id: userId,
  password: userPassword,
  user_name: userName,
});

export const tokenSchema = Joi.object({
  token: token,
});
