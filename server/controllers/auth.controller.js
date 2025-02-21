// import { login } from '../services';
import { login } from '../services/auth.service.js';

class AuthController {
    /**
     * @param req request body
     * @param res callback response object
     * @description Method to login
     * @date 21 Feb 2025
     * @updated 21 Feb 2025
     */
    static async login(req, res) {
        const data = await login(req, res);
        return data;
    }
}

export default AuthController;
