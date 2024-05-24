import express from 'express';
import { createList } from '../controllers/list.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

//create lists route with token check
router.post('/create',verifyToken,createList)


export default router;