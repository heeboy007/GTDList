import express from 'express';
import authController from './auth.controller.js';

const authRouter = express.Router();

authRouter.post('/user/register', authController.register);
authRouter.post('/user/login', authController.login);
authRouter.get('/user/check', authController.check);
authRouter.post('/user/logout', authController.logout);

export default authRouter;