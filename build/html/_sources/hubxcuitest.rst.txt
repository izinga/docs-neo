.. _hub-xcuitest:

XCUITest Testing Hub
====================

.. contents:: In this section
   :local:
   :depth: 2

Overview
--------

XCUITest is Apple's native UI testing framework for iOS applications. RobusTest Hub's XCUITest integration enables you to run your XCUITest suites on real iOS devices in the cloud, eliminating the need to maintain local iOS device infrastructure.

**Key Benefits:**

* **Real iOS Device Testing**: Execute tests on actual iOS devices in the cloud
* **No Local Setup Required**: Eliminate the complexity of iOS device management
* **Scalable Testing**: Run tests across multiple iOS devices simultaneously
* **CI/CD Integration**: Seamlessly integrate with your development pipeline
* **Enterprise Support**: Full support for enterprise app testing

Prerequisites
-------------

Before running XCUITest tests on RobusTest Hub, ensure you have the following:

**Required Components:**

1. **iOS Application**: Enterprise build of your iOS app (.ipa file)
2. **XCUITest Suite**: Compiled XCUITest test bundle (zipped .xctest file)
3. **RobusTest Project**: A project configured for iOS testing
4. **Access Credentials**: Your RobusTest API access key

**Development Environment:**

* Xcode with XCUITest framework
* iOS enterprise provisioning profile
* Compiled test bundle ready for execution

Setup Process
-------------

Follow these steps to set up XCUITest execution on RobusTest Hub:

**Step 1: Project Configuration**

Identify or create a RobusTest project for your iOS testing:

* **One-time Setup**: This configuration is needed only once per project
* **Project ID**: Located in your project dashboard URL
* **Format**: Alphanumeric identifier (e.g., `5d176ffef0238be8f3b7afa5`)

**Step 2: App Build Upload**

Upload your iOS enterprise build to the project:

* **Frequency**: Required for each new app build
* **File Format**: Enterprise .ipa file
* **Build ID**: Generated automatically upon successful upload

**Upload Methods:**

* **Manual Upload**: Use the project dashboard upload interface
* **API Upload**: Use the remote build upload API

For detailed build upload instructions, see: :doc:`projectdashboard`

**Step 3: Test Build Upload**

Upload your compiled XCUITest bundle:

* **Frequency**: Required with each new app build or test changes
* **File Format**: Zipped .xctest file
* **Test Build ID**: Generated automatically upon successful upload

**Test Bundle Preparation:**

.. code-block:: bash

   # Build your XCUITest bundle
   xcodebuild -project MyApp.xcodeproj -scheme MyAppUITests -sdk iphoneos build-for-testing

   # Zip the .xctest bundle
   zip -r MyAppUITests.zip MyAppUITests.xctest/

**Step 4: Access Key Retrieval**

Obtain your RobusTest API access key:

* **Location**: Available in your user profile page
* **Security**: Keep your access key secure and never share it publicly
* **Usage**: Required for all API calls to RobusTest Hub

For detailed access key information, see: :doc:`userprofile`

**Step 5: Test Execution**

Execute your XCUITest suite using the RobusTest API:

**API Endpoint:**

.. code-block:: text

   <RobusTest URL>/v3/xcuitest/job/new?accesskey=<ACCESS_KEY>

**HTTP Method:** POST

**Request Payload:**

.. code-block:: json

   {
     "identifier": "<ENTERPRISE_IDENTIFIER>",
     "deviceVersion": "<iOS_VERSION>",
     "project": "<PROJECT_ID>",
     "build": "<BUILD_ID>",
     "testBuild": "<TEST_BUILD_ID>"
   }

* *URL:* **<RobusTest URL>/v3/xcuitest/job/new?accesskey=<ACCESS KEY>**

* *METHOD:* **POST**

* *PAYLOAD:*

::

   { 
     "identifier":"<IDENTIFIER_NAME_GIVEN_BY_ENTERPRISE>",
     "deviceVersion":"<iOS version of the device>",
     "project":"<Project ID>",
     "build":"<Build ID>",
     "testBuild":"<Test Build ID>"
   } 

**6** When you run your job using the API above, the response will contain the job id in form of the key _id. Use this value to get the JSON for the run report

http://<RobusTest URL>/v3/report/<job id>/xcuitest

**7** To get the JSON report for an individual test case, use the id value for each test case run instance in the following URL

http://<RobusTest URL>/v3/xcuitest/testcase/<test case instance ID>