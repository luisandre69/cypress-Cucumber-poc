# cypress-Cucumber-poc

## Getting started - Pre-requirements

### Node

The project requires Node installed beforehand to be able to install the same.
<https://nodejs.org/en/download/>
Recommended to install the LTS version

### Terminal

All computers have a terminal that can be used but helps to have an IDE to run/visualize the project/code
example of an IDE with terminal:
<https://code.visualstudio.com/download>

### Docker

<https://www.docker.com>

## Run Docker

`$ docker build -t cypress .`

## Run locally

Run `npm install` in your terminal while you're in the project folder - this will download all dependencies locally

## Run Chorme

Using script `npm run cy:run:chrome` allows running tests using chrome

## Run Firefox

Using script `npm run cy:run:firefox` allows running tests using firefox

## Running all tests headfull

Using script `npm run cy:open` allows loading the cypress runner which allows visualizing/debug the tests while running.
