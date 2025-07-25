.. _setting-up-tunneling:

Setting Up Tunneling
====================


.. role:: bolditalic
   :class: bolditalic

.. role:: underline
    :class: underline


To configure tunneling for your tests in such a way that all requests from your test device go through a system/server that you have identified, you need to do the following

1. Set the proxy on the mobile device on which you to run your tests

For iPhone, follow the steps below to set the proxy

i. Open up Settings > Wifi
ii. Click on the blue arrow next to your wifi connection.
iii. Scroll to the bottom where there is a section for HTTP Proxy.
iv. Select Auto from this section.
v. In the URL field enter the value 

http://{RobusTest_URL}/tunnelConf

2. Download the tunneling client from the device lab using the following URL

Linux

{Device Lab URL}/download/file/robustest_tunnel_linux_amd64

MacOS

{Device Lab URL}/download/file/robustest_tunnel_mac

Windows

{Device Lab URL}/download/file/robustest_tunnel_window_386.exe

3. On the machine from which you want all requests to pass through, run the following command

{tunnel client filename} connect --key <key unique to the client> --nerve {RobusTest_URL} --accessKey {User Access Key}

Make sure you note down the unique key, this key will need to be passed on when running your tests

4. If running Appium tests, pass the value of the unique key as robustest.tunnelKey

5. Ensure that the following port policies are allowed

A. Requests from the machine where the tunnel client is running to the tunnel server on ports 3000 to 5000

B. Requests from the mobile device to the tunnel server on port 1080

C. Requests from the device lab to the tunnel server on port 9321