.. _hub-espresso:

Espresso Testing Hub
====================

.. contents:: In this section
   :local:
   :depth: 2

Overview
--------

Espresso is Google's native Android UI testing framework that enables you to write fast, reliable UI tests for Android applications. RobusTest Hub's Espresso integration provides a cloud-based platform for running your Espresso tests on real Android devices at scale.

**About Espresso Framework:**

Espresso is designed to provide a simple, consistent, and more predictable testing API for developers and testers. For comprehensive information about Espresso, visit the `official Android documentation <https://developer.android.com/training/testing/espresso/>`_.

**Key Benefits of RobusTest Espresso Hub:**

* **Real Device Testing**: Execute tests on actual Android devices in the cloud
* **Scalable Infrastructure**: Run tests across multiple devices simultaneously
* **CI/CD Integration**: Seamlessly integrate with your continuous integration pipeline
* **Parallel Execution**: Distribute tests across devices for faster feedback
* **Comprehensive Reporting**: Detailed test results and execution analytics

Espresso Job Execution Workflow
-------------------------------

RobusTest processes Espresso jobs through a sophisticated workflow designed for reliability and efficiency:

**Job Submission**

To run an Espresso job on RobusTest, submit an API-based request with the following parameters:

* **Job Priority**: Higher numbers indicate higher priority for job execution
* **Minimum Device Count**: Minimum number of devices required to run the job
* **Test Configuration**: Specify test parameters and device requirements
* **Retry Configuration**: Set maximum retry attempts for failed jobs

**Job Processing States**

**1. Pending State**
When an Espresso job is submitted, it enters the Pending state and waits for device availability.

**2. Job Scheduling**
The RobusTest system checks for pending jobs every 100 seconds and selects jobs based on:

* **Priority Level**: Higher priority jobs are processed first
* **Device Availability**: Jobs run only when sufficient devices are available
* **Resource Requirements**: Minimum device count must be met

**3. Queue Management**
Once a job is selected for execution:

* **Device Reservation**: Required devices are blocked for the job
* **Resource Allocation**: Devices are prepared for test execution
* **Job Queuing**: Job is added to the execution queue

The RobusTest system checks for jobs in pending state every 100 seconds and picks up a job based on its priority and the number of devices required. If available device count is less than min devices required by job then job will not run in current cycle.

* Once a job is picked up to run, it is added in the queue. 

* Once in the queue, the number of devices required are blocked. 

* Each device that is reserved for the job is put through a dry run. In dry run both APKs - the app binary and test binary - are installed on the device, tests are extracted and executed through a quick run to check if the device will be able to run these tests. 
   * If the dry run fails on a device, that device is removed from the job. 
   * The job will run even if one device of all the reserved devices passed the dry run. 
   * If all the devices fail to execute the dry run, then the job will be marked as Failed and will be retried in next cycle. The number of such re-attempts can be configured in the job API request by changing the value of field maxAttempts. Default value of maxAttempts is 5. 

* Once the dry run is successful even on one of the reserved devices, the associated PR will be blocked as pending with the context set as robustest/espresso and description as Espresso tests are running on RobusTest for job. 

* Once the dry run is completed, the job moves to the Running state, where the job is now ready to give test cases to devices which have completed their dry runs successfully.

* Once the job starts running, the devices start executing tests. Once a test case completes execution on a device, the device requests for the next test case.

During the course of test case execution, one or more of the following may happen:

* If a test case executes successfully, the device requests for the next test case.

* When a device requests for a test and if there are tests remaining, one test case is assigned to the device. If there are no more tests to assign, the device is freed.

* If a test case fails, then it is marked as failed and added back to the pool of tests to be retried. The number of such of retries is configurable. When a failed test case is retried, it may run on the same device or on a different device.

* If a test case crashes during execution, then it is not retried.

* If no response is received from a job for 800 seconds, the job is restarted i.e. the job is suspended, all associated devices are freed and the job is resumed. When the job is resumed, the devices that reserved based on availability. Therefore, the set of devices may differ from the earlier set. In such a case, the tests that are already executed are excluded from the run and only the pending tests are executed.

* Once a job completes, it checks to see if there are any devices that are still associated with the job. If such a device is found, it is freed.

* Once a job completes, a comment is added to the associated GitHub commit with the following data:-

  * Total number of tests
  * Number of tests passed
  * Number of tests failed
  * Number of tests errored
  * Number of tests skipped
  * Number of tests crashed
  * Link to Report

The PR is updated based on the following conditions:

* Even if one test case crashes, the PR will be marked as Failed

* If the number of failed test cases is equal to or higher than the threshold set in the Job API request, the PR will be marked as Failed

* If the number of failed tests cases is lower than the threshold set in the Job API request, the PR will be marked as Successful

* If the job does not complete within the maxAttempts, the PR will be marked as Failed.