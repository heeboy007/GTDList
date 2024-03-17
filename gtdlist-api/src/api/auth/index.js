import express from 'express';
import authController from './auth.controller.js';

const authRouter = express.Router();

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.get('/check', authController.check);
authRouter.post('/logout', authController.logout);

export default authRouter;