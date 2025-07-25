Capturing Requests and Responses
================================

**One time steps**

1. Install mitmproxy on your laptop [you can install either using brew or you can download the binary from https://mitmproxy.org/downloads/]


2. Get the robustest.py file and place it in a separate folder

**Pre-requisites**

1. Make sure you are able to access your device lab URL from your system

2. Make sure that your mobile device can access your system's IP address

**Running the proxy server to capture network data**

1. Run the following command

mitmdump  -p 8888 -s ./robustest.py --set nerve_server={Device Lab URL including http/s}

**Configuring the mobile device to send requests through the proxy**

1. On your mobile device, configure the WiFi connection for manual proxy and enter the following details

A. Proxy server URL - the IP of your laptop

B. Proxy server port - 8888

2. Once configured, go to mitm.it from your phone's browser and download mitm certificate for your device platform

3. For iOS devices, go to Settings -> General -> About -> Certificate Trust Settings. Enable the option Enable Full Trust for Root Certificates for mitmproxy

**Running your tests**
 
Once you are start running your tests, the network logs captured by mitmproxy will be stored in RobusTest and are accessible in the following ways

**/v3/testsession/{testsessionID}/mitmproxy**

**/v3/appium/{appium_session_id}/mitmproxy**

**/v3/result/{result_id}/mitmproxy**


Deprecated API routes


**/v3/mitmproxy/testsession/{testsession ID}**

**/v3/mitmproxy/seleniumSessionID/{appium/selenium sessionID}**

**/v3/mitmproxy/result/{resultID}**