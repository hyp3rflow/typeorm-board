import { ErrorRequestHandler } from 'express';

interface Error {
  statusCode: number;
  msg: string;
}

const errorList: { [key: string]: Error } = {
  INVALID_PARAMS: {
    statusCode: 400,
    msg: 'Bad Request',
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
  console.log(err);
  const errorMessage: string =
    err.message in errorList ? err.message : 'INTERNAL_ERROR';
  const error: Error = errorList[errorMessage];
  res.status(error.statusCode).json({ msg: error.msg });
};

export default errorHandler;
