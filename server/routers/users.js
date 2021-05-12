import express, { Router } from 'express';
import { getUser, updateUser } from '../controllers/user.js';

const router = express.Router();

router.get('/:userId', getUser);
router.patch('/update/:userId', updateUser);

export default router;