.. _device-config-menu-manual:

Device Configuration Menu
=========================


.. role:: bolditalic
  :class: bolditalic

.. role:: underline
  :class: underline

This is the horizontal menu that you find in your test session page. It provides you options to perform various configurations related to the device. Let's have a look at each of them.

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

   This brings up the Command Line Interface from where you can execute adb commands directly on the device.
  
   **3. Enable/Disable Navigation menu on device**

   This button enables/disables the Android navigation menu bar at the botton of the device screen.

   **4. Device screen size configuration**

   These buttons enable you to increase the screen size, decrease the screen size and to reset the device screen size to its default setting. This is useful in case you want to look at the app in more detail and want to verify the rendering of various objects on the screen.

  
   **5. Device screen ratio configuration**

   These buttons enable you to increase or decrease the screen ratio. 

   This feature is helpful in scenarios, where the network bandwidth is low and the user would still like to test.

   Increasing the screen ratio decreases the resolution of the device screen and enables the user to continue testing at a lower bandwidth.

   Decreasing the screen ratio enables the user to test on the device screen at higher resolution.


   **6. Device screen rotation**

   You can test the device in Landscape and Portrait modes by rotating the device screen using these buttons