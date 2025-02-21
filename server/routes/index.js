import express from 'express';
import authRouter from './user.js';

const router = express.Router();

/* GET default server response. */
router.get('/', function (req, res) {
    res.status(200).json({
        status: 200,
        success: true,
        message: 'Welcome to Prompt-Flix APIs',
        data: {},
    });
});

router.use('/api/auth', authRouter); // Auth routes

export default router
