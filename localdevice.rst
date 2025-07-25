Connecting your local devices to RobusTest Device Lab
=====================================================

Requirements

1. A computer system running Mac OSX, Linux, Windows
2. RobusTest Connect. You can get the RobusTest Connect software from link shared by RobusTest
3. Java Development Kit
4. For Android Devices

Android SDK

5. For iOS Devices

XCode

Python3

HomeBrew

HomeBrew Module - libimobiledevice

6. Appium - To run Appium tests, install Appium and all recommended dependencies.

iOS  Real Device - github.com/appium/appium-ios-device


Installing RobusTest Agent

1. Unzip the downloaded software. The unzipped file should give you a folder “robustest”
2. Inside the robustest folder, you will find RobusTest_Connect.sh file
3. In case you are using an Android device, open this file in a text editor and provide necessary path for Android SDK
4. Open your terminal (command line)
5. Move to the robustest folder
6. Run the RobusTest_Connect.sh script by running the command ./StartRobusTestAgent.sh from the command line

Enable Appium log streaming through RobusTest

In your appium installation look for the logsink.js file in the following folder
<node installation folder>/lib/node_modules/appium/build/lib
Replace the logsink.js file in your appium installation with the logsink.js file available here. Make sure you use the logsink.js file which is appropriate for your Appium version.