# FoodManagement

This project will be my course-project for development 5 in my last years bachelor degree named, Multimedia and Creative Technologies.


## Getting Started


1)  Open VSCode
2)  Create a folder on your pc, open the terminal and type:

```
mkdir my-repo
```

3)  Go to that folder, so type:
```
cd my-repo
```

4)  Go to Github and copy the URL of the repository on Github
5)  Go to VSCode and click on crtl+P (windows) or cmd+p (mac)
6)  Type "Git: Clone" and paste the repository URL in here

## We will be using:

* git flow
* testing
* Docker and virtual machines
* CI/CD
* Development communities
* Open sourcing


## YOU NEED DOCKER DESKTOP!!


## Installation
 Change .env.template to .env and fill in the variables.

Because we are using docker-compose we need to build our images and container.
 
 ```bash
 docker-compose build
 ```




## Start project

To run the project we just need to run our docker-compose right?

```bash
docker-compose up
```
## Routes to use

### Food routes

Get all food items
```
localhost:80/
```

For making a post method. Keep in mind you can not add a product with an expiration data older than the current date.
```
localhost:80/food
```
Getting a barcode's data
```
localhost:80/food/:barcode
```

Updating a barcode's data. Keep in mind you can not add a product with an expiration data older than the current date.
```
localhost:80/food/:barcode
```

Deleting a barcode's data
```
localhost:80/food/:barcode
```

### User routes

Get all users
```
localhost:80/users
```

Adding a user
```
localhost:80/user
```

Getting a user on id
```
localhost:80/user/:id
```

Deleting a user on id
```
localhost:80/user/:id
```

## Open Source License

   Copyright 2021 Jari Miers

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

## Used packages

All packages can be found on the [npm page](https://www.npmjs.com)

* Node
* Express
* Jest
* Knex
* Nodemon
* pg
* body-parser
* supertest
  
