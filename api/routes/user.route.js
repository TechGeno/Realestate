import express from 'express';

import { test, updateUser,deleteUser, getUserList, getUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();


router.get('/test',test)
router.post('/update/:id',verifyToken, updateUser)
router.delete('/delete/:id',verifyToken, deleteUser)
router.get('/lists/:id',verifyToken, getUserList);
router.get('/:id', verifyToken, getUser)

export default router;