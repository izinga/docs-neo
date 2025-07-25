.. _run-settings-runner:

RobusTest Runner Run Settings
=============================

.. role:: bolditalic
  :class: bolditalic

.. role:: underline
  :class: underline


A RobusTest Runner Run Setting is used while starting a Test Run Session using the RobusTest Runner.

The default runner run setting consists of the following groups of settings:

| **1. General Settings**
| **2. Appium Settings**
| **3. Notification Settings**
| **4. Job Settings**
| **5. Performance Settings**
| **6. Uninstall Apps** 

**1. General Settings**

By default, the 'General Settings' section has the following parameters and values:

   **a.** **reset** 
     * default value: **no** 
     * ensures that the app is not reset    

   **b.** **uninstallAppAfterRun** 
     * default value: **yes** 
     * this ensures that the app is uninstalled from the device at the end of the test session

   **c.** **uninstallAppBeforeRun** 
     * default value: **yes** 
     * this ensures that the app, if already installed, is uninstalled from the device at the beginning of a new test session

You can add/modify/delete other parameters to your run setting

**2. Appium Settings**

   This section enables users to customise values for parameters to be passed to the Appium automation framework. This includes various *Appium Desrired Capabilities* such as '**automationName**', '**fullReset**', '**noReset**', etc.


**3. Notification Settings**

This section enables users to send out notification emails, at the end of a test run, to a group of email IDs 

For each 'key' in the setting, the user can enter one or more email IDs in the 'Value' field separated by commas.

There are 3 keys provided:

    **a.** **onComplete** - An email notification is sent to the the email IDs on completion of a test run

    **b.** **onFail** - An email notification is sent to the group of email IDs only if at least one test case, being executed as part of the run, has failed

    **c.** **onPass** - An email notification is sent to the group of email IDs only if all test cases being executed as part of the run have passed


**4. Job Settings**


**5. Performance Settings**

This section determines whether the performance metrics of an app needs to be captured or not

   **a.** **monitor** 
     * default value: **false** 
     * if *true*, enables the monitoring of various performance parameters such as Memory, CPU, Network Activity, etc.

   **b.** **saveData** 
     * default value: **false** 
     * if *true*, enables the saving of various performance parameters on the RobusTest server

  **6. Uninstall Apps**
