import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import controller from 'controller';

import { createConnection } from 'typeorm';
import errorHandler from 'lib/errorHandler';

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', controller);

app.use(errorHandler);

const initDatabase = async (): Promise<void> => {
  try {
    await createConnection();
    console.log('database connected!');
  } catch (error) {
    console.error(error);
  }
};

initDatabase();

export default app;
