import { ErrorRequestHandler } from 'express';

interface Error {
  statusCode: number;
  msg: string;
}

const errorList: { [key: string]: Error } = {
  WRONG_PASSWORD: {
    statusCode: 401,
    msg: '틀린 패스워드입니다.',
  },
  INVALID_ID: {
    statusCode: 401,
    msg: '아이디를 찾을 수 없습니다.',
  },
  INVALID_PARAMS: {
    statusCode: 400,
    msg: '입력이 올바르지 않습니다.',
  },
  AUTH_FAILED: {
    statusCode: 401,
    msg: 'Unauthorized',
  },
  NOT_EXIST: {
    statusCode: 404,
    msg: 'Not Found',
  },
  INTERNAL_ERROR: {
    statusCode: 500,
    msg: 'Internal Server Error',
  },
};

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const errorMessage: string =
    err.message in errorList ? err.message : 'INTERNAL_ERROR';
  const error: Error = errorList[errorMessage];
  res.status(error.statusCode).json({ msg: error.msg });
};

export default errorHandler;
