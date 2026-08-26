import express from 'express';
import { registerUser, loginUser, getCurrentUser, forgetPassword, resetPassword} from '../controller/user.js';
import { authMiddleware } from '../middleware/auth.js';
const router = express.Router();

router.post('/register', registerUser);
router.post("/login", loginUser);
router.get("/me", authMiddleware ,getCurrentUser);
router.post("/forget", forgetPassword);
router.patch("/reset/:email", resetPassword);


export default router;