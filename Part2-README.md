## 1. Gaps

### General gaps

- Engineers writing tests is fantastic, but a review/audit check by a team member who has expertise in Quality assurance would be of great help in ensuring quality of the written tests.
  - Approach that I have taken in the past and thats worked out really well is to setup a test framework with only Quality assurance in mind but then rolling it out to all engineers to add tests to the framework, as there will be guidelines to follow.

### Team 1 Gaps

- Unit test coverage percentage is really low. Ideal would be to have a threshold of 85 and above.
- UI tests should be executed in other browsers/platforms - as the effort to build a test suite is already done, it should be really easy to execute those exact tests in other platforms (Safari, mobile web app)
- Nighly run of E2E tests is definitely good. But I dont see a necessity to wait until night, the test suite should be triggered on every new feature addition (i.e pull request creation) to ensure no existing functionality is impacted because of a new change.
- I see that there is a potential to test REST API services standalone instead of loading it all to E2E test suite. This would reduce efforts and would increase faster development/deployment cycle.

### Team 2 Gaps

- Being a team that follow sprint approach, it should have all work recorded in Jira, not recording tasks would lead to incorrect estimate/actual project delivery timelines.
- Assuming there is no automation test suite for integration test suite. This could lead to delivery bottlenecks.
- Contract testing would be of great help for this project as it has a 30 API services
- Having backlog grooming session even though its a Sprint team would surely add value, helps the team to understand/foresee how future sprints would look like and figure out if there are are preparatory work to be done.


## 2. Support that I (as an QA engineer) would provide

- **Ensuring Quality of the written tests** - I would start from the point of looking at the existing automated test suite, try adding tests to it in order to understand the implementation.
  - list out improvements/issues if any and discuss about it with the code owners (engineers).
  - draft a plan to improve the listed issues if required
  - have a defined peer-review process in place to avoid such issues in the future.
  - Ensure if the existing tests are still valid, or left un-maintained
  - Ensure if the tests can be added to a different phase (eg: API integration phase or unit test phase) instead of where it is currently (eg: browser test suite), in order to reduce efforts/execution time.
  - If efforts required to implement the improvements is really high, assess the possibility of migrating to a new test framework thats agnostic in all possible ways.


### Team 1 - Kanbam/ REST API & Hybrid mobile app

- **Improving Unit Test coverage**
  
  - Implement an automated setup that validates coverage metrics, and gradually increase the threshold from where it is currently(50%) to what is desired (85%).
  - Add a github PR check that blocks merge if the unit test coverage threshold is lesser than expected.
  - Support engineers if there are any complex unit test implementation required.
  

      - To collobrate with: Frontend & backend engineers, Engineering lead

- **Cross browser testing**
  - Containerize the automation test suite and make required implementations for it to be executed against browsers other than chrome.
  - Since the expectation is for the application to work in Safari, explore the possibility of using a crossbrowsertest service provider like [BrowserStack]([browser](https://www.browserstack.com/))

      - To collobrate with: Engineering lead, Product Manager, Designer(in case of any browser compatability issues)

- **Add E2E test suite to development Pipeline**
  - Add github PR checks that triggers automation test suite and update results to the github PR.
  - Block PR merge if there are any test failure.
      - To collobrate with: Engineering lead, FE & BE Engineers

- **API Integration test suite**
  - Confirm on my assumption of non-existence of API test suite.
  - Draft a plan to list of test cases that suitable for API test suite.
  - Create an API automation framework and add it to the existing pipelines (Nightly run etc.,).
      -  To collobrate with: Engineering lead, Product Manager

### Team 2 - Scrum/ REST API

- **Recording tasks to Jira**
  - Discuss about implementing this as a process with entire team
  - Add automated implementation to require ticket ID for every code pull request.
      -  To collobrate with: Entire team


- **Contract testing**
  - Implement a new framework using [pact.io](https://pact.io/) or similar tool to perform contract testing
        -  To collobrate with: Engineers, engineering lead

- **Backlog grooming**
  - Discuss about this in Sprint retrospective and decide based on the outcome.
    -  To collobrate with: Entire team