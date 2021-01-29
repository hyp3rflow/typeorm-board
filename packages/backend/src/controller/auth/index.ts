import { Router } from 'express';
import * as auth from './auth.ctrl';

const router = Router();

router.post('/login', auth.login);
router.post('/register', auth.register);
router.post('/validation', auth.validateToken);

export default router;
