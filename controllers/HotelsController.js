'use strict';

const get = require('lodash/get');
const status = require('http-status');

const HotelService = require('../services/HotelService');
const json = require('./../public/data/data.json');

class HotelsController {
    constructor() {
        this.list = this.list.bind(this);
    }

    list(req, res, next) {
        try {
            const builtListings = HotelService.buildList(get(json, 'data.results'), req);
            res.status(status.OK).send({ message: status['200_MESSAGE'], data: builtListings });
        } catch(err) {
            res.status(status.INTERNAL_SERVER_ERROR).send({ message: status['500_MESSAGE'], data: err.message });
        }

        next();
    }
}

module.exports = new HotelsController();