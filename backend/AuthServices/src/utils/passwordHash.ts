

function hashPassword(password: string, secret: string): string {
    const crypto = require('crypto');
    const hash = crypto.createHmac('sha256', secret)
        .update(password)
        .digest('hex');
    return hash;    
}