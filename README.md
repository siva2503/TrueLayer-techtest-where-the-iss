# True Layer Test suite - where-the-iss API

## Prerequisite

1. npm/node installed (Recommended: 14 or above)

Implementation is done using Typescript

## Installation

NPM is used as package manager and names of necessary packages are stored in package.json file. Use below command to install,

    npm install

Ensure you are in the project home directory before trying the below command

## Execution

The implemenation can be executed using npm script added to the project

    npm run test

## Implementation details

[Jest](https://jestjs.io/) library is chosen as the test framework library. [Axios](https://axios-http.com/docs/intro) is used for REST Endpoint requests and [DOTENV](https://github.com/motdotla/dotenv#readme) for environmental variables store (BASE_URL,and ISS ID)
## Reporting

[jest-html-reporter](https://www.npmjs.com/package/jest-html-reporter) is used to display html report of the execution. A sample report is committed to the project for reference. Please find below a sample snapshot,

<img width="1618" alt="Screenshot 2021-09-02 at 09 53 01" src="https://user-images.githubusercontent.com/13304448/131814356-2251400f-6c79-42a5-a11f-e31eeb6d0b90.png">

## Scope of automation

As provided in the challenge instructions, only the below two endpoints were considered for automation,

- statellites/[id]/poisitions
- statellites/[id]/tles
