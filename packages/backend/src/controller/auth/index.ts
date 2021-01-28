import { Router } from '../packages/backend/src/express';
import * as auth from './ctrl';

const router = Router();

router.post('/register', auth.register);

export default router;