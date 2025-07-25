.. _push-data-to-report-portal:

Pushing data to Report Portal
=============================

* RobusTest provides you the option to send one or more artefacts to Report Portal.

* In your run setting, you need to create a separate test data collection entry for each artefact that you wish to push to report Portal

* It is **mandatory** *that you have one entry where the test data point has the value* **stats**

  * E.g., if you want to push the deviceLog to Report Portal, you need to create two test data collections in your run setting - one with test data point *stats* and the second with test data point *deviceLog*


* **Conditional sending of data**

  * For device logs, framework logs and screenshots, you have the option to push data to Report Portal  conditionally.

  * This can be done through the 'Invoke Conditions' section of the test data collection entry.
  
  * In order to set a conditon, click on the + sign next to the label *testDataCollections.invokeConditions*

    * An entry for a condition is now seen generated. 
    * The first condition entry will be named *Condition # 1*

  * On expanding the condition, you see that there are three fields to be filled in:

    1. *attributeName*  - this is the attribute on which you want to set your condition
    2. *attributeValue* - this is the value of the attribute that you are looking for
    3. *operator*       - this is the conditional operator to be checked

  * E.g. Let us say you want to send to Report Portal the following data for a job that is executed:

    1. the framework logs only for test cases that have failed
    2. the screenshots only for test cases that have passed

    * To do so, you need to create 3 test data collection emtries:

      * the first test data collection entry: 

        * this will have *stats* as the test data point value (as this is a mandatory entry)

      * the second test data collection entry:

        * this will have *result* as the test data point value
        * for this test data colletion you will create a condition with the following values:

          * *attributeName* : **status**
          * *attributeValue*: **Fail**
          * *operator*      : **=**

      * the third test data collection entry:

        * this will have *screenshot* as the test data point value
        * for this test data colletion you will create a condition with the following values:

          * *attributeName* : **status**
          * *attributeValue*: **Pass**
          * *operator*      : **=**

  * **Note:** Conditions cannot be set for test data point value *stats*

  * You can set more than one conditions for each test data collection entry