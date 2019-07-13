'use strict';

const get = require('lodash/get');
const status = require('http-status');
const { validationResult } = require('express-validator');

const HotelService = require('../services/HotelService');
const json = require('./../public/data/data.json');

class HotelsController {
    constructor() {
        this.list = this.list.bind(this);
    }

    list(req, res, next) {
        try {
            const errorValidation = validationResult(req);
            const hasErrors = !errorValidation.isEmpty();
            
            if(hasErrors){
                return res.status(status.BAD_REQUEST).send({ message: status['400_MESSAGE'], data: errorValidation.array()[0].msg });
            }

            const builtListings = HotelService.buildList(get(json, 'data.results'), req);
            return res.status(status.OK).send({ message: status['200_MESSAGE'], data: builtListings });
        } catch(err) {
            return res.status(status.INTERNAL_SERVER_ERROR).send({ message: status['500_MESSAGE'], data: err.message });
        }

        next();
    }
}

module.exports = new HotelsController();