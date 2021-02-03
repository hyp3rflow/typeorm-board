import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { dataValidator } from 'lib/argValidator';
import Board from 'models/Board';
import { postSchema } from './board.valid';

export const postList: RequestHandler = async (req, res, next) => {
  return res.send('hi!');
};

export const writePost: RequestHandler = async (req, res, next) => {
  try {
    await dataValidator(req.body, postSchema);
    const { title, content } = req.body;
    const { authorization: token } = req.headers;

    if (!token) return res.status(800).end();

    const payload = jwt.decode(token, { json: true });
    if (!payload?.id) return res.status(801).end();
    const id = payload.id;

    const post = new Board();
    post.author_id = id;
    post.title = title;
    post.content = content;
    await Board.save(post);

    return res.status(200).end();
  } catch (err) {
    next(err);
  }
};
