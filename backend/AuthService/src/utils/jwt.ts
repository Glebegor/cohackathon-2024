import { User } from "../domain/common/user";
var jwt = require('jsonwebtoken');

function generateAccessToken(user: User, secret: string | undefined) {
    return jwt.sign({ id: user.id, role: user.role_id }, secret, { expiresIn: '15m' });
}

function generateRefreshToken(user: User, secret: string | undefined) {
    return jwt.sign({ id: user.id, role: user.role_id }, secret);
}

function verifyToken(token: string, secret: string | undefined) {
    return jwt.verify(token, secret);
}


export { generateAccessToken, generateRefreshToken, verifyToken };