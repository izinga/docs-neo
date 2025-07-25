Espresso
========

Introduction to Espresso

Espresso is a testing framework for Android that makes it easy to write reliable UI tests for an app. More information at https://developer.android.com/training/testing/espresso/

How do Espresso jobs run in RobusTest

To run an Espresso job on RobusTest, an API based request should be made to RobusTest. In this request, user can specify the priority of the job (a higher number means higher priority), minimum number of devices required to run the job.

Once espresso job is submitted, the job enters the Pending state.

The RobusTest system checks for jobs in pending state every 100 seconds and picks up a job based on its priority and the number of devices required. If available device count is less than min devices required by job then job will not run in current cycle.

Once a job is picked up to run, it is added in the queue. Once in the queue, the number of devices required are blocked. Each device that is reserved for the job is put through a dry run. In dry run both APKs - the app binary and test binary - are installed on the device, tests are extracted and executed through a quick run to check if the device will be able to run these tests. If the dry run fails on a device, that device is removed from the job. The job will run even if one device of all the reserved devices passed the dry run. If all the devices fail to execute the dry run, then the job will be marked as Failed and will be retried in next cycle. The number of such re-attempts can be configured in the job API request by changing the value of field maxAttempts. Default value of maxAttempts is 5. 

Once the dry run is successful even on one of the reserved devices, the associated PR will be blocked as pending with the context set as robustest/espresso and description as Espresso tests are running on RobusTest for job. 

Once the dry run is completed, the job moves to the Running state, where the job is now ready to give test cases to devices which have completed their dry runs successfully.

Once the job starts running, the devices start executing tests. Once a test case completes execution on a device, the device requests for the next test case.

During the course of test case execution, one or more of the following may happen

If a test case executes successfully, the device requests for the next test case.
When a device requests for a test and if there are tests remaining, one test case is assigned to the device. If there are no more tests to assign, the device is freed.
If a test case fails, then it is marked as failed and added back to the pool of tests to be retried. The number of such of retries is configurable. When a failed test case is retried, it may run on the same device or on a different device.
If a test case crashes during execution, then it is not retried.
If no response is received from a job for 800 seconds, the job is restarted i.e. the job is suspended, all associated devices are freed and the job is resumed. When the job is resumed, the devices that reserved based on availability. Therefore, the set of devices may differ from the earlier set. In such a case, the tests that are already executed are excluded from the run and only the pending tests are executed.
Once a job completes, it checks to see if there are any devices that are still associated with the job. If such a device is found, it is freed.
Once a job completes, a comment is added to the associated GitHub commit with the following data
Total number of tests
Number of tests passed
Number of tests failed
Number of tests errored
Number of tests skipped
Number of tests crashed
Link to Report
The PR is updated based on the following conditions
Even if one test case crashes, the PR will be marked as Failed
If the number of failed test cases is equal to or higher than the threshold set in the Job API request, the PR will be marked as Failed
If the number of failed tests cases is lower than the threshold set in the Job API request, the PR will be marked as Successful
If the job does not complete within the maxAttempts, the PR will be marked as Failed.




FAQs

Sometimes devices are shown as green (free) on dashboard but still jobs show in queue. What could be the reason for this?

    This may happen because of multiple reasons

When starting an Espresso job, in the API request, user has to specify if the devices should be picked up from general pool or from specific group. If user has selected to run from general pool, then even if devices from specific group are available, they will not be picked up for the run. And vice versa.
This may also happen when the minimum number of devices requested is higher than the number of devices currently available in the general or specific pool as has been selected by the user.
This may happen also in the period between the submission of the job and the picking up of the job by the RobusTest system. This duration is usually ranges between 2 to 3 minutes. However, do note that this is temporary and the devices will be reserved once the job is picked up by RobusTest.

If my job does not complete within a certain time, I would like it to be closed.

In case of CI based operations, it is important that a job does not remain in running or pending state forever, since critical code pushes and business decisions need to be made. Therefore when making a request to RobusTest, you can provide an attribute runTimeout. This value takes in the value in seconds. RobusTest uses the value of this attribute and compares it against the duration for which the job has been in the system. If the duration value exceeds the runTimeout then, the job is ended. Note that runTimeout should be used to specify the total time within which the job should be completed including the waiting and running times

Can I close a job after making a job request?

Yes, it is possible to close a job after making a job request. The key is to find out the job that you would want to close and sent a DELETE method to RobusTest Espresso API. In the API you can also provide a reason for closing the job to help create a record.

Usage
? reason=PR has been updated, therefore closing this job and starting a new on