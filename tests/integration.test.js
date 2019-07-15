const map = require('lodash/map');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Get Hotels for a search, sort and pagination", () => {
    describe("GET /hotels validation", () => {
        it("searchTerm query validation", (done) => {
            chai.request(app)
                .get('/hotels?seachTerm=singapore')
                .end((err, res) => {
                    chai.expect(res.body.data).to.equal('searchTerm is required or it is misspelled')
                done();
            });
         });
        it("page query validation", (done) => {
            chai.request(app)
                .get('/hotels?searchTerm=singapore&page=abc')
                .end((err, res) => {
                    chai.expect(res.body.data).to.equal('values for query `page` is not correct. should be a number')
                done();
            });
        });
        it("bedrooms query validation", (done) => {
            chai.request(app)
                .get('/hotels?searchTerm=singapore&bedrooms=abc')
                .end((err, res) => {
                    chai.expect(res.body.data).to.equal('values for query `bedrooms` is not correct. should be a number')
                done();
            });
        });
        it("limit query validation", (done) => {
            chai.request(app)
                .get('/hotels?searchTerm=singapore&page=0&limit=abc')
                .end((err, res) => {
                    chai.expect(res.body.data).to.equal('values for query `limit` is not correct. should be a number')
                done();
            });
        });
        it("order query validation", (done) => {
            chai.request(app)
                .get('/hotels?searchTerm=singapore&page=0&limit=20&order=some_name')
                .end((err, res) => {
                    chai.expect(res.body.data).to.equal('Invalid query `order` value. should be `asc` or `desc`')
                done();
            });
        });
    });
    describe("GET /hotels", () => {
        it("searchTerm singapore should return some listing", (done) => {
            chai.request(app)
                .get('/hotels?searchTerm=singapore')
                .end((err, res) => {
                    chai.expect(res.body.data.listings).to.have.lengthOf(20)
                done();
            });
         });
         it("searchTerm other than singapore should return empty listing", (done) => {
            chai.request(app)
                .get('/hotels?searchTerm=India')
                .end((err, res) => {
                    chai.expect(res.body.data).to.be.empty
                done();
            });
         });
         it("searchTerm singapore with last page and limit 20 should return last 10 results ", (done) => {
            chai.request(app)
                .get('/hotels?searchTerm=singapore&page=2&limit=20')
                .end((err, res) => {
                    chai.expect(res.body.data.listings).to.have.lengthOf(10)
                done();
            });
         });
         it("searchTerm singapore with last page and limit 20 and order desc", (done) => {
            chai.request(app)
                .get('/hotels?searchTerm=singapore&page=2&limit=20&order=desc')
                .end((err, res) => {
                    const values = map(res.body.data.listings, 'averagePrice.value');
                    let isDescending = false;
                    const updatedArray = values.slice(1);
                    if (updatedArray.every((a, i) => parseInt(values[i]) > parseInt(a))) {
                        isDescending = true;
                    }
                    chai.expect(isDescending).be.true
                done();
            });
         });
    });
});