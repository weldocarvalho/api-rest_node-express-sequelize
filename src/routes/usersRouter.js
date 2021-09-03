import { Router } from 'express';
import usersController from '../controllers/UsersController';

const router = new Router();

router.get('/users', usersController.index);
router.post('/users/search', usersController.show);
router.post('/users', usersController.store);
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.delete);

export default router;
