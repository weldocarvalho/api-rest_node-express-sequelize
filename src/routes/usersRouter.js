import { Router } from 'express';
import usersController from '../controllers/UsersController';
import authMid from '../middlewares/authMid';

const router = new Router();

router.get('/users', usersController.index);
router.post('/users/search', usersController.show);
router.post('/users', usersController.store);
router.put('/users/:id', authMid, usersController.update);
router.delete('/users/:id', authMid, usersController.delete);

export default router;
