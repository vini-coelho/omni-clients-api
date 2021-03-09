import { Router } from 'express';

import * as userController from './controllers/UserController';

const router = Router();

router.get('/users', userController.all);
router.post('/users', userController.save);

export default router;
