import express from '../packages/backend/src/express';
import morgan from '../packages/backend/src/morgan';
import cors from '../packages/backend/src/cors';
import controller from '../packages/backend/src/controller';

import { createConnection } from '../packages/backend/src/typeorm';

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', controller);

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
