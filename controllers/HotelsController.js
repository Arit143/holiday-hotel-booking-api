const get = require('lodash/get');
const lowerCase = require('lodash/lowerCase');
const isUndefined = require('lodash/isUndefined');
const filter = require('lodash/filter');
const status = require('http-status');
const json = require('./../public/data/data.json');

class HotelsController {
    constructor() {
        this.list = this.list.bind(this);
    }

    list(req, res, next) {
        // Check for empty
        const searchTerm = lowerCase(req.sanitize(req.query.searchTerm));
        const page = req.sanitize(req.query.page);
        const limit = req.sanitize(req.query.limit);
        const sort = req.sanitize(req.query.sort);
        const order = req.sanitize(req.query.order);
        const getSearchTermFromResults = lowerCase(get(json, 'data.results.searchTerm.name'));

        try {
            if(searchTerm === getSearchTermFromResults) {
                const { listings, pageTitle } = get(json, 'data.results');
                const searchPage = isUndefined(page) ? 0 : parseInt(page);
                const searchLimit = isUndefined(limit) ? 20 : parseInt(limit);
                const searchSort = !isUndefined(sort);
                const searchOrder = order;
    
                const getMinIndex = searchPage * searchLimit;
                const getMaxIndex = (searchPage + 1) * searchLimit;
    
                let getListings = filter(listings, (v, i) => i >= getMinIndex && i < getMaxIndex);

                if(searchSort && searchOrder === 'desc') {
                    getListings = getListings.sort((a, b) => get(b, 'averagePrice.value', 0) - get(a, 'averagePrice.value', 0));
                } else if (searchSort && searchOrder === 'asc') {
                    getListings = getListings.sort((a, b) => get(a, 'averagePrice.value', 0) - get(b, 'averagePrice.value', 0));
                }
    
                res.status(status.OK).send({ message: status['200_MESSAGE'], data: {
                    listings: getListings, 
                    pageTitle 
                } });
            } else {
                res.status(status.OK).send({ message: status['200_MESSAGE'], data: {} });
            }
        } catch(err) {
            res.status(status.INTERNAL_SERVER_ERROR).send({ message: status['500_MESSAGE'], data: err });
        }
    }
}

module.exports = new HotelsController();