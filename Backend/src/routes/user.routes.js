import express from "express";
import { registerUser, loginUser, getMe, logOut } from '../controllers/user.controllers.js';
import { protect } from '../middlewares/protect.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);

router.get('/me', protect, getMe);
router.post('/logout', protect, logOut);

export default router;