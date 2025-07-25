Integration: Report Portal
==========================

RobusTest supports the pushing of test reports to Report Portal. 

In addition to test reports you can also push the following artefacts to Report Portal:

* Screenshots
* Device Log
* Framework Log

In order to do so, you need to do the following:

1. Create an Integration for Report Portal
2. Update the *Test Data Collection* section of the run setting
3. Submit the job using the run setting

**1. Creating an Integration for Report Portal**

   The first step is to add your Report Portal instance to RobusTest

   1. Go to the Integrations Section in the Admin Console   

   2. Click on the + button to create a new Integration

   3. Make the following selections:

      * Provide a name for this integration

      * In the *'Service Type'* drop down, choose the option *'Reporting'*.

      * In the *'Service'* drop down, choose the option *'Report Portal'*.

      * Provide the Auth Token for your Report Portal Instance.

      * Provide the Base URL for Report Portal. This should be of the form *http://{Report Portal URL}/api/v1*

      * In the *'Project Name'* field, enter the name of the Report Portal project to be used. 

   4. Click on 'Save'. An integration entry for report Portal is now successfully created.

   5. Note the Integration ID for the Integration you created. This is the value displayed below the Integration name.

**2. Updating the Test Data Collection section of the run setting**


   1. Go the project in which you want to execute jobs whose results need to be pushed to your Report Portal instance.

   2. Click on Run Settings. You are now on the 'Run Settings' page.

   3. Create a new run setting or open an existing run setting in 'Edit' mode.

   4. Scroll down until you see the Test Data Collections section.

   5. To create Test Data Collection entries for Report Portal, have a look at: :ref:`test-data-collection-report-portal`

   6. To push data to Report Portal, refer to the following: :ref:`push-data-to-report-portal`

   7. Once the necessary changes have been made, save your run setting.

**3. Submit the job using the run setting**

   * Now that you have created your run setting, submit a job using this run setting,

   * The job will now push your test run results to the selected project in Report Portal.


