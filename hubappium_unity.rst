.. _hub-appium_unity:

Running tests for your Unity based app on the RobusTest Hub
===========================================================


.. role:: bolditalic
   :class: bolditalic

.. role:: underline
    :class: underline

**Running your Unity test cases on the RobusTest Hub**

For more information about Unity and Appium, read https://altom.gitlab.io/altunity/altunitytester/pages/tester-with-appium.html#

One of the most important aspects of running your AltUnity based tests on a device lab is to ensure that the port on which AltUnity server runs on the device (default port number is 13000), is forwarded to a port on the host machine.

For this, you need to use the desired capability

robustest.forwardDevicePort

The value that you need to set for this capability is 13000 which is the default port on which the AltUnity server runs on the mobile device. Once the Appium session starts to get details of the host machine and port, get the device details using the device API

http://api.robustest.com/#tag/device/paths/~1v3~1device~1{deviceID}/get

For more information regarding the advanced usage of AltUnity refer to the following link

https://altom.gitlab.io/altunity/altunitytester/pages/advanced-usage.html#