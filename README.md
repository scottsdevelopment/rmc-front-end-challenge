# Hi there! 🐱‍🚀

We're excited for you to be taking our coding challenge! 

First things first, since this is a front-end coding challenge, we've created a little back-end microservice to assist you. This microservice was written as a [Deno](https://deno.land/) application.

To run the microservice, download and install Deno and run the following command in this directory from the command line:

```
deno run --allow-net server.ts
```

(Note that you have to be sure to specify `--allow-net` to grant the server network access. This is because Deno is [secure by default](https://deno.land/manual/getting_started/permissions). 👌)

The server will start on port 8080. If you need to change this (maybe you're running something else on port 8080), you can specify the port:

```
deno run --allow-net server.ts --port=8081
```

Now, onto the good stuff :rocket:

# The challenge

Using Angular, design a cool user interface that has the following features:
- Users can view a list of all enrollees in the system
- Users should be able to see all of the data related to an enrollee (their id, activation status, name, date of birth)
- Users should be able to tell which enrollees are activated and which are not at a glance
- Users should be able to change the name and activation status of an enrollee
- Users **cannot** modify the id or date of birth of an enrollee

👉 _Treat this code as if it were being deployed in production to be maintained by a team of developers._ 

The rest is up to you! There is no "correct" solution here. Reach into your bag of your tricks and do what you love to do!

You got this! 💪

**💰BONUS CHALLENGE**💰: A developer working on the backend mentioned that one of the enrollees doesn't appear to be working. Getting or modifying this enrollee was causing an internal server error. Sadly, they couldn't remember which enrollee had this issue. Can you fix this?

# Submitting your code
Please create a new repo under your personal github account for this code and send it our way when you're all done!

# The REST API

The API here is nice and simple.

### **GET /enrollees** - fetch all enrollees

Response:
```
[
    {
        "id": string,
        "active": boolean,
        "name": string,
        "dateOfBirth": string
    },
]
```

### **GET /enrollees/{id}** - fetch an enrollee by id

Response:
```
{
    "id": string,
    "active": boolean,
    "name": string,
    "dateOfBirth": string
},
```

### **PUT /enrollees/{id}** - modify an enrollee

Request body:
```
{
    "active": boolean,
    "name": string
    "dateOfBirth": string (optional)
},
```
Response (the modified enrollee is simply returned):
```
{
    "id": string,
    "active": boolean,
    "name": string,
    "dateOfBirth": string
},
```

**Note: We're just storing the list of enrollees in memory here, no database, so any changes you make will be reset when you restart the microservice.**

# RmcCodingChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

