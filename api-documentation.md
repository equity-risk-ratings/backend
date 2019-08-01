API DOCUMENTATIONS:

==================== LOGIN && REGISTER ENDPOINTS START HERE =======================

Register a user
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
    message: 'Logged In! Your ID is 5',
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
method url: /api/users/andiviudal

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

get logged in user's information, with their jokes included
method url: /api/users/userWithJokes

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
        "password": "$2a$04$FgiiacNirmVECdixfj8xau8rhnRAML6OfLPCPN1UCiq3xKO9m46UG",
        jokes: [
            {
                id: 1,
                author: 'Elan Riznis',
                joke: 'Kimberky ain't funny!',
                likes: 0,
                user_id: 5
            }
        ]
    },
]
Keep in mind... The jokes property in this endpoint is an ARRAY!!!!!! It returns the user, and the jokes that BELONG to that user!

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
WATCH OUT!!!! I made it so that you don't need to match the ID to edit an user, so BE CAREFUL when creating your AXIOS call!!!!!

========================================================================================================================

Edit a User Account using PATCH. You do NOT need to Match IDs
method url: /api/users/updatePUT

http method: [PATCH]

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
WATCH OUT!!!! I made it so that you don't need to match the ID to edit an user, so BE CAREFUL when creating your AXIOS call!!!!!

=================================================================================================================================

Delete an Account (AKA user). You do NOT need to Match IDs
method url: /api/users/delete

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
WATCH OUT!!!! I made it so that you don't need to match the ID to edit an user, so BE CAREFUL when creating your AXIOS call!!!!!

==================================== JOKES ENDPOINTS START HERE ===================================================

==================================================================================================================

Get All the JOKES
method url: /api/jokes

http method: [GET]

Headers
name	type	required	description
authorization	String	NOOOOO	NO Token required
Response
200 (ok)
Example response
[
    {
        id: 1,
        author: 'Elan Riznis',
        joke: 'Kimberly ain't funny',
        likes: 0,
        user_id: 5
    },
    {
        id: 2,
        author: 'Stacy Williams',
        joke: 'I also think Kimberly ain't funny!',
        likes: 0,
        user_id: 3
    }
]
===================================================================================================================

Get only the JOKES that belong to the currently logged in user! You do NOT have to match the IDs
method url: /api/jokes/userJokes

http method: [GET]

Headers
name	type	required	description
authorization	String	Yes	Web Token Required
Response
200 (ok)
Example response
[
    {
        id: 1,
        author: 'Elan Riznis',
        joke: 'Kimberly ain't funny',
        likes: 0,
        user_id: 5
    }
]
WATCH OUT!!!! I made it so that you don't need to match the ID to edit an user, so BE CAREFUL when creating your AXIOS call!!!!!

====================================================================================================================================================

Add a JOKE
method url: /api/jokes/add

http method: [POST]

Headers
name	type	required	description
authorization	String	Yes	Web Token Required
Body
name	type	required	description
author	String	yes	
joke	String	yes	
likes	integer	yes	
user_id	integer	yes	Connects to the User with the same ID
Example
{
    author: 'Elan Riznis',
    joke: 'Kimberly ain't funny!!!!!!!!!!',
    likes: 0,
    user_id: 1
}
Response
201 (created)
=======================================================================================================================

Edit a JOKE using PUT. This time, You DOOO need to Match IDs
method url: /api/jokes/editPUT/:id

http method: [PUT]

Headers
name	type	required	description
authorization	String	Yes	token to Authorize user
Body
name	type	required	description
author	String	yes	
joke	String	yes	
likes	integer	yes	
user_id	integer	yes	Connects to the User with the same ID
Example
{
    author: 'Elan Riznis',
    joke: 'Kimberly ain't funny!!!!!!!!!!',
    likes: 0,
    user_id: 1
}
Response
200 (ok)
Example Response
{
    "message": "Your Joke has been sucessfully updated!"
}
404 (Not Found)
Example Response
  {
  message: 'User with an ID of 4 does NOT exist'
  }
WATCH OUT!!!! This time you actually DO NEED to MATCH the IDs!!!!!!!!!!!

======================================================================================

Edit a JOKE using PATCH. This time, You DOOO need to Match IDs
method url: /api/jokes/editPATCH/:id

http method: [PATCH]

Headers
name	type	required	description
authorization	String	Yes	token to Authorize user
Body
name	type	required	description
author	String	yes	
joke	String	yes	
likes	integer	yes	
user_id	integer	yes	Connects to the User with the same ID
Example
{
    author: 'Elan Riznis',
    joke: 'Kimberly ain't funny!!!!!!!!!!',
    likes: 0,
    user_id: 1
}
Response
200 (ok)
Example Response
{
    "message": "Your Joke has been sucessfully updated!"
}
404 (Not Found)
Example Response
  {
  message: 'User with an ID of 4 does NOT exist'
  }
WATCH OUT!!!! This time you actually DO NEED to MATCH the IDs!!!!!!!!!!!

===========================================================================

Delete a JOKE. This time, you DOOOO Need to match the IDs
method url: /api/jokes/delete/:id

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
WATCH OUT!!!! This time you actually DO NEED to MATCH the IDs!!!!!!!!!!!

======================= LIKED ARRAY ENDPOINTS START HERE =========================

Get the LIKED array
method url: /api/liked

http method: [GET]

Headers
name	type	required	description
authorization	String	Yes	Web Token Required
Response
200 (ok)
Example response
[
    {
        id: 1,
        liked: 'false',
        disliked: 'false',
        user_id: 1,
        joke_id: 7

    }
]
========================================================================================

Creates a new object in the array
method url: /api/liked/add

http method: [POST]

Headers
name	type	required	description
authorization	String	Yes	Web Token Required
Body
name	type	required	description
liked	boolean	yes	
disliked	boolean	yes	
user_id	integer	yes	Connects to the User with the same ID
joke_id	integer	yes	Connects to a Joke with the same ID
Example
[
    {
        id: 1,
        liked: 'false',
        disliked: 'false',
        user_id: 1,
        joke_id: 7

    }
]
Response
201 (created)
=====================================================================================

Edits the Object using PUT. You DOOO NEED to match the IDs
method url: /api/liked/editPUT/:id

http method: [PUT]

Headers
name	type	required	description
authorization	String	Yes	token to Authorize user
Body
name	type	required	description
liked	boolean	yes	
disliked	boolean	yes	
user_id	integer	yes	Connects to the User with the same ID
joke_id	integer	yes	Connects to a Joke with the same ID
Example
[
    {
        id: 1,
        liked: 'false',
        disliked: 'false',
        user_id: 1,
        joke_id: 7

    }
]
Response
200 (ok)
Example Response
{
    "message": "Your Object has been sucessfully updated!"
}
404 (Not Found)
Example Response
  {
  message: 'Table with an ID of 4 does NOT exist'
  }
WATCH OUT!!!! This time you actually DO NEED to MATCH the IDs!!!!!!!!!!!

========================================================================

Edits the Object using PATCH. You DOOO NEED to match the IDs
method url: /api/liked/editPATCH/:id

http method: [PATCH]

Headers
name	type	required	description
authorization	String	Yes	token to Authorize user
Body
name	type	required	description
liked	boolean	yes	
disliked	boolean	yes	
user_id	integer	yes	Connects to the User with the same ID
joke_id	integer	yes	Connects to a Joke with the same ID
Example
[
    {
        id: 1,
        liked: 'false',
        disliked: 'false',
        user_id: 1,
        joke_id: 7

    }
]
Response
200 (ok)
Example Response
{
    "message": "Your Object has been sucessfully updated!"
}
404 (Not Found)
Example Response
  {
  message: 'Table with an ID of 4 does NOT exist'
  }
WATCH OUT!!!! This time you actually DO NEED to MATCH the IDs!!!!!!!!!!!

=================================================================================

Delete a Liked object. This time, you DOOOO Need to match the IDs
method url: /api/liked/delete/:id

http method: [DELETE]

Headers
name	type	required	description
authorization	String	Yes	token to Authorize user
Response
200 (ok)
Example Response
{
    "message": "Table has been Deleted has been Deleted"
}
404 (not found)
WATCH OUT!!!! This time you actually DO NEED to MATCH the IDs!!!!!!!!!!!