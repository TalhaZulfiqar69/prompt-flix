import ResponseHelper from '../utils/response.util.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
// import database from '../config/database.js';
import { validationResult, matchedData } from 'express-validator';


export const login = async (req, res) => {
    let response = ResponseHelper.getResponse(
        false,
        'Something went wrong',
        {},
        400
    );
    try {
        // const { password } = req.body;
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     const validationErrors = errors.array();
        //     response.message = validationErrors[0].msg;
        // } else {
        //     const validatedData = matchedData(req);
        //     const { email } = validatedData;
        //     const user = await models.User.findOne({
        //         where: { email: email, user_type: 'admin' },
        //     });
        //     if (user) {
        //         const verifyPassword = bcrypt.compareSync(password, user.password);
        //         if (verifyPassword == false) {
        //             response.message = MessageHelper.getMessage(
        //                 'incorrect_password_error',
        //                 language
        //             );
        //         } else {
        //             if (user.is_verified == 0) {
        //                 response.message = MessageHelper.getMessage(
        //                     'account_not_verified_message',
        //                     language
        //                 );
        //             } else {
        //                 const token = jwt.sign(
        //                     { email: user.email },
        //                     meducomConfig.custom.jwtSecretString,
        //                     { expiresIn: '1h' }
        //                 );
        //                 const admin_user = {
        //                     id: user.id,
        //                     first_name: user.first_name,
        //                     last_name: user.last_name,
        //                     email: user.email,
        //                     user_type: user.user_type,
        //                     city: user.city,
        //                     province: user.province,
        //                     token: token,
        //                     created_at: user.created_at,
        //                     updated_at: user.updated_at,
        //                 };
                        response.success = true;
                        response.message = "Login successfully.";
                        response.data = {};
                        response.status = 200;
        //             }
        //         }
        //     } else {
        //         response.message = "This email does not belong to any account.";
        //     }
        // }
    } catch (err) {
        console.log('error', err);
        response.message = "An exception error occured.";
        response.statue = 500;
    } finally {
        return res.status(response.status).json(response);
    }
}