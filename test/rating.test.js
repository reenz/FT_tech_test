const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
chai.use(chaiHttp);

const server = require("../app.js")

describe("rating page",() => {
  it("should display confirmation after submitting rating", (done) => {
    chai.request(server)
    .post('/ratings')
    .end((err, res) =>{
      should.not.exist(err);
      res.text.should.match(/Thanks for rating/);
      done();
    });
  });
});