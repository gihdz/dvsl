import express from 'express'
import userRoutes from './users'

let router = express.Router();
router.use(userRoutes);

export default router;