# True Layer Test suite - where-the-iss API

## Prerequisite

1. npm/node installed (Recommended: 14 or above)

Implementation is done using Typescript

## Implementation details

[Jest](https://jestjs.io/) library is chosen as the test framework library. [Axios](https://axios-http.com/docs/intro) is used for REST Endpoint requests and [DOTENV](https://github.com/motdotla/dotenv#readme) for environmental variables store (BASE_URL,and ISS ID)

## Installation

NPM is used as package manager and names of necessary packages are stored in package.json file. Use below command to install,

    npm install

Ensure you are in the project home directory before trying the below command

## Execution

The implemenation can be executed using npm script added to the project

    npm run test

## Reporting

[jest-html-reporter](https://www.npmjs.com/package/jest-html-reporter) is used to display html report of the execution. A sample report is committed to the project for reference. Please find below a sample snapshot,
