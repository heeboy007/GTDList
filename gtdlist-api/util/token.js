import crypto from 'crypto';

//token form EMAIL
function tokenGen() {
    return crypto.randomBytes(16).toString('hex');
}

export {
    tokenGen,
};