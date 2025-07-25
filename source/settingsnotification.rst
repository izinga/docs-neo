.. _settings-notification:

Notification Settings
=====================

In this section, you can decide if a notification email should be sent out for the following events:

* *Device Connections* 

  * A notification email is sent out when a device is connected to the RobusTest device cloud

* *Device Disconnections* 

  * A notification email is sent out when a device that is connected to the RobusTest device cloud gets disconnected. 
  * A device may get disconnected for one of many reasons such as:

    * the device going offline
    * the device getting unauthorised
    * the device goes into a hanging state
    * the device having been physically removed from the RobusTest device cloud
  
* *Node Connections*

  * A notification email is sent out when a new node is connected to the RobusTest device cloud. 
  * A node is a server machine on which the RobusTest platform is installed and run. 

* *Node Disconnections*

  * A notification email is sent out when a node server that is connected to the RobusTest device cloud gets disconnected. 
  * A node server may get disconnected for one of many reasons such as:

    * issues with the LAN/network
    * power issues in the server room
    * software/hardware issue with the server machine
    * disabling of the Remote Login/Remote Management option on the machine
    * the node having been physically removed from the RobusTest device cloud

You can specify a time delay (in seconds) post the occurrence of an event, after which, the notification email should go out.

E.g. if the '*Device Notification Delay*' has been set at 300 seconds, then, on the event of a device getting disconnected, a notification email is sent out after a period of 300 seconds. 

*Note*: The notification email is sent **only** if the device remains discoonected through out the delay period

Device connection & disconnection emails will be sent to the email ids mentioned in the *Contacts* section of the device

Node connection & disconnection emails will be sent to the email ids mentioned in the *Contacts* section of the node
