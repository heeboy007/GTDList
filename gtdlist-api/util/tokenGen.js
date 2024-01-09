import crypto from 'crypto';

function tokenGen() {
    return crypto.randomBytes(16).toString('hex');
}

export default tokenGen;