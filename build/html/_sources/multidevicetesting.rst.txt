.. _multi-device-testing:

Multi-device testing
====================

.. role:: bolditalic
  :class: bolditalic

.. role:: underline
  :class: underline

The ability to perform manual testing on multiple devices in parallel is one of the defining features of the RobusTest platform.

We refer to this ability as **Multiplexing**


**Advantages of Multiplexing**

Multiplexing provides you an advantage in the following scenarios:

1. You can perform manual testing on multiple devices of different screen sizes and running different OS versions and view all device screens simultaneously.

2. It is useful in scenarios where testing involves interaction between two devices.

   * E.g. 1: Making a phone call from one device to another
   * E.g. 2: Sending an SMS from one device to another
   * E.g. 3; Testing the chat feature in an app using two or more devices

3. The 'Replication' feature (described below) enables you to execute the same action on multiple devices by performing the action on one device

**How to start a Multiplexing session**

There are two ways to begin a Manual multiplexing test session:

  **Method 1:** *Starting a multi-device test session directly*

  1. Click on the 'Manual' icon on the Project Dashboard.

  2. Select the devices you wish to test on by clicking on the 'Select' button under those devices.

  3. Once you have selected the devices, click on the 'Play' button on the top right corner. The multiplexing session is now in progress.

  **Method 2:** *Switching to a multi-device test session from a single device manual test session*

  1. Click on the 'Manual' icon on the Project Dashboard.

  2. Select one device you wish to test on by clicking on the 'Select' button under those devices.

  3. Once you have selected the device, click on the 'Play' button on the top right corner. The single device manual test session is now in progress.  

  4. Click on the 'Switch to Multiplexing' button on the horizontal menu. You are now in a multiplexing test session and can add more devices to this session for testing.


**Understanding the Multiplexing test session**

Now that you have started a multiplexing session, let's see what operations and features are available to you to aid you in your testing.

There are two menus you need to familiarize yourself with in a multiplexing test session:

1. The Vertical menu along the left border of the multiplexing test session
2. The Horizontal menu above each device screen

**1. Vertical menu on the left of the test session**

The following buttons are visible on this menu:

  **1.** **Enable Replication** - Clicking on this button enables you to replicate an action that you perform on one device in the multiplexing test session on all other devices in the same test session.

     This feature works in cases where all devices being used in the multiplexing test session are of comparable screen size and resolution.

     It helps you to considerably reduce the time spent in testing on multiple devices.

  **2.** **Add more devices** - You can add more devices to a multiplexing session by clicking on this button. 

     Clicking on this button brings up the device selection dialog. Click on the '*Select*' button for the device that you wish to add to the multiplexing test session and then click on the '*Play*' button. The new device screens will now be visible in the multiplexing test session.

  **3.** **Take Screenshot** - On clicking on this button, a screenshot of all device screens in the test session is taken and downloaded to your computer.

  **4.** **End Test Session** - Clicking on this button ends the multiplexing test session in its entirety and all devices that are used in the test session are freed and made available for new test sessions.

**2. Horizontal menu above each device screen**

This menu is visible above each device screen in the test session and is specific to that device. The following buttons are visible on this menu:

  **1.** **Switch to Manual mode** - Clicking on this button, opens that specific device in a single-device manual test session. You can always go back to your multiplexing test session by clicking on the '*Switch to Mutliplexing*' button in the manual test session.

  **2.** **Download device logcat** - As the name suggests, clicking on this button downloads the logcat report for that device.

  **3.** **View device logcat** - Clicking on this button displays the logcat for that device on a new browser tab.

  **4.** **End Test Session** - You can remove a specific device from a multiplexing test session by clicking on 'End Test Session' button on the horizontal menu bar on that device.


