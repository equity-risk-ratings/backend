API DOCUMENTATIONS:

==================== LOGIN && REGISTER ENDPOINTS START HERE =======================

Register a user
url: https://equity-risks.herokuapp.com/
method url: /api/auth/register

http method: [POST]

Body
name	type	required	description
firstName	String	Yes	
lastName	String	Yes	
password	String	Yes	
email	String	Yes	Must be unique/ Must include @ symbol
Example
{
    firstName: 'Elan',
    lastName: 'Riznis',
    email: 'elan@gmail.com',
    password: 'pass'
}
Response
201 (created)
=========================================================================

Login a user
method url: /api/auth/login

http method: [POST]

Body
name	type	required	description
email	String	Yes	must be registered email
password	String	Yes	
Example
  {
    email: 'elan@gmail.com',
    password: 'pass',
  }
Response
200 (ok)
{
    message: 'Welcome Elan',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJlbWFpbCI6ImJwb2x0bEBnbWFpbC5jb20iLCJpYXQiOjE1NTU5NzAyMjMsImV4cCI6MTU1NjA1NjYyM30.lWi9hhalGt2ftr4Ju_jP12dCavZgXAMwABGYPzltwr8'
}
401 (Unauthorized)
Example response
{ 
message: "Please Provide Correct Credentials"
}
=========================== USERS ENDPOINTS START HERE ===========================

======================================================================

get ALL the users information
method url: /api/users/all

http method: [GET]

Headers
name	type	required	description
authorization	String	Yes	token to Authorize user
Response
200 (ok)
Example response
[
    {
        "id": 5,
        "email": "elan@gmail.com",
        "firstName": "Elan",
        "lastName": "Riznis",
        "password": "$2a$04$FgiiacNirmVECdixfj8xau8rhnRAML6OfLPCPN1UCiq3xKO9m46UG"
    },
    {
        "id": 6,
        "email": "kimberky@gmail.com",
        "firstName": "Kimberly",
        "lastName": "Swinton",
        "password": "$2a$04$FgiiacNirmVECdixfj8xau8rhnRAML6OfLPCPN1UCiq3xKO9m46UG"
    },
    {
        "id": 7,
        "email": "Stacy@gmail.com",
        "firstName": "Stacy",
        "lastName": "Williams",
        "password": "$2a$04$FgiiacNirmVECdixfj8xau8rhnRAML6OfLPCPN1UCiq3xKO9m46UG"
    },
    {
        "id": 8,
        "email": "scott@gmail.com",
        "firstName": "Scott",
        "lastName": "Prins",
        "password": "$2a$04$FgiiacNirmVECdixfj8xau8rhnRAML6OfLPCPN1UCiq3xKO9m46UG"
    }
]
=======================================================================================

get logged in user's information
method url: /api/users/:id

http method: [GET]

Headers
name	type	required	description
authorization	String	Yes	token to Authorize user
Response
200 (ok)
Example response
[
    {
        "id": 5,
        "email": "elan@gmail.com",
        "firstName": "Elan",
        "lastName": "Riznis",
        "password": "$2a$04$FgiiacNirmVECdixfj8xau8rhnRAML6OfLPCPN1UCiq3xKO9m46UG"
    },
]
===================================================================================



============================================================================================================

Edit a User Account using PUT. You do NOT need to Match IDs
method url: /api/users/updatePUT

http method: [PUT]

Headers
name	type	required	description
authorization	String	Yes	token to Authorize user
Body
name	type	required	description
name	String	yes	
lastName	String	yes	
password	String	yes	
email	String	yes	
Example
{
        "email": "elan@gmail.com",
        "firstName": "Elan",
        "lastName": "Riznis",
        "password": "$2a$04$FgiiacNirmVECdixfj8xau8rhnRAML6OfLPCPN1UCiq3xKO9m46UG",
}
Response
200 (ok)
Example Response
{
    "message": "Your Profile has been sucessfully updated!"
}
404 (Not Found)
Example Response
  {
  message: 'User with an ID of 4 does NOT exist'
  }
WATCH OUT!!!! I made it so that you need to match the ID to edit an user, so BE CAREFUL when creating your AXIOS call!!!!!

========================================================================================================================


http method: [DELETE]

Headers
name	type	required	description
authorization	String	Yes	token to Authorize user
Response
200 (ok)
Example Response
{
    "message": "User has been Deleted"
}
404 (not found)
WATCH OUT!!!! I made it so that you need to match the ID to edit an user, so BE CAREFUL when creating your AXIOS call!!!!!