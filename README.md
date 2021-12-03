# FoodManagement

This project will be my course-project for development 5 in my last years bachelor degree named, Multimedia and Creative Technologies.


## Getting Started

### GETTING STARTED?


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
7)  This project is still under development so open the terminal
   ```
   git checkout developTest
   ```

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

Get all
```
localhost:80
```
For making a post method
```
localhost:80/items
```
Getting a upc code
```
localhost:80/items/:upc
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
  
