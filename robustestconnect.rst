.._robustest_connect:

RobusTest Connect - Run local, test global
===========================================

RobusTest Connect enables you to use the RobusTest platform to test on devices that are connected locally, i.e, on your own computer.

This enables you to test on your device while at the same time track runs and generate reports on RobusTest.

Your device now behaves as a part of the RobusTest Device Lab and is accessible to any member of your project on RobusTest.

To enable RobusTest on your local device, you need to do the following:

1. Download the RobusTest Connect software
2. Install essential software on your local machine
3. Set up RobusTest config files
4. Start the RobusTest Server

**1. Download the RobusTest Connect software**

   1. Download the *robustest* folder from the link that is provided to you 
   2. Within the *robustest* folder create the following folders and sub-folders:

      1. platform_data
      2. tools
      3. tools/android
      4. tools/idevicelocation
      

**2. Install essential software on your local machine**

   A pre-requisite to running RobusTest on your machine is the installation of essential software for testing your Android and iOS devices

   A list of these software is given below. Click on each of them to find instructions for installation:

   1. :ref:`install-java`
   2. :ref:`install-android`
   3. :ref:`install-python`
   4. :ref:`install-python-virtual-env`
   5. :ref:`install-nodejs-appium`

   If you are using a Mac computer and would like to test on iOS devices, you need to additionally install the following software:

   1. :ref:`install-xcode`
   2. :ref:`install-homebrew`
   3. :ref:`install-idevice-location`

**3. Set up RobusTest config files**

   1. Open the config.yaml file inside the robustest folder
   2. In the config.yaml file, provide:

      1. the RobusTest server IP (in IP:port format) or the RobusTest server URL 
      2. the License Key

   3. In the StartRobusTestConnect file provide the following information:

      1. RobusTest URL

         * This will be the RobusTest server IP or the RobusTest server URL

      2. Node Name

         * This is a custom name you provide by which to identify your computer as a Node on RobusTest

      3. License Key

      4. Path to Android ADB (if required)

      5. Path to the NodeJS/bin folder (if required)

      6. Path to virtual environment (if required)

      7. Protocol to be used (http or https)  (if required)


**4. Start the RobusTest Server**

   1. Configure your Android device as mentioned in the following page: `<http://docs.robustest.com/en/latest/addnewdeviceandroid.html#adding-new-devices-android>`_

   2. Configure your iOS device as mentioned in the following page: `<http://docs.robustest.com/en/latest/addnewdeviceios.html#adding-new-devices-ios>`_

   3. Connect your test device to your computer using a USB cable

   4. For Windows computers:

      1. Open *Command Prompt* on your computer and navigate to the '*robustest*'' folder

      2. Run the following command: ``.\StartRobusTestConnect``

   5. For Mac and Linux computers:

      1. Open *Terminal* on your computer and navigate to the '*robustest*'' folder

      2. Run the following command: ``./StartRobusTestConnect.sh``

   6. The server has now started running on your laptop

   7. Login to RobusTest on your browser and go to the Admin Console -> Node section

   8. You should now be able to see your computer as one of the nodes on RobusTest

   9. You will also be able to see and use your local Android/iOS device on RobusTest
