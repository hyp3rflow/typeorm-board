import { Router } from 'express';
import auth from './auth';
import board from './board';

const router = Router();

router.use('/auth', auth);
router.use('/board', board);

export default router;
