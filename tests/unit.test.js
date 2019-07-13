const get = require('lodash/get');
const chai = require('chai');
const HotelController = require('./../controllers/HotelsController');
const HotelService = require('./../services/HotelService');
const json = require('./../public/data/data.json');

// Configure chai
chai.should();

let req = {
    query: {
        searchTerm: 'singapore',
        page: 0,
        limit: 20,
        order: 'asc'
    },
    sanitize: function(args) {
        return args;
    }
};

let res = {
    sendCalledWith: {},
    statusCode: '',
    status: function(statusCode) {
        this.statusCode = statusCode;
        return {
            send: (arg) => {
                this.sendCalledWith = arg;
            }
        }
    },
};

describe("Test Hotels Controller", () => {
    describe("Hotels list() function", () => {
        it("Get all results for hotel listing", () => {
            HotelController.list(req, res, () => {});

            chai.expect(res.statusCode).to.equal(200);
            chai.expect(res.sendCalledWith.message).to.equal('Standard response for successful HTTP requests.');
            chai.expect(res.sendCalledWith.data.listings).to.have.lengthOf(20);
            chai.expect(res.sendCalledWith.data.pageTitle).to.equal('Top 50 Singapore Vacation Rentals | Vrbo.com');
        });
    });
});

describe("Test Hotels Services", () => {
    describe("Hotels list() function", () => {
        it("should return the list which satisfies the queries", () => {
            HotelService.buildList(get(json, 'data.results'), req);

            chai.expect(res.sendCalledWith.data.listings).to.have.lengthOf(20);
            chai.expect(res.sendCalledWith.data.pageTitle).to.equal('Top 50 Singapore Vacation Rentals | Vrbo.com');
        });

        it("return empty list if the searchTerm doesn't match", () => {
            const dataFound = HotelService._find(get(json, 'data.results'), 'abc', 'why');

            chai.expect(dataFound).to.be.empty;
        });
    });
});