Troubleshooting your Espresso job
=================================

When running your Espresso tests on RobusTest, you may come across results or behavior which may not expected. Before you request for help from support, it would help you perform the following basic checks to ensure there any issues in your tests or test commands is ruled out.

*Reproducing the issue*

1. Download your app build and the test binary from RobusTest

2. Run the following commands and check if the output is matching your expectations

Following command lists all the test classes in your test package

.. code-block:: JSON

	adb shell am instrument -w -e log true  -e class {test class name} {application package name/ID}/{test runner name}	

Following command lists all the test methods in your test package

.. code-block:: JSON

	adb shell am instrument -w -r -e log true -e class {test class name} {application package name/ID}/{test runner name}

This will ensure that you know what classes and methods are being picked up by RobusTest when trying to run your Espresso job.

*Sometimes devices are shown as green (free) on dashboard but still jobs show in queue. What could be the reason for this?*

This may happen because of multiple reasons:

* When starting an Espresso job, in the API request, user has to specify if the devices should be picked up from general pool or from specific group. If user has selected to run from general pool, then even if devices from specific group are available, they will not be picked up for the run. And vice versa.

* This may also happen when the minimum number of devices requested is higher than the number of devices currently available in the general or specific pool as has been selected by the user.

* This may happen also in the period between the submission of the job and the picking up of the job by the RobusTest system. This duration is usually ranges between 2 to 3 minutes. However, do note that this is temporary and the devices will be reserved once the job is picked up by RobusTest.

*If my job does not complete within a certain time, I would like it to be closed. How do I do that?*

In case of CI based operations, it is important that a job does not remain in running or pending state forever, since critical code pushes and business decisions need to be made. Therefore when making a request to RobusTest, you can provide an attribute runTimeout. This value takes in the value in seconds. RobusTest uses the value of this attribute and compares it against the duration for which the job has been in the system. If the duration value exceeds the runTimeout then, the job is ended. Note that runTimeout should be used to specify the total time within which the job should be completed including the waiting and running times

*Can I close a job after making a job request?*

Yes, it is possible to close a job after making a job request. The key is to find out the job that you would want to close and sent a DELETE method to RobusTest Espresso API. In the API you can also provide a reason for closing the job to help create a record.

Usage
? reason=PR has been updated, therefore closing this job and starting a new on