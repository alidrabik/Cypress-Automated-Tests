# Cypress Automated Tests - Mocked Bank Page

## Zero Bank
You can see working page at: [zero.webappsecurity.com](http://zero.webappsecurity.com/index.html)



![2022-02-21_14h45_29](http://papol.pl/cert/zerobank.png)


In this project, you will find the tests for all features in Zero Bank. Tests are written using the Page Object Method.

## Watch video

Download a video of one sample test case execution.
[Test execution](http://papol.pl/cert/video.mp4)

## Test cases

![Test cases screen](http://papol.pl/cert/testcases.png)
[Download all TC in .xlsx file](http://papol.pl/cert/ZeroBank.xlsx)

## Used technologies/ libraries
* Javascript
* Cypress
* Mocha
* Yarn


## Cypress folder structure

- cypress/
-- downloads        (All downloaded files)
-- fixtures        ( Pages used in this app)
-- integration        (Validation tests)
-- pageObjects    (Selectors, classes and methods)
-- plugins    (Plugin that will be automatically include before every single spec file runs)
-- screenshots        (Screenshot files created during test execution)
-- support        (Command.js and Index.js files)



## Getting started

To get the frontend running locally:
* Clone this repo
* Install Cypress (run only once)
 ```
 npm install cypress --save-dev
 ```
 * Install yarn ( to install all required dependencies)
 ```
npm install --global yarn
 ```

* To run tests on environment use:
 ```
yarn cy:open
```




## Repository overview
Repository contains automated tests made in Cypress and test cases prepared as excel file.
The tested application is a banking app with a basic client account view.

#### General functionality covered with tests:

* Logging into the bank account
* Checking the correctness of working elements on the home page
* Checking the correctness of account balances and redirects to their details
* Finding transactions
* Transferring funds between accounts
* Making payments to saved payees
* Downloading statements in PDF format
