import { Router } from 'express';
import { tokenMiddleware } from 'lib/tokenMiddleware';
import * as board from './board.ctrl';

const router = Router();

router.get('/boardList', tokenMiddleware, board.postList);
router.post('/write', tokenMiddleware, board.writePost);

export default router;
