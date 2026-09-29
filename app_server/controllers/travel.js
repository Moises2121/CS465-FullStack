const tripsEndpoint = 'http://localhost:3000/api/trips'; 
const options = { 
    method: 'GET', 
    headers: { 
        'Accept': 'application/json',
    },
};

// these lines were used to read data from the seeed file
//var fs = require('fs'); 
//var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8')); 

/* Get Travel View 
*const travel = (req, res) => {
*   res.render('travel', { title: "Travlr Getaways", trips});
    };
*/

/* GET travel view */
const travel = async function(req, res, next) {
    // console.log('TRAVEL CONTROLLER BEGIN');
    await fetch(tripsEndpoint, options)
    .then(res => res.json())
    .then(json => {
    // error handling
        let message = null;
        if (!(json instanceof Array)) {
            message = "API lookup error";
            json = []; // null set
        } else {
            if (!json. length) {
                message = "No trips exist in our database!";
            }
        }
        res.render('travel', {title: 'Travlr Getaways', trips: json, message});
    })
    .catch(err => res.status(500).send(err.message)); //tag any errors in communication with API
    // console.log('TRAVEL CONTROLLER AFTER RENDER');
};

module.exports = {
    travel,
};








15
16
17

18
19
20
21
22
23
24
25



