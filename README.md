# CS465-FullStack
CS465 Full Stack Development with MEAN

## Architecture
Express HTML vs SPA
The initial project has static pages served through Express public directory whcih required mapping HTML views, images and stylesheets so Express could use Bootstrap.

The next phase was moving to MVC by pulling from main.js and travel.js as separate controller and wirign them through their own route back into app.js. The Express request flow became: route -> controler -> view. The initial static page was now a working .hbs view with directives and bar handlers.

The final SPA phase was using Angular serving index.html and rendering everything through components rather than separate pages, while data handled asynchronously with observables. This architecture allows user to browse trips card while the admin can edit them.The public SPA and authenticated SPA both go through the same API with JWT validation at server session which enforces security.

Since trip data is document based, NoSQL was implemented. MongoDBs limited to `ACID` transactions and could become a concern once booking and payment methods are needed, and Node.js single thread nature means there's one heavy request that can make the application get stuck.

## Functionality
JSON is the data format that ties everything together such as travel.js, trips.json which parses array and renders the content instead of hardcoded list items. The JSON flows from MongoDB via API tripList and tripsFindByCode to Angular TripDataService via HTTP client to components.

Module 1 - Fixed asset path and stylesheet rename for Express static serving<br>
Module 2-3 - Pull all the logic into controllers/routes and partials<br>
Module 4 - NoSQL databases models and schemas<br>
Module 5 - Two controller API split keep each other function to one job<br>
Module 6- Pulling trip cards into their own component, listing component only loops and deciding how the layout changes<br>

## Testing
API layer was tested on port 3000 via Postman and browser for GET /api /trips, GET /api/trips/:tripcode using DAWR210315, POST tripsAddTrip, PUT for admin edits and verifying the `200` responses.

Database layer was tested under MongoDB Compass to verify seed and ISO dates

Front end layer was verified by looking at the rendering after PUT from admin side and Angular listing

## Reflection
This course taught me how to migrate from a static HTML throug public to a full MEAN stack with MVC, API and SPA. I learned to uses the Express routing/controller/viewer flows, handlebards templating with partials, Mongoose schema and connection handling, REST API desing with single responsibility controllers and Angular architecture with services and observables.

Debugging and troubleshooting such as the 404 css path and white screen helped me remember that code must be developed with a security and reusability mindset - using tools such as github to compare my branches can also help future developers see the roadblocks and mitigation steps. 






