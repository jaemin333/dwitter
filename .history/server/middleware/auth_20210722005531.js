import jwt from 'jsonwebtoken';
import * as userRepository from '../data/auth.js';

const AUTH_ERROR = {message : 'Authentication Error'};

export const isAuth = async (req, res, next) => {
    const authHeader = req.get('Authorization');
    if(!(authHeader && authHeader.startsWith('Bearer'))) {
        return res.status(401).json(Auth_ERROR);
    }    


    

}