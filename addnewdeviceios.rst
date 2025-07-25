.. _adding-new-devices-ios:

Adding new devices to RobusTest - iOS
=====================================


**Setting up your iOS device**

  1. On connecting your iOS device to the RobusTest server, you will see a pop-up asking you if you would like to trust the server. Click on the '*Trust*' button.

  2. On the iOS device, go to *Settings* -> *Safari* -> *Advanced* and enable the option named '*Web Inspector*'

  3. In *Settings* -> *General* -> *Display & Brightness*, set the '*Auto-Lock*' option to '*Never*'.

  4. Ensure that the device is added to your developer certificate.


Interaction with the iOS device screen in a Manual test session sometimes get blocked on account of certain notification pop-ups that appear on the iOS device. 

In order to avoid the same, you need to disable the following pop-ups:


**Disable iOS Software Update Notification**

  1. Go to *Settings* -> *iTunes & App Store*
  2. Click on the toggle button to disable *automatic app updates*
  3. Click on the toggle button to disable *automatic downloads*  

**Delete existing software downloads**

  Sometimes, an update has already been downloaded onto your iOS device. This results in the software update notification coming up even if you have disabled the *Auto-Update* option. To prevent such pop-ups, do the following:

  1. On your iOS device, go to *Settings* -> *General*
  2. Tap on *iPhone Storage* (for iPhones) or *iPad Storage* (for iPads), depending on the type of iOS device that you are using
  3. On scrolling down, you will see a list of apps and the amount of storage that each of them are using. In this list, look for the latest iOS update. It would be in the format 'iOS 13.1.1' or 'iOS 14 Beta 2', etc.
  4. Tap on the update.
  5. Now click on the *"Delete Update"* option and confirm. The downloaded update is now deleted.

**Disable iMessage Notification**

  1. On your iOS device, go to *Settings* -> *Messages*
  2. Disable *iMessage* by clicking on the toggle 

**Disable FaceTime Notification**

  1. On your iOS device, go to *Settings* -> *FaceTime*
  2. Disable *Facetime* by clicking on the toggle