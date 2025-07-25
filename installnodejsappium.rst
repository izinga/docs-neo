.. _install-nodejs-appium:

Node.js and Appium
==================


.. role:: bolditalic
  :class: bolditalic

.. role:: underline
  :class: underline


To install Java on your machine, follow the following instructions:

**1. For Mac and Linux machines:**

   1. Download Node.js for Mac OS from `<https://nodejs.org/en/download/>`_ (Make sure you download the *.tar.gz file)

   2. Copy the downloaded file to */robustest/tools folder*

   3. Unzip the file by running the following command

      ``tar -xzf <file name>``

   4. Delete the tar file

   5. Rename the unzipped folder to ‘node’

   6. Add Node.js  to the system path by running the following command:

      ``PATH=$PATH:~/robustest/tools/node/bin``

   7. Run the following command to install appium

      ``npm install -g appium``

      * If Appium is already installed, then first uninstall it by running the command:

        ``npm uninstall -g appium``

      * Then execute the command above to install Appium

   8. In the *setEnvironment.sh* file, in the node section, ensure that the path to the node.js folder is correct

**2. For Windows machines:**

   1. Download Node.js for Windows from: `<https://nodejs.org/en/download/>`_

   2. Select the Windows installer (.msi) file suitable for your system (i.e., 32-bit or 64-bit)

      1. You can check your windows version as follows: 

         1. Searching for ‘*This PC*’ on the Windows search bar. 

         2. Then right-click on ‘*This PC*’ and click on ‘*Properties*’           

         3. On the page that opens up, you can see the type of Windows version you are currently using

   3. While installing, change the Destination folder to *C:\\Users\\<username>\\robustest\\tools\\node*

      1. You will have to create the folder ‘node' inside the robustest\\tools folder
      
   4. Add *C:\Users\<username>\robustest\tools\node* to the *PATH* environment variable as follows:

      1. Under the section ‘*User Variables*’, click and select the environment variable named *PATH* 

      2. Click on the ‘*Edit*’ button

      3. Click on the button ‘*New*’

      4. Enter the path to the node folder, 

         1. i.e., *C:\\Users\\<username>\\robustest\\tools\\node*

         2. Provide proper path above by replacing username

      5. Restart the computer for the path to be updated

      6. Run the following command: ``npm install -g appium``

Node.js and Appium are now installed