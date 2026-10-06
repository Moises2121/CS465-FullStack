const express = require("express"); // Express application
const router = express.Router(); //router logic

// import controllers to be routed
const tripsController = require("../controllers/trips");

// defining route for trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList) // GET method
    .post(tripsController.tripsAddTrip); // POST method

// GET method route for tripsFindByCode = requiring parameter
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode) // GET method
    .put(tripsController.tripsUpdateTrip); // PUT method 

module.exports = router;