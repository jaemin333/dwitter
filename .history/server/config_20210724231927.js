import dotenv from 'dotenv';
dotenv.config();

function required(key,defaultValue= undefined) {
    const value = process.env[key] || defaultValue;
    if(value == null ){
        throw new Error(`Key ${ley} is undefined`);
    }
    return value;
}

export const config = {
    jwt: {
        secretKey: required('JWT_SECRET'),
        expiresInsec:required('JWT_EXPIRES_SEC',86400),
    },
    bcrypt: {
        saltRounds: required('BCRYPT_SALT_ROUNDS',12),
    },
    host: {
        port:required('HOST_PORT',8080),
    }
};