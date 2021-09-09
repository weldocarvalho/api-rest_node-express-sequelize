import { Router } from 'express';
import multer from 'multer';

import profilePictureController from '../controllers/ProfilePictureController';
import multerConfig from '../config/multer';

const upload = multer(multerConfig);
const router = new Router();

router.get('/', upload.single('picture'), profilePictureController.store);

export default router;
