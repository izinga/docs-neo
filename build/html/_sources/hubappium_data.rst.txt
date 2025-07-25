.. _hub-appium_master:

Appium Test Data
================

.. role:: bolditalic
   :class: bolditalic

.. role:: underline
    :class: underline


**Retrieving Appium Test Session Data**

When running your Appium tests, data is generated in the form of logs and test details. Additionally, the user may want to annotate test sessions with attributes and their values. 

Data for an Appium test session can be retrieved at the end of every session or at the end of the complete job. User can choose their approach based on their need.

Test run data can be retrieved from RobusTest using two different ways:

**1. By using a RobusTest Test Case** (*RECOMMENDED*)

* To enable seamless reporting in RobusTest, it is recommended to create a test case in RobusTest for every Appium test session that is completed. 

- To achieve this, the appium test creation API needs to be called after an Appium test session is complete. 

* Details of the API can be found by clicking `here <http://api.robustest.com/#tag/hub-appium/paths/~1v3~1appium~1testcase~1{appium_session_id}/post>`_

- By providing the Appium session ID, user can assign name, status, desc and  message for a test case. If status is not provided in the API call, then the test case is marked as fail. 

* Fetch the data right after the completion of the appium test session.

- The response to this API will provide the various details of the test case created in RobusTest, including:

  **1. Start time**

  **2. Updated time**

  **3. Duration** - calculated from the difference between the value of updated time of the appium test sesion at the time of the API being called and the start time of the appium test session.

  **4. By using an Appium Session ID** - available inside the *framework* object of the response.

* If the test case has run properly and has been ended properly in the test code, the *Updated time* is the completed time of the test session. 

- Note: *It is important that the above API is called only after the test session is complete to ensure that the values stored are correct*

* Fetch data after the completion of the appium job

   * Get the RobusTest Job ID by invoking the following API and extracting the value of the "_id" attribute:

     **GET /v3/job/{robustest job identifier}**

   * The list of all test case entries for the job can be retrieved using the following API:

     **GET v3/job/{RobusTest Job ID}/testcases**

**2. Appium Test Session**

In case, user does not wish to create a test case entry in RobusTest, data can still be retrieved by the following ways:

     *1. Fetch data right after the completion of the appium test session*

     * Use any of the following APIs:

       **GET /v3/hub/sessionIdentifer/{robustestSessionIdentifier}**

       **GET /v3/hub/session/{Appium Session ID}**

     *2. Fetch data after the completion of the appium job*

     * Get the RobusTest Job ID by invoking the following API and extracting the value of the "**_id**" attribute:

       * **GET /v3/job/{robustest job identifier}**

     - Using the Job ID, get all the test sessions for the job:

       * **GET /v3/job/{RobusTest Job ID}/testsessions**

     * In the response of the API request, there will be an array of objects - each object being a test session entry. Each entry will contain all the details related to the session e.g. robustestSessionIdentifier and Duration