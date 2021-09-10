import { Router } from 'express';
import usersController from '../controllers/UsersController';
import authMid from '../middlewares/authMid';

const router = new Router();

// router.get('/', usersController.index);
// router.post('/search', usersController.show);

router.post('/', usersController.store);
router.put('/', authMid, usersController.update);
router.delete('/', authMid, usersController.delete);

export default router;
