
const request = require('supertest')

const chai = require('chai')
const expect = chai.expect
const app = require('../server')

describe('Authentication Routes', () => {
    it('should redirect to Google OAuth on /auth/google', (done) => {
        request(app)
        .get('/auth/google')
        .expect(302) //Redirect
        .end((err, res) => {
            if(err) return done(err)
            expect(res.headers.location).to.include('accounts.google.com');
            done()
        })
    })

    it('should return 401 for unauthorized access to /api/user', (done) => {
        request(app)
            .get('/api/user')
            .expect(401, done)
    })

    it('should logout and destroy session', (done) => {
        request(app)
            .get('/auth/logout')
            .expect(200)
            .end((err, res) => {
                if(err) return done(err);
                done()
            })
    })
})