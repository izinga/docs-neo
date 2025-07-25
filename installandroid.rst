.. _install-android:

Android
=======

.. role:: bolditalic
  :class: bolditalic

.. role:: underline
  :class: underline


To install Android on your machine, follow the following instructions:

.. raw:: html

   <div class="config-generator-placeholder" data-type="installation-checklist"></div>

**1.** Go to the following link `<https://developer.android.com/studio/#downloads>`_
   
**2.** Scroll down to the '*Command Line Tools*' section
   
**3.** Depending on whether you are using a Mac, a Linux or a Windows machine, click on the appropriate link and download the zip file.
   
**4.** Place this zip file inside the folder: *~/robustest/tools/android/*  
   
**5.** Unzip the file
   
**6.** Rename the unzipped folder to cmdline-tools
   
**7.** Within the cmdline-tools folder, rename the folder ‘tools’ to ‘latest’
   
**8.** Open the command line
   1. In a Mac or a Linux machine, open Terminal and go to the folder *~/robustest/tools/android/cmdline-tools/latest/bin*
   2. In a Windows machine, start an :ref:`elevated-powershell`
   
**9.** Install Android as follows: 
   a. In Windows, do the following:

      1. Run the following command	
           ``.\sdkmanager --update``
      2. Run the command
           ``.\sdkmanager --list``
      3. From the output of the command above, select the latest version of build-tools. It will look something like this: "build-tools;30.0.2"
      4. Copy paste this string and run the command as seen below
           ``.\sdkmanager "build-tools;30.0.2"``	
      5. Run the command
           ``.\sdkmanager "platform-tools"``
      6. Once installed, Android SDK is successfully installed

   b. In Mac or Linux machines, run the following commands

      1. Run the following command
           ``./sdkmanager --update``
      2. Run the command
           ``./sdkmanager --list``
      3. From the output of the command above, select the latest version of build-tools. It will look something like "build-tools;27.0.3"
      4. Copy paste this string and run the command as seen below
           ``./sdkmanager "build-tools;27.0.3"``	
      5. Run the command
           ``./sdkmanager "platform-tools"``
      6. Once installed, android sdk is successfully installed
  
**10.** For Windows machines, create the environment variables *ANDROID_HOME* and *ANDROID_SDK_ROOT*

   1. In the Windows Search bar, search using the string ‘*env*’

   2. Click on the option ‘*Edit the system environment variables*’

   3. In the window that opens up, click on the button ‘*Environment Variables*’

   4. Under the section ‘*User Variables*’, click on the button ‘*New*’

   5. Enter the value *ANDROID_HOME* in the ‘*Variable name*’ field

   6. Enter the path to the robustest\\tools\\android folder in the ‘*Variable value*’ field. This is usually of the form C:\\\\Users\\<username>\\robustest\\tools\\android

   7. Under the section ‘*User Variables*’, click on the button ‘*New*’

   8. Enter *ANDROID_SDK_ROOT* in the ‘*Variable name*’ field

   9. Enter the path to the robustest\tools\android folder in the ‘*Variable value*’ field. This is usually of the form C:\\\\Users\\<username>\\robustest\\tools\\android

   10. Under the section ‘*User Variables*’, click and select the environment variable named *PATH* 

   11. Click on the ‘*Edit*’ button

   12. Click on the button ‘*New*’

   13. Enter the value *%ANDROID_HOME%*

   14. Click on the button ‘*New*’

   15. Enter the value *%ANDROID_HOME%\platform-tools*

   16. Click on OK

   17. Click on OK

   18. Close the PowerShell session and start a new :ref:`elevated-powershell` 