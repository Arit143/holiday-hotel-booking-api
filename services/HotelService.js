'use strict';

const filter = require('lodash/filter');
const isUndefined = require('lodash/isUndefined');
const get = require('lodash/get');
const isEmpty = require('lodash/isEmpty');
const lowerCase = require('lodash/lowerCase');

const { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_LIMIT } = require('../constants/hotels.constants');

class HotelServices {
    constructor() {
        this._find = this._find.bind(this);
        this._paginate = this._paginate.bind(this);
        this._sort = this._sortPrice.bind(this);
        this.buildList = this.buildList.bind(this);
    }

    _find(dataToSearch, searchTerm, getSearchTermFromResults) {
        if(searchTerm !== getSearchTermFromResults) {
            return {};
        }

        const { listings, pageTitle } = dataToSearch;
        return {
            listings,
            pageTitle
        };
    }

    _paginate({ listings, pageTitle }, page, limit) {
        const getMinIndex = page * limit;
        const getMaxIndex = (page + 1) * limit;

        return {
            listings: filter(listings, (value, index) => index >= getMinIndex && index < getMaxIndex),
            pageTitle
        }
    }

    _sortPrice({ listings, pageTitle }, order) {
        return {
            listings: order === 'desc' ? 
                listings.sort((a, b) => get(b, 'averagePrice.value', 0) - get(a, 'averagePrice.value', 0)) :
                listings.sort((a, b) => get(a, 'averagePrice.value', 0) - get(b, 'averagePrice.value', 0)),   
            pageTitle
        }
    }

    buildList(dataToSearch, req) {
        try {
            const searchTerm = lowerCase(req.sanitize(req.query.searchTerm));
            const getSearchTermFromResults = lowerCase(get(dataToSearch, 'searchTerm.name'));
    
            const dataFound = this._find(dataToSearch, searchTerm, getSearchTermFromResults);
            if (isEmpty(dataFound)) {
                return {};
            } 
    
            const searchPage = isUndefined(req.sanitize(req.query.page)) ? DEFAULT_PAGE_INDEX : parseInt(req.sanitize(req.query.page));
            const searchLimit = isUndefined(req.sanitize(req.query.limit)) ? DEFAULT_PAGE_LIMIT : parseInt(req.sanitize(req.query.limit));
    
            const paginatedResults = this._paginate(dataFound, searchPage, searchLimit);
    
            const order = req.sanitize(req.query.order);
    
            return order ? this._sortPrice(paginatedResults, order) : paginatedResults;
        } catch(err) {
            throw new Error(err);
        }

    }
};


module.exports = new HotelServices();