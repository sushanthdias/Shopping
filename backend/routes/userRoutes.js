import express from 'express';
const router = express.Router();
import { authUser, getUserProfile, registerUser, updatetUserProfile, getUsers, deleteUser } from '../controllers/userController.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(protect, isAdmin, getUsers);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updatetUserProfile);
router.route('/:id').delete(protect, isAdmin, deleteUser);

export default router;