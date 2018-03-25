process.env.NODE_ENV = 'test';

const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
chai.use(chaiHttp);

const server = require("../app.js")

describe("index page",() => {
  it("should respond with 200", (done) => {
    chai.request(server)
    .get('/')
    .end((err, res) => {
      should.not.exist(err);
      res.status.should.equal(200);
      done();
    });
  });

  it("should have header as Financial Times", (done) => {
    chai.request(server)
    .get('/')
    .end((err, res) => {
      res.text.should.include("Financial Times");
      done();
    });
  });

  it("should contain 'Please rate our website ", (done) => {
    chai.request(server)
    .get('/')
    .end((err, res) => {
      res.text.should.match(/Please rate our website/);
      done();
    });
  });
});