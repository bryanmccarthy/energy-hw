const request = require('supertest');
const app = require('../index'); // Adjust the path as needed
const chai = require('chai');
const expect = chai.expect;

describe('Test Route', () => {
  it('should respond with "Hello World!"', (done) => {
    request(app)
      .get('/test')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Hello World!');
        done();
      });
  });
});
