.. _install-xcode:

Xcode
=====

.. role:: bolditalic
  :class: bolditalic

.. role:: underline
  :class: underline


To install XCode on your machine, follow the following instructions:

1. Install XCode from Apple App Store

2. Run/Open Xcode once to ensure that Command Line Tools have been installed

3. If command line tools have not been installed, then, after completing XCode installation, open command-line terminal

   1. Run the following command in the terminal

	     ``xcode-select  --install``

   2. In the pop-up screen, the system will ask for confirmation of installation of Command Line Tools

   3. Confirm by clicking on ‘*Install*’

4. Signing in to XCode

   1. Open Xcode

   2. Go to Xcode -> Preferences -> Accounts

   3. Click on the ‘+’ icon to add an account

   4. Sign in with your Apple ID

   5. Click on ‘Download Manual Profiles’

   6. Click on ‘Manage Certificates’

   7. Click on the drop down at the bottom-left of the window

   8. Select the option ‘Apple Development’

   9. A new active  iOS Development Certificate is seen on the list of certificates. Click on ‘Done’.

   10. Go to Xcode -> Preferences -> Locations

   11. Click on the ‘Command Line Tools’ dropdown and select your version of Xcode