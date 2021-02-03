import Joi from 'joi';
import { STRING } from 'lib/argValidator';

export const postSchema = Joi.object({
  title: STRING.required(),
  content: STRING.required(),
});
