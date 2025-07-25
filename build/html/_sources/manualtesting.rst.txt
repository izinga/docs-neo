Manual Testing
==============

.. toctree::
   :maxdepth: 1
   
   deviceconfigmenumanual
   sessionconfigmenumanual
   multidevicetesting
   testvideomanualtesting

.. role:: bolditalic
  :class: bolditalic

.. role:: underline
  :class: underline


Now that you have created a project and selected a build to test, you may want to get right into it and perform some manual testing on your app.

To start a Manual test session:

1. Click on the 'Manual' icon on the Project Dashboard
   
   A device selection screen now pops up. You may search for a device on the 'Device selection screen' based on device name, platform version, screen size, hardware configuration (e.g. Memory and CPU),  node name, node IP, etc.
 
2. Select the device you wish to test on by clicking on the 'Select' button under the device

   *Note:* RobusTest provides you a way to select multiple devices in parallel to perform your manual testing. To know more go to the page on :ref:`multi-device-testing` 
  
3. Once you have selected the device, click on the 'Play' button on the top right corner.
 
   The device screen now comes up and you can see that your app is installed on the device. 


Congratualtions! You have succesfully begun a Manual test session 

Now let's see how RobusTest helps you to test better 

The Manual Test Session, consists of 2 parts:

1. Device screen
2. Test Configuration section

**1. Device screen**

  The device screen is where you perform your testing. You can perform various gestures like tap, swipe, scroll and entering text with the help of mouse/trackpad and keyboard. The buttons at the bottom of the screen are available for use as Android navigation buttons.
 
**2. Test Configuration section**

  The 'Test Configuration' section enables you to test better and easier by providing various add-on features

  Thse features are available across 2 menus:

  a. Device Configuration menu or the Horizontal menu
  b. Vertical menu

  **a. Horizontal menu**

  This menu provides you options to perform various configurations related to the device. Let's have a look at each of them

   **1. Location Simulation**

   This feature allows you to test as if the device is present at a different location than where it actually is. This is done by  simulating the location on the device.

   *Pre-requisites*:

   On the device:

   1. in Developer options:
      * enable 'Mock Locations'
      * set the Nizedha app as your mock location app
   2. in 'Locations', set the 'Location Mode' to 'Device only'


   Once the pre-requisites have been met, you can simulate any location as follows:

   1. Click on the 'Simulate Location' button
   2. Type the name of the location in the 'Search location here' field and select from the drop down. Alternatively, you can manually pin the location of your choice on the map
   3. Once your location has been pinned, click on the 'Set Location' button

   Your device will now behave as if it is situated at the location chosen by you

   **2. Run ADB commands on device**

   Sometimes, as part of your testing, you may want to run a few ADB commands on the device under testing. You can do so by clicking on the 'Run ADB commands on device' button.

   This brings up the Command Line Interfce from where you can execute adb commands directly on the device.
  
   **3. Enable/Disable Navigation menu on device**

   This button enables/disables the Android navigation menu bar at the botton of the device screen.

   **4. Device screen size configuration**

   These buttons enable you to increase the screen size, decrease the screen size and to reset the device screen size to its default setting. This is useful in case you want to look at the app in more detail and want to verify the rendering of various objects on the screen.

  
   **5. Device screen ratio configuration**

   These buttons enable you to increase or decrease the screen ratio. 

   This feature is helpful in scenarios, where the network bandwidth is low and the user would still like to test.

   Increasing the screen ratio decreases the resolution of the device screen and enables the user to continue testing at a lower bandwidth.

   Decreasing the screen ratio enables the user to test on the device screen at higher reslution.


   **6. Device screen rotation**

   You can test the device in Landscape and Portrait modes by rotating the device screen using these buttons

  **b. Vertical menu**

  This menu provides the user information that would aid in the testing process. Let's go through each of them.

   **1. Session Information**

   Clicking on this button provides you all details regarding the manual test session in progress. This includes information about:-

   a. the build - App name, build version, last uploaded, etc
   b. the device - Device name, ADB ID, OS version, etc,
   c. the project - Project name, Last build uploaded, etc

   **2. Focused View**

   Clicking on this button provides you a distraction-free view of the device screen so that you can focus solely on your testing 
   
   **3. Create & View Contacts**

   The 'Contacts' feature is useful in use cases where you need to make calls or send SMSs to specific contacts or phone numbers.

   You can add names to the contact list and specify their contact numbers. Now you can call or send an SMS to these contacts from the device on which you are testing.

   **4. Create & View Notes**
   
   The 'Notes' feature enables you to save tidbits of information that may be of use to you at a later point in time or perhaps information which you may want to share with your project members. The notes you create are available to any project member even after the end of the test session in which the note was created.

   **5. Execute Deeplink**

   This feature enables you to test deeplinks being used in your app. Provide the deeplink and, if required, the package name. Then click on 'Execute'. You can now see the deeplink being executed on the device 

   **6. Copy from device clipboard**

   Sometimes the need arises where you may want to copy data from the device screen, say, - maybe a text in an app page or a URL opened on a browser on the device - to your own computer or laptop.

   In such cases, do the following:

     1. Copy the text you want to retrieve onto the device's clipboard by selecting and long pressing it
     2. Now click on the 'Copy from device clipboard' button in your Manual test session. This data is now available on the clipboard of your computer.
     3. Paste (Ctrl+V) the text anywhere on your computer 

   **7. Device Screenshot**

   This feature enables you to take capture the device screen at any point during testing. You can use this to highlight an issue and share it with your colleagues

   **8. Burst Mode Screenshot**  

    Burst Mode is an advanced mode of taking screenshots. On clicking on this button, for a period of 30 seconds, a screenshot is automatically taken everytime there is a change on the device screen. At the end of this period, you can individually edit and download each screenshot.

    This feature proves very helpful in cases where you would like to capture an entire flow in your testing scenario.

   **9. Device Log**

   You can view the logcat report in a tabular format with options to filter by the log level. You also have the option to download the log in CSV format.

   **10. ANR Log**

   The ANR log or the 'Application Not Responding' report is generated in the event that your app crashes. This log gives you significant information in determining the casue of the crash and is also availble for download.

   **11. Share Test Session**

   If you encounter a situation where you find a specific scenario in your app flows that you would like to cross-check with or show to your colleagues but they aren't nearby, don;t worry, we got your back.

   The 'Share Test Session' featuer enables you to collaborate with colleagues by sharing your device screen with them.

   You can share your device screen in two ways:-
   a. by sending them a link to your device link by clicking on the 'Copy Share-Link to Clipboard' button
   b. by scanning the QR code displayed with a mobile phone

   Once your colleagues click on the link you shared or fininsh scanning the QR code, not only can they see you perform various actions on the device screen, they can also interact with the same device screen through their computer or mobile device. 

   **12. Connecting to ADB remotely**

   This feature was developed with the intention to help your dev team.

   Let's say you find an issue while testing and reach out to a developer for support. If this developer would like to access the ADB on the same device for further investigation, she or he can do so remotely by running the command displayed on your screen.

   They can now work on the device as if it is connected directly to their own computer.

   This feature is also of use to developers who may want to test their code while developing on Android Studio

   **13. Switch to multiplexing**

   You can toggle between multi-device testing and testing in a single device using this button.

   **14. Log bug**    

   Use this feature to directly logs bugs that you encounter while testing into your bug tracking system, without moving away from your test session.

   RobusTest supports API integration with a host of third-party bug tracking software such as JIRA, Bugzilla, etc.

   Once integration with the bug tracking software is enabled from the Admin Console, you can start logging bugs.

   While logging the bug, you can choose the the Assignee, the reporter, the type of issue, a summary of the issue and a detailed description. You also have the option to attach the device logs, the ANR log and screenshots as well.

   At the time of logging of the bug, in addition to the above details, RobusTest will add more information to the ticket pertaining to the app, app version, OS version, device details, project details, etc

   **15. Change Wifi**    

   Sometimes you may want your test device to connect to a diffefrent Wifi network. In such cases, you can use this feature to select the Wifi network of your choice by providing the SSID and Password.

   **16. Install Build**

   This option enables you to select and install a build of your choice from the options provided in the drop down. Only builds previously uploaded to your project will be avilable for selection    

   **17. Network Shaping**

   Network Shaping enables you to select a specific kind of network to test your app on. E.g. 2G, 3G, 4G, etc. You are enabled to create an ATC Network profile which simulates charcteristics of the kind of network you choose. You can knowmore about creating ATC profiles in the Admin Console section.


Once your testing is complete, you can click on 'End Session' button to exit the Manual test session.