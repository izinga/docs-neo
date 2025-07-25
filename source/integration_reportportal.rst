Integration: Report Portal
==========================

RobusTest supports the pushing of test reports to Report Portal. For this you need to configure the system. Find the instructions below

**Admin Console**

The first step is to add your Report Portal instance to RobusTest. This is done in admin console.

1. Go to the Integrations Section in Admin Console

2. Click on the + button to create a new Integration

3. Make the following selections

* Service Type should be Reporting

* Service should be Report portal

* Provide a name for this integration

* Provide the Base URL for Report Portal. This should be of the form http://{Report Portal URL}/api/v1

* Provide the Auth Token

4. Click on Save

5. Once you click on Save and if the integration is successfully completed, your Report Portal projects should be visible.


**Project Dashboard**

1. Go the project which you want to integrate with your Report Portal instance

2. Select Service Type as Reporting

3. Select Service as Report portal

4. Select the Report Portal instance from the Integrations drop down

5. Select the Report Portal project from the Project drop down

6. Click on Save

7. Your RobusTest project is now integrated with the selected Report Portal project and your test runs data will now be pushed to the select project in Report Portal.

