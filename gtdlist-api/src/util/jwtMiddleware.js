import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { User } from '../database/index.js';

dotenv.config();

function getJwtSecretToken() {
    const { JWT_SECRETKEY } = process.env;
    return JWT_SECRETKEY;
}

//token for JWT web token(cookie, localStorage)
function generateJWTToken(email) {
    const token = jwt.sign(
        { email },
        getJwtSecretToken(),
        { expiresIn: '1d' }
    );
    return token;
}

const jwtMiddleware = async (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token) //토큰이 없음 
        return next();
    try {
        const decoded = jwt.verify(token, getJwtSecretToken());
        res.userState = {
            email: decoded.email,
        };
        const now = Math.floor(Date.now() / 1000);
        if(decoded.exp - now < 60 * 60 * 12) { //12시간 보다 적으면
            const user = await User.findOne({ 
                where: { email: decoded.email } 
            });
            const token = generateJWTToken(decoded.email);
            res.cookie('access_token', token, {
                maxAge: 1000 * 60 * 60 * 24, //1 day
                httpOnly: true
            });
        }
        console.log(decoded);
        return next();
    } catch(e) { //검증 실패
        return next();
    }
}

export {
    generateJWTToken,
    getJwtSecretToken
};

export default jwtMiddleware;