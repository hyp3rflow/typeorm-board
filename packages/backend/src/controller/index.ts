import { Router } from '../packages/backend/src/express';
import auth from './auth';

const router = Router();

router.use('/auth', auth);

export default router;
