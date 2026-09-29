const mongoose = require('mongoose'); 

// Define the trip schema
const tripSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true }, 
    length: { type: String, required: true },
    // ISO standard date format
    start: { type: Date, required: true },
    resort: { type: String, required: true },
    perPerson: { type: String, required: true }, 
    image: { type: String, required: true }, 
    description: { type: String, required: true } 
});
// collection name is 'trips'
const Trip = mongoose.model('trips', tripSchema); 
module.exports = Trip;