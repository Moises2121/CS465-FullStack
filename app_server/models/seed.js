// Bring the DB connection and Trip schema
const Mongoose = require('./db');
const Trip = require('./travlr');

// read seed data from json file
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));

//delete any existing records , then insert new seed data
const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
};

// close the MongoDB connection and exit
seedDB().then(async () => {
    // ensure db is seeded before closing connection
    await Mongoose.connection.close();
    process.exit(0);
});