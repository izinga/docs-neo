.. _hub-job-payload:

Job Payload API Reference
==========================

.. contents:: In this section
   :local:
   :depth: 2

Overview
--------

The Job Payload API allows you to programmatically create and execute automated test jobs on RobusTest Hub. This API is essential for CI/CD integration and enables you to trigger test execution remotely using structured JSON payloads.

.. raw:: html

   <div class="config-generator-placeholder" data-type="api-payload"></div>

**Key Benefits:**

* **Automated Test Execution**: Trigger tests programmatically from your CI/CD pipeline
* **Flexible Configuration**: Comprehensive job configuration options
* **Scalable Testing**: Execute tests across multiple devices simultaneously
* **Framework Support**: Compatible with Espresso, XCUITest, and Appium frameworks
* **Priority Management**: Control job execution priority and retry behavior

**API Endpoint:**

.. code-block:: text

   POST /v3/job/new?accesskey=<ACCESS_KEY>

For complete API documentation, visit: `RobusTest API Documentation <http://api.robustest.com/#tag/job/paths/~1v3~1job~1new/post>`_

Core Job Attributes
-------------------

The following table describes the essential attributes for job creation:

.. list-table:: Job Payload Attributes
   :header-rows: 1
   :widths: 20 25 20 20 10 5

   * - Attribute Name
     - Description
     - Usage
     - Example
     - Type
     - Mandatory

   * - **project**
     - Project ID of the project in which you are executing the job. Alphanumerical string obtained from Project Home page URL.
     - ``"project": "<Project ID>"``
     - ``"project": "63bc5697baec733123456820"``
     - String
     - Yes

   * - **type**
     - Type of job being executed (testing framework being used).
     - ``"type": "<Type of the Job>"``
     - ``"type": "Espresso"``
     - String (Espresso, XCUITest, appium)
     - Yes

   * - **identifier**
     - Custom alphanumeric string to identify a job. Can be viewed in deployment → jobs section and project jobs section.
     - ``"identifier": "<Job Identifier>"``
     - ``"identifier": "Smoke testing- payment module"``
     - String
     - No

   * - **desc**
     - Brief description of the job. Can include alphanumeric characters and special characters.
     - ``"desc": "<Description of the Job>"``
     - ``"desc": "Testing Security Token for Triggers"``
     - String
     - No

   * - **priority**
     - Priority of job execution. Higher value = higher priority, lower value = lower priority.
     - ``"priority": <Job Priority>``
     - ``"priority": 10``
     - Number
     - No

   * - **runMode**
     - Specifies the order/method in which tests should be executed.
     - ``"runMode": "<Enter runMode>"``
     - ``"runMode": "distributed"``
     - String (parallel, distributed)
     - Yes

   * - **jobCategories**
     - Helps classify jobs with tags/categories for job analysis.
     - ``"jobCategories": ["category1","category2"]``
     - ``"jobCategories": ["Functional","smoke","iOS"]``
     - Array of Strings
     - No

   * - **maxJobAttempts**
     - Number of times a job can retry execution if sent back to queue.
     - ``"maxJobAttempts": <Enter job attempts>``
     - ``"maxJobAttempts": 2``
     - Number
     - No

   * - **runSetting**
     - Run Setting ID that can be updated in Project → Run Settings page. Includes notifications, timeouts, integrations, etc.
     - ``"runSetting": "<run setting>"``
     - ``"runSetting": "64745b50baec73ad0214dc53"``
     - String
     - No

   * - **jobScope**
     - Job visibility setting for team collaboration.
     - ``"jobScope": "<scope>"``
     - ``"jobScope": "public"``
     - String
     - No

   * - **attributes**
     - Custom key-value attributes for job metadata.
     - ``"attributes": {"key": "value"}``
     - ``"attributes": {"COUNTRY":"in", "ENV":"prod"}``
     - Object
     - No

Build Configuration
-------------------

The build section specifies the application and test files to be used:

.. list-table:: Build Attributes
   :header-rows: 1
   :widths: 20 30 25 20 5

   * - Attribute Name
     - Description
     - Usage
     - Example
     - Mandatory

   * - **build.aut**
     - The AUT (Application Under Test) is the test app that needs to be tested. View AUT ID on Project Home Page.
     - ``"aut": "<AUT ID>"``
     - ``"aut": "67bd4baa0bc67b454f32b054"``
     - Yes

   * - **build.test**
     - APK or ZIP file containing the test cases. View Test Build ID on Project Home Page.
     - ``"test": "<test ID>"``
     - ``"test": "67bd4baa0bc67b454f32b054"``
     - Yes

Device Configuration
--------------------

Configure device selection and targeting for your test execution:

.. list-table:: Device Configuration Attributes
   :header-rows: 1
   :widths: 20 30 25 20 5

   * - Attribute Name
     - Description
     - Usage
     - Example
     - Mandatory

   * - **deviceQueries**
     - Device filters and selection criteria for test execution.
     - ``"deviceQueries": [<device criteria>]``
     - ``"deviceQueries": [{"osVersion": "10.0", "deviceType": "phone"}]``
     - Yes

   * - **deviceGroupsIDs**
     - Array of device group IDs to specify which device groups to use for test execution.
     - ``"deviceGroupsIDs": ["<group_id>"]``
     - ``"deviceGroupsIDs": ["60a1b2c3d4e5f6789012345"]``
     - No

   * - **minDeviceCount**
     - Minimum number of devices required to run the job.
     - ``"minDeviceCount": <number>``
     - ``"minDeviceCount": 2``
     - No

   * - **maxDeviceCount**
     - Maximum number of devices to use for test execution.
     - ``"maxDeviceCount": <number>``
     - ``"maxDeviceCount": 5``
     - No

Device Groups Configuration
---------------------------

You can use the Device Groups feature to enable selection of devices from specific sets of devices. This provides better control over device allocation and test execution.

**Prerequisites:**
* At least one device group must be created
* Your project and desired devices must be part of that group

**deviceGroupsIDs Attribute Options:**

1. **Specific Group IDs**: Array with one or more group IDs
   
   .. code-block:: json
   
      {
        "deviceGroupsIDs": ["60a1b2c3d4e5f6789012345", "60a1b2c3d4e5f6789012346"]
      }
   
   This directs the system to pick devices only from the specified group(s).

2. **Any Available Group**: Array with "any" value
   
   .. code-block:: json
   
      {
        "deviceGroupsIDs": ["any"]
      }
   
   This directs the system to pick devices from any group that the project is part of.

3. **No Group Restriction**: Empty array
   
   .. code-block:: json
   
      {
        "deviceGroupsIDs": []
      }
   
   This directs the system to pick any eligible and available device, regardless of group membership.

Example Job Payload
-------------------

Here's a complete example of a job payload for running Espresso tests:

.. code-block:: json

   {
     "project": "63bc5697baec733123456820",
     "type": "Espresso",
     "identifier": "Smoke Test - Payment Module",
     "desc": "Automated smoke tests for payment functionality",
     "priority": 10,
     "runMode": "distributed",
     "jobCategories": ["Functional", "Smoke", "Payment"],
     "maxJobAttempts": 3,
     "runSetting": "64745b50baec73ad0214dc53",
     "jobScope": "public",
     "attributes": {
       "COUNTRY": "US",
       "ENV": "staging",
       "BUILD_NUMBER": "1.2.3"
     },
     "build": {
       "aut": "67bd4baa0bc67b454f32b054",
       "test": "67bd4bd30bc67b454f32b055"
     },
     "deviceQueries": [
       {
         "osVersion": "11.0",
         "deviceType": "phone",
         "manufacturer": "Samsung"
       }
     ],
     "deviceGroupsIDs": ["60a1b2c3d4e5f6789012345"],
     "minDeviceCount": 2,
     "maxDeviceCount": 5
   }

Framework-Specific Considerations
---------------------------------

**Espresso Jobs:**

* Use ``"type": "Espresso"`` for Android Espresso tests
* Ensure your test APK is properly uploaded and referenced in ``build.test``
* Consider using ``"runMode": "distributed"`` for faster execution

**XCUITest Jobs:**

* Use ``"type": "XCUITest"`` for iOS XCUITest tests
* Ensure your test bundle is properly zipped and uploaded
* Include appropriate iOS version targeting in device queries

**Appium Jobs:**

* Use ``"type": "appium"`` for cross-platform Appium tests
* Configure device queries for both Android and iOS as needed
* Consider parallel execution for cross-platform testing

Job Execution Workflow
-----------------------

When you submit a job via the API, it follows this workflow:

1. **Job Submission**: Job is created with the provided payload
2. **Validation**: Payload is validated for required fields and format
3. **Queuing**: Job enters the pending state based on priority
4. **Device Allocation**: System reserves required devices based on criteria
5. **Execution**: Tests run on allocated devices
6. **Reporting**: Results are compiled and made available

**Job Status Monitoring:**

After job submission, you receive a job ID which can be used to monitor execution:

.. code-block:: text

   GET /v3/job/<job_id>/status

**Report Access:**

Access detailed reports using the job ID:

.. code-block:: text

   GET /v3/report/<job_id>/<framework_type>

Best Practices
--------------

**Job Configuration:**

* **Use Descriptive Identifiers**: Choose meaningful job identifiers for easy tracking
* **Set Appropriate Priority**: Balance job priority with team workflow requirements
* **Configure Retry Logic**: Set reasonable ``maxJobAttempts`` for handling transient failures
* **Use Job Categories**: Tag jobs with relevant categories for better organization

**Device Management:**

* **Optimize Device Selection**: Use specific device queries to target appropriate devices
* **Leverage Device Groups**: Organize devices into groups for better resource management
* **Balance Device Count**: Set appropriate min/max device counts based on test requirements

**CI/CD Integration:**

* **Secure API Keys**: Keep access keys secure and rotate them regularly
* **Handle API Responses**: Implement proper error handling for API calls
* **Monitor Job Status**: Track job execution and handle failures appropriately
* **Integrate with Build Pipeline**: Trigger jobs based on build events and results

**Performance Optimization:**

* **Use Parallel Execution**: Leverage ``runMode: "parallel"`` for faster test execution
* **Optimize Test Selection**: Use targeted test execution when possible
* **Monitor Resource Usage**: Track device utilization and optimize allocation

Troubleshooting
---------------

**Common Issues:**

* **Invalid Project ID**: Ensure project ID is correctly obtained from project URL
* **Missing Build IDs**: Verify AUT and test build IDs are valid and accessible
* **Device Allocation Failures**: Check device availability and group configurations
* **Authentication Errors**: Verify access key validity and permissions

**Debugging Tips:**

* **Validate Payload**: Use JSON validators to ensure payload structure is correct
* **Check Device Status**: Verify target devices are available and online
* **Monitor Job Logs**: Review job execution logs for detailed error information
* **Test Configuration**: Verify run settings and device queries are properly configured

.. seealso::
   
   **Related Topics:**
   
   * :doc:`hubappium_master` - Appium Hub integration
   * :doc:`hubespresso` - Espresso Hub integration  
   * :doc:`hubxcuitest` - XCUITest Hub integration
   * :doc:`continuousintegration` - CI/CD integration strategies
   * :doc:`automationreports` - Understanding test reports and analytics