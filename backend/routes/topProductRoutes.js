import express from 'express';
const router = express.Router();
import { getTopProducts } from '../controllers/topProductController.js';

router.route('/').get(getTopProducts);

export default router;