Scheduling Automated Tests
==========================

.. contents:: In this section
   :local:
   :depth: 2

Overview
--------

RobusTest provides powerful scheduling capabilities that allow you to automate test execution at regular intervals. This is essential for continuous integration workflows, regression testing, and maintaining consistent quality checks.

**Benefits of Test Scheduling:**

* **Automated Regression Testing**: Run comprehensive test suites automatically after code changes
* **Continuous Quality Monitoring**: Regular execution ensures consistent app quality
* **Resource Optimization**: Schedule tests during off-peak hours to maximize device utilization
* **Consistent Testing**: Eliminate manual intervention and ensure tests run reliably

Setting Up Scheduled Tests
--------------------------

Follow these steps to configure automated test scheduling:

**Step 1: Create a Test Suite**

Create a comprehensive test suite containing all test cases you want to include in your scheduled runs:

* Navigate to your project dashboard
* Select **Test Suites** from the menu
* Click **Create New Test Suite**
* Add relevant test cases to your suite
* Save the test suite with a descriptive name

**Step 2: Execute Initial Test Run**

Run your test suite to establish the baseline configuration:

* Select your newly created test suite
* Choose the devices you want to test on
* Click **Run Test Suite**
* Monitor the execution to ensure everything works correctly

**Step 3: Obtain the Run ID**

Each test run generates a unique Run ID that you'll use for scheduling:

1. After your test run completes, click the **Reports** icon
2. In the Reports page, examine the URL structure
3. Copy the Run ID from the URL

**Example:**
If your Reports URL is::

    http://mobile.robustest.com/#/project/57d0f2e4aca33b21f5724cd7/report/58498732aca33b11ca655660

The Run ID is: ``58498732aca33b11ca655660``

**Step 4: Configure the Scheduling API**

The scheduling API follows this format::

    http://<RobusTest URL>/api/1/run/<Run ID>?updateFromTestSuite=true&build=latest

**Example Configuration:**

If your Run ID is ``58498732aca33b11ca655660`` and your RobusTest URL is ``http://192.168.1.1:8081``, your scheduling API becomes::

    http://192.168.1.1:8081/api/1/run/58498732aca33b11ca655660?updateFromTestSuite=true&build=latest

**API Parameters:**

* ``updateFromTestSuite=true``: Ensures the test suite reflects the latest test case configurations
* ``build=latest``: Automatically uses the most recent build uploaded to your project

**Step 5: Implement Cron Job Scheduling**

Add the scheduling API to your server's cron job configuration:

**Example Cron Job Configurations:**

.. code-block:: bash

    # Run tests every day at 2 AM
    0 2 * * * curl -X POST "http://192.168.1.1:8081/api/1/run/58498732aca33b11ca655660?updateFromTestSuite=true&build=latest"

    # Run tests every 6 hours
    0 */6 * * * curl -X POST "http://192.168.1.1:8081/api/1/run/58498732aca33b11ca655660?updateFromTestSuite=true&build=latest"

    # Run tests Monday through Friday at 9 AM
    0 9 * * 1-5 curl -X POST "http://192.168.1.1:8081/api/1/run/58498732aca33b11ca655660?updateFromTestSuite=true&build=latest"

Advanced Scheduling Features
----------------------------

**Dynamic Build Selection**

The ``build=latest`` parameter ensures your scheduled tests always run against the most recent build, making it perfect for CI/CD integration.

**Test Suite Synchronization**

The ``updateFromTestSuite=true`` parameter keeps your scheduled runs in sync with any changes made to your test suite configuration.

**Multiple Schedule Configuration**

You can create multiple scheduled runs with different:

* Test suites
* Device configurations  
* Execution frequencies
* Build targets

Best Practices for Test Scheduling
----------------------------------

**Timing Considerations:**

* **Off-Peak Hours**: Schedule resource-intensive tests during off-peak hours
* **Build Frequency**: Align test scheduling with your build and deployment cycles
* **Device Availability**: Consider device availability when scheduling tests

**Test Suite Organization:**

* **Smoke Tests**: Schedule lightweight smoke tests for frequent execution
* **Regression Tests**: Run comprehensive regression tests less frequently
* **Performance Tests**: Schedule performance tests during stable periods

**Monitoring and Alerts:**

* Set up monitoring for scheduled test execution
* Configure alerts for test failures
* Review test results regularly to maintain test suite health

.. tip::
   **CI/CD Integration**: Integrate scheduled tests with your CI/CD pipeline by triggering the scheduling API after successful builds.

.. seealso::
   
   **Related Topics:**
   
   * :doc:`automationreports` - Analyzing scheduled test results
   * :doc:`continuousintegration` - CI/CD integration strategies