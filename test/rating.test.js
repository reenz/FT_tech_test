process.env.NODE_ENV = 'test';

const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
chai.use(chaiHttp);

const knex = require('../db/server/knex.js');
const server = require("../app.js")

describe("rating page", () => {

  beforeEach(function (done) {
    knex.migrate.rollback()
      .then(function () {
        knex.migrate.latest()
          .then(function () {
            return knex.seed.run()
              .then(function () {
                done();
              });
          });
      });
  });

  afterEach(function (done) {
    knex.migrate.rollback()
      .then(function () {
        done();
      });
  });

  it("should display confirmation after submitting rating", (done) => {
    chai.request(server)
      .post('/ratings')
      .send({ score: "4" })
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
        res.text.should.include("Please provide a valid score from 1 to 4");
        done();
      });
  });

  it("should display validation error when invalid score provided", (done) => {
    chai.request(server)
      .post("/ratings")
      .send({score: "9"})
      .end((err, res) => {
        should.not.exist(err);
        res.text.should.include("Please provide a valid score from 1 to 4");
        done();
      });
  });

  it("should get back all the ratings", (done) => {
    chai.request(server)
    .get("/ratings")
    .end((err, res) => {
      // expected output based on our seed data
      const expected = {ratings: [1, 2], counts: [2, 1]}
      res.body.should.equal(expected);
      done();
    });
  });

});