import Joi from 'joi';

export const INTEGER = Joi.number().integer();
export const STRING = Joi.string();

export const userId = STRING.regex(/[A-Za-z0-9]\w+/)
  .max(20)
  .min(4)
  .required();

export const userPassword = STRING.regex(
  /\^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@!%*#?&])[A-Za-z\d$@!%*#?&]{8,}$/
)
  .max(30)
  .required();

export const userName = STRING.regex(/[가-힣A-Za-z0-9]\w+/)
  .max(20)
  .min(4)
  .required();

export const token = STRING.max(300).required();

export const dataValidator = async (
  object: object,
  schema: Joi.ObjectSchema
) => {
  try {
    const result = await schema.validateAsync(object);
    return result;
  } catch (err) {
    throw new Error('INVALID_PARAMS');
  }
};
