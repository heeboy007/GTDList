import { expect } from 'chai';
import request from 'supertest';
import app from '../../app.js';

describe('POST /user/register', () => {
    it('registers proper email/password with status 201', (done) => {
        request(app)
            .post('/user/register')
            .send({
                email: 'test123@test.com',
                password: 'TestPASS1!'
            })
            .end((err, res) => {
                expect(res.statusCode).to.equal(201);
                done();
            });
    });
});

/*describe('DELETE /user', () => {
    it('deletes user with proper email with status 200', (done) => {
        request(app)
            .delete('/user')
            .send({
                email: 'test123@test.com',
                password: 'TestPASS1!'
            })
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                done();
            });
    });
});*/