import { Router } from 'express';
import usersController from '../controllers/UsersController';

const router = new Router();

router.post('/users', usersController.store);

export default router;
