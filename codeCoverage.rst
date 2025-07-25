Enabling Code Coverage in Job Run API
=====================================

To configure RobusTest to handle the code coverage feature when running your Espresso tests, set the codeCoverage flag to true.

When you set the codeCoverage flag to true, RobusTest ensures that with each espresso test invocation the following key value pairs are sent with the test execution command.

* coverageFile - /sdcard/coverage.ec

* emma - true

i.e. the following string is appended to the test execution command

**-e coverageFile /sdcard/coverage.ec -e emma true**

At the end of each test case attempt, the corresponding coverage file is made available at the test artifact API. In this case, the test coverage will be available at

  .. code-block:: Java

   [Device Lab URL]/v3/log/testResultID/codeCoverage

Of course, you will need to use authenticate yourself using your acesss key.

