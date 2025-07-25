API to switch to specific SSID
==============================

.. role:: bolditalic
   :class: bolditalic

.. role:: underline
    :class: underline

**API Definiton**


​HTTP Method: PUT

​
*URL:*

http://<RobusTest URL>/v3/testsession/<testsession_id>/changewifi?accesskey=<access key>

​
*Payload:*

.. code-block:: JSON

  {
    "ssid" : "<ssid value>",
    "password" : "<password value>"
  }

​
Since Device ID needs to be provided as part of the API payload, you can find the device id through the following Java code

.. code-block:: Java

 Bundle testBundle = InstrumentationRegistry.getArguments();
 string deviceID = testBundle.getString("deviceID");

**Sample API Invocation**

HTTP Method: PUT

​
*URL:*

http://devicelab.robustest.com/v3/testsession/123SFSAD312313SDF/changewifi?accesskey=1234DFFGG24FDSD

​
*Payload:*

.. code-block:: JSON

  {
    "ssid" : "RobusTest_WiFi",
    "password" : "AlwaysKeepTesting"
  }