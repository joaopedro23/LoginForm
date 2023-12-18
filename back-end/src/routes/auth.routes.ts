import { Router, Response } from "express";
import jwt from 'jsonwebtoken';
import authconfig from './../config/auth.config';

const authRoutes = Router();

authRoutes.post("/login", (req, res: Response) => {
    const { email, password } = req.body.userData;
    console.log('Dados recebidos do front-end:', req.body.userData);

    if (email === undefined || password === undefined) {
        res.status(401).json({
            success: false,
            code: "dd101_API_ERRO",
            message: 'E-mail and/or password invalid'
        });
    } else {
        
        if (email === 'admin@gmail.com' && password === '010203') {
            let tokenData = {
                id: 101,
                isAdmin: true 
            };

            let generatedToken = jwt.sign(tokenData, authconfig.JWT_KEY, { expiresIn: '1m' });

            
            res.json({
                success: true,
                token: generatedToken,
                redirectTo: '/admin' 
            });
        } else {
            let tokenData = {
                id: 101,
                isAdmin: false 
            };

            let generatedToken = jwt.sign(tokenData, authconfig.JWT_KEY, { expiresIn: '1m' });

            
            res.json({
                success: true,
                token: generatedToken,
                redirectTo: '/client' 
            });
        }
    }
});

export default authRoutes;
