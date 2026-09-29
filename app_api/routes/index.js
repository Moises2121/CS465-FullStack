const express = require("express"); // Express application
const router = express.Router(); //router logic

// import controllers to be routed
const tripsController = require("../controllers/trips");

// defining route for trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList); // GET method

// GET method route for tripsFindByCode = requiring parameter
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode); // GET method 

module.exports = router;