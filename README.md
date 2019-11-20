# API Documentation

**You can view the deployed (Heroku) backend here:**

**[Production Deployment](https://equityrisk.herokuapp.com/)** <br/>


[![Run in Postman](https://run.pstmn.io/button.svg)]()

## Getting started

To get this project up and running locally:

1. Clone this repo
2. Run `npm install` to install all of the required dependencies.

3. Create a `.env` file in the root of the project with the following environment variables:

```
JWT_SECRET='Code is easy, people are hard'
DB_CONNECTION_DEV=postgresql://postgres:1027@localhost/equity-risk-dev
```

4. `npm run dev` to start the local server
5. `npm test` to start server using testing environment

## Backend Frameworks

**Our rationale in choosing the frameworks we used:**

### Express

- We agreed to use Express as it is a familiar web server framework to what we knew that is extremely easy to use.
- It is modular and has great authentication, cookies, and sessions libraries.

### NodeJS

- Excellent third-party library support through NPM
- It has a large and robust open-source community and great support on Stack Overflow and other platforms for trouble-shooting.



## Endpoints

**[View API Reference Here]()**

# Data Model


#### Users

User types (Staff/Admin)

```js
{
  id: increments
  firstName: STRING,
  lastName: STRING,
  email: STRING,
  password: STRING,
  role: STRING,
}
```

#### Companies

```js
{
  id: increments,
  company: STRING,
  previous_closing_price: FLOAT,
  opening_price: FLOAT,
  high: FLOAT,
  low: FLOAT,
  close: FLOAT,
  change: FLOAT,
  trades: INTEGER,
  volume: INTEGER,
  value: INTEGER

}
```

## Actions

**[View DB Actions Here](http://knexjs.org/#Builder)**

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

Create a `.env` file that includes the following:

- **DB_CONNECTION_DEV** - URL for Postgres connection string in a development/production environment.

* **NODE_ENV** - for setting application environment. Set to `development` by default. Should be set to `production` when in a staging or production environment.

- **JWT_SECRET** - for signing JSON web tokens. You can generate this by using a python shell and running:


## Testing

Tests are setup as independently as possible (they do not rely on other tests to pass)

Before each test, all tables in the database are deleted and new seed documents are entered.
After all tests are done, tables are deleted and then dropped.

To run the tests when developing, run:

```
npm run dev-test
```

It will run tests in "watch" mode and stops running tests on first failed test (`-b`).

To run tests as in CI and with coverage, run:

```
npm run test
```

## Contributing

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](https://github.com/tieme-ndo/frontend/blob/master/README.md) for details on the fronend of our project.
