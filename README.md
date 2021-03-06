[![Build Status](https://travis-ci.org/reenz/FT_tech_test.svg?branch=master)](https://travis-ci.org/reenz/FT_tech_test)


## FT Cloud Engineer Technical Exercise

This is a tech test for Financial Times. I will build a website that asks for and stores a simple rating score for using ft.com. This website will be will hosted on Heroku .

#### User Stories
```
As a user
So that I can share my experience of using ft.com
I'd like to rate the website

As a user
So that I can see the popularity of ft.com
I'd like to see all the ratings
```

### Architecture diagram

![Architecture](public/images/ft-app.png)


### Required features

* Build a website 
* Store the Rating 
* Host on cloud 
* Diagram of the site architecture

### Optional features

* Templated infrastructure as code
* Automated testing 
* Origami Components/FT look and feel 
* The ability to view ratings/results 

### Rating Page
![Home](public/images/home.png)

### All Ratings
![chart](public/images/chart.png)


### Running the application locally

Local development of this FT rating web application assumes the following are already installed:

1. PostgreSQL database
2. npm and node

After you have cloned the repository, please run the below steps:

1. `createdb ft_dev` 
2. `createdb ft_test`
3. `export PG_USER=$(whoami)`
4. `export PG_PASSWORD=your_password`
5. `export NODE_ENV=development`
6. `knex migrate:latest --env development`
7. `knex migrate:latest --env test`
8. `npm test` to run tests
9. `node_modules/nodemon/bin/nodemon.js --exec npm start` to run the server

### Running the application on Heroku

Please run the following commands in bash:

1. `heroku create your-app`
2. `heroku addons:create heroku-postgresql:hobby-dev`
3. `git push heroku master`
4. `heroku run knex migrate:latest --env production`

### Technologies Used

1. Node JS
2. Express Web App Framework
3. Knex Postgres Query Builder
4. Mocha, Chai & Chai-HTTP for testing
5. Nodemon for auto-reload
6. Istanbul Code Coverage via nyc


### Future Enhancements

If I had more time, I would have looked into implementing the below:

1. Currently my devlopment setup assumes the presence of user `reena` and database `ft_dev`. It would be good to have these configurable (via environment variables?) so that anyone can clone and run the tests/play around with the setup.
2. End to end Browser UI testing (across browser versions/variantions) using [Nightwatchjs](http://nightwatchjs.org/)
3. Beautifying the application UI