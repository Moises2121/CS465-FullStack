const mongoose = require('mongoose' );
const Trip = require('../models/travlr'); // registered schema for the db model
const Model = mongoose.model('trips');

// GET:  trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
    .find({}) // returns all records
    .exec () ;

    // following line helps show results of querey
    // on the console
    // console.log(q);

    if(!q)
    { // Database returned no data
        return res
            .status(404)
            .json(err);
    } else { // Return resulting trip list
        return res
            .status (200)
            .json(q);
    }
};


// GET:  trips/:tripCode - lists a single trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
    .find({'code' : req.params.tripCode }) // returns a single record
    .exec () ;

    // following line helps show results of querey
    // on the console
    // console.log(q);

    if(!q)
    { // Database returned no data
        return res
            .status(404)
            .json(err);
    } else { // Return resulting trip list
        return res
            .status (200)
            .json(q);
    }
};

// exported constant from tripsList file
module.exports = {
    tripsList,
    tripsFindByCode
};