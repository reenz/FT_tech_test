process.env.NODE_ENV = 'test';

const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
chai.use(chaiHttp);

const server = require("../app.js")

describe("rating page",() => {

  it("should display confirmation after submitting rating", (done) => {
    chai.request(server)
    .post('/ratings')
    .send({score: "5"})
    .end((err, res) => {
      should.not.exist(err);
      res.text.should.match(/Thanks for rating/);
      done();
    });
  });

  it("should display validation error when empty score provided", (done) => {
    chai.request(server)
    .post("/ratings")
    .end((err, res) => {
      should.not.exist(err);
      res.text.should.include("Please provide a score");
      done();
    });
  });

});