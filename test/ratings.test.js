const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
chai.use(chaiHttp);

const server = require("../app.js")

describe("index page",() => {
  it("should respond with 200", (done) => {
    chai.request(server)
    .get('/')
    .end((err, rsp) => {
      should.not.exist(err);
      rsp.status.should.equal(200);
      done();
    });
  });
  it("should have header as Financial Times", (done) => {
    chai.request(server)
    .get('/')
    .end((err, rsp) => {
      should.not.exist(err);
      console.log(rsp);
      rsp.text.should.include("Financial Times");
      done();
    });
  });
});