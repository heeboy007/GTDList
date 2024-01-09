import { expect } from 'chai';
import request from 'supertest';
import app from '../../app.js';

describe('POST /user/register', () => {
    it('registers proper email/password with status 200', (done) => {
        request(app)
            .post('/user/register')
            .send({
                email: 'test123@test.com',
                password: 'TestPASS1!'
            })
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                done();
            })
    });
});