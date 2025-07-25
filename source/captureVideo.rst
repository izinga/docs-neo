Capturing device screen as video
================================

When running your automated tests, you may want to capture the screen of the mobile device. This helps in more accurate debugging in many cases.

RobusTest enables you to capture the mobile device screen as a video.

*Currently you can capture device screen for Espresso tests run on Android devices*

**Configuring your Espresso test runs to capture device screen**

1. Note that the screen recording can only be stored on external storage providers like Google Storage and AWS. Currently, screen recording files can be pushed to two storage providers - Google and AWS.

2. Ensure that your Google or AWS storage bucket is registed with RobusTest.

3. Once you have created an integration in RobusTest, note the Integration ID. This integration ID will be specified in the Run Settings that you shall use for your job.

4. Open an existing Run Settings for editing or create a new one.

5. In the Job section, look for the testDataCollections sub-section.

6. Create the first entry by entering the following values

testDataCollections.testDataPoint: **stats**

testDataCollections.integrationType: **{Google/AWS. Do not use the curly brackets}**

testDataCollections.integrationID: **{Integration ID that you have noted in step 3. Do not use the curly brackets}**

testDataCollections.invokeConditions:

7. Create the second entry by entering the following values

testDataCollections.testDataPoint: **video**

testDataCollections.integrationType: **{Google/AWS. Do not use the curly brackets}**

testDataCollections.integrationID: **{Integration ID that you have noted in step 3. Do not use the curly brackets}**

testDataCollections.invokeConditions: