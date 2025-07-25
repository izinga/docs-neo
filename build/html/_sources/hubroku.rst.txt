.. _hub-roku:

Roku Testing Hub
================


.. contents:: In this section
   :local:
   :depth: 2

Overview
--------

RobusTest provides comprehensive support for Roku device testing through automated test execution using the official Roku JavaScript library. This enables you to run your Roku channel tests on real Roku devices in the RobusTest device lab.

**Key Benefits:**

* **Real Roku Device Testing**: Execute tests on actual Roku devices in the cloud
* **JavaScript Library Integration**: Built on the official Roku JavaScript testing framework
* **Customized Library**: Enhanced version of Roku's library optimized for RobusTest
* **Remote Execution**: Run tests without maintaining local Roku device infrastructure
* **Comprehensive Reporting**: Detailed test results and execution analytics

**Official Roku Documentation:**

For detailed information about Roku's JavaScript testing library, visit:
`Roku JavaScript Library Documentation <https://developer.roku.com/en-gb/docs/developer-program/dev-tools/automated-channel-testing/javascript-library.md>`_

Setup Process
-------------

**Step 1: Download RobusTest Roku Library**

RobusTest provides a customized version of the Roku JavaScript Library optimized for device lab execution. Download the enhanced library from:

.. code-block:: text

   {RobusTest Device Lab}/v3/download/file/automated-channel-testing-master.zip

Use this library in place of the default Roku library for seamless integration with RobusTest.


**Step 2: Configure Base Capabilities**

To run your tests on the RobusTest device lab, you need to provide specific configuration information in the ``baseCapabilities.js`` file located in the ``jsLibrary/library`` folder.

**Required Configuration Parameters:**

.. list-table:: Base Capabilities Configuration
   :header-rows: 1
   :widths: 25 50 25

   * - Parameter
     - Description
     - Example

   * - **Project ID**
     - The RobusTest project ID where your Roku app is configured
     - ``"5d176ffef0238be8f3b7afa5"``

   * - **Build ID**
     - ID of the Roku build that has been uploaded to RobusTest
     - ``"67bd4baa0bc67b454f32b054"``

   * - **Job Identifier**
     - Unique string to identify the job grouping your test cases
     - ``"Roku_Smoke_Tests_v1.2"``

   * - **Access Key**
     - Your unique RobusTest API access key
     - ``"your_access_key_here"``

   * - **RobusTest Device Lab URL**
     - The RobusTest device lab URL for test execution
     - ``"https://your-lab-url.com"``

**Step 3: Configure Test Case Identifiers**

In your individual test cases, define the following:

* **RobusTest Session Identifier**: Unique identifier for each test case or test session

**Configuration Example:**

.. code-block:: javascript

   // baseCapabilities.js
   module.exports = {
     projectId: "5d176ffef0238be8f3b7afa5",
     buildId: "67bd4baa0bc67b454f32b054",
     jobIdentifier: "Roku_Smoke_Tests_v1.2",
     accessKey: "your_access_key_here",
     deviceLabUrl: "https://your-lab-url.com"
   };

**Important Notes:**

* **Job Identifier Uniqueness**: Use a unique job identifier for each test run, but keep it consistent across all test cases within the same job
* **Override Capability**: Configuration values in ``baseCapabilities.js`` can be overridden at the individual test case level
* **Session Identification**: Each test case should have a unique session identifier for proper tracking and reporting

Test Case Implementation
------------------------

**Sample Test Case Structure:**

Reference the included ``test_basic.js`` sample test case to understand the proper structure for writing Roku test cases that run on the RobusTest device lab.

**Basic Test Case Example:**

.. code-block:: javascript

   // test_basic.js
   const { RobusTest } = require('./jsLibrary/library');
   
   describe('Roku Channel Tests', () => {
     beforeEach(() => {
       // Set unique session identifier
       RobusTest.setSessionIdentifier('test_basic_session_001');
     });
     
     it('should launch channel successfully', async () => {
       // Your test implementation here
       await RobusTest.launchChannel();
       // Add assertions and test logic
     });
   });

Best Practices
--------------

**Test Organization:**

* **Unique Identifiers**: Use descriptive and unique session identifiers for each test
* **Consistent Naming**: Maintain consistent naming conventions across test cases
* **Proper Grouping**: Group related tests under the same job identifier

**Configuration Management:**

* **Secure Credentials**: Keep access keys secure and never commit them to version control
* **Environment Variables**: Use environment variables for sensitive configuration
* **Parameterization**: Make configuration easily adaptable for different environments

**Device Testing:**

* **Real Device Benefits**: Test on actual Roku devices for accurate results
* **Multiple Models**: Test across different Roku device models when possible
* **Network Conditions**: Consider testing under various network conditions

Troubleshooting
---------------

**Common Issues:**

* **Connection Problems**: Verify device lab URL and network connectivity
* **Authentication Failures**: Check access key validity and project permissions
* **Build Issues**: Ensure Roku build is properly uploaded and accessible
* **Library Conflicts**: Verify you're using the RobusTest-customized library

**Debugging Tips:**

* **Check Logs**: Review test execution logs for detailed error information
* **Verify Configuration**: Double-check all configuration parameters
* **Test Connectivity**: Ensure device lab connectivity before running tests
* **Sample Tests**: Start with the provided sample test cases to verify setup

.. seealso::
   
   **Related Topics:**
   
   * :doc:`addnewdeviceroku` - Adding Roku devices to RobusTest
   * :doc:`automationreports` - Understanding test reports and analytics
   * :doc:`continuousintegration` - CI/CD integration strategies
   * :doc:`robustesthub` - RobusTest Hub overview






