import { User } from "../domain/common/user";
var jwt = require('jsonwebtoken');


function generateAccessToken(user: User, secret: string | undefined) {
    return jwt.sign({id: user.id, role: user.role_id, username: user.name, email: user.email}, secret, { expiresIn: '60m' })
}

function generateRefreshToken(user: User, secret: string | undefined) {
    return jwt.sign({id: user.id, role: user.role_id, username: user.name, email: user.email}, secret, { expiresIn: '3d' })
}

function verifyToken(token: string, secret: string | undefined) {
    return jwt.verify(token, secret);
}


export { generateAccessToken, generateRefreshToken, verifyToken };