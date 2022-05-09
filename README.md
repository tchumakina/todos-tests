# todos-tests
This project is done to show automation solution for TODOMVC.com using cypress test automation framework. Read more [here](https://www.cypress.io/)

## Test Execution
### Local run
- install node version 14+ (to check your version run `node -v`)
- install npm version 6+ (to check your version run `npm -v`)
- [clone this project](https://github.com/tchumakina/todos-tests.git) 
- switch to project folder in console
- build project with `npm install`
- run `npx cypress run`

### Run in CI
- request colloborator accces in order to have permissions to run workflow (email to tchumakina@gmail.com with your email)
- accept invitation to the project
- go to project Actions > All workflows > Cypress Tests and press "Run worflow" and run workflow against Main branch

It's also possible not to request access but only check [previously run pipeline](https://github.com/tchumakina/todos-tests/actions/workflows/main.yml) for Cypress Tests workflow

## Review Test Results
There are 4 passed and 4 failed (on purpose) scenarions to show how to analyze failed results using test execution report

### Local test artifacts
- go to cypress/results/json to review auto generated results
- it's possible to see videos under cypress/videos/todos-tests and screenshots for failed tests under cypress/screenshots/todos-tests

### CI test artifacts
- run a new Cypress Tests workflow or open [this link](https://tchumakina.github.io/todos-tests/) to get github pages results
- click on some test name to see detailed results including video of test execution

### Documented test cases
You can find documented test cases for this project at [wiki page](https://github.com/tchumakina/todos-tests/wiki)
