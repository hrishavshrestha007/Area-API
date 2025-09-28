# Area Calculation API
A simple Express.js API for calculating geometric areas with comprehensive test coverage.

## Features
- Calculate area of a circle
- Calculate area of a rectangle
- Input validation
- Comprehensive test suite
- RESTful API design

## API Endpoints

# GET /test
Check if the API is running properly.

## Response:

json
{
  "message": "API is working"
}
POST /area/circle
Calculate the area of a circle.

# Request Body:

json
{
  "radius": 5
}
# Response:

json
{
  "area": 78.53981633974483
}
POST /area/rectangle
Calculate the area of a rectangle.

# Request Body:

json
{
  "length": 4,
  "width": 5
}
# Response:

json
{
  "area": 20
}
## Error Handling
The API returns appropriate error responses for invalid inputs:

400 Bad Request for non-numeric values

400 Bad Request for negative or zero values

## Installation
Clone the repository

Install dependencies:

bash
npm install
Running the Application
Start the server:

bash
npm start
The server will run on port 3000 by default (or the port specified in the PORT environment variable).

Testing
Run the test suite:

bash
npm test
The tests cover:

API check endpoint

Circle area calculation with valid radius

Rectangle area calculation with valid dimensions

## Dependencies
express: ^5.1.0 - Web framework

jest: ^30.1.3 - Testing framework

supertest: ^7.1.4 - HTTP assertion testing

## Project Structure
text
├── app.js          # Main application logic
├── app.test.js     # Test suite
├── server.js       # Server entry point
├── package.json    # Project configuration
└── README.md       # Project documentation
