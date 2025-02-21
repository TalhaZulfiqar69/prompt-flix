import express from 'express';
import loginValidation from '../middlewares/validations.middleware.js';
import AuthController from '../controllers/auth.controller.js';
const router = express.Router();


router.get("/login", loginValidation, AuthController.login); // Admin Login api

export default router;
