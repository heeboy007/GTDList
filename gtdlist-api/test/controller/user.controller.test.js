const expect = require('chai').expect;
const request = require('supertest');
import app from '../../app';

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