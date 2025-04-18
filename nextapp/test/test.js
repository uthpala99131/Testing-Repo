var request = require('supertest');
var app = require('../indexc.js');
describe('GET /will', function() {
    it('respond with hello world', function(done) {
        request(app).get('/will').expect('{ "response": "Hello World" }', done);
    });
});