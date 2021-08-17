import dotenv from 'dotenv';
dotenv.config();
export const config = {
    jwt: {
        secretKey: process.env.JWT_SECRET,
        expiresInsec:process.env.JWT_EXPIRES_SEC,
    },
    bcrypt: {
        saltRounds: process.env.BCRYPT_SALT_ROUNDS,
    },

}