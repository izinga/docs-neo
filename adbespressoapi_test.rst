API to execute ADB commands from within an Espresso test
========================================================

.. role:: bolditalic
   :class: bolditalic

.. role:: underline
    :class: underline

**API Definiton**

​Method: POST

​
URL:

http://<RobusTest URL>/v3/device/shell?accesskey=<user_access_key>
​
Payload:

.. code-block:: JSON

 {
    "_id" : "device_id",
    "command" : "<ADB SHELL COMMAND>"
 }

​
Since Device ID needs to be provided as part of the API payload, you can find the device id through the following Java code

.. code-block:: Java

 Bundle testBundle = InstrumentationRegistry.getArguments();
 string deviceID = testBundle.getString("deviceID");

**Sample API Invocation**

Method: POST
​

URL:

http://devicelab.robustest.com/v3/device/shell?accesskey=1234DFFGG24FDSD
​
Payload:

.. code-block:: JSON

  {
    "_id" : "2132SDSFDSFDSF",
    "command" : "ls /data/local/tmp/"
  }