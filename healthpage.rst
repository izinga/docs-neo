Health Page
===========

.. contents:: In this section
   :local:
   :depth: 2

Overview
--------

The Health Page provides real-time monitoring and status information for your RobusTest device cloud infrastructure. It serves as a centralized dashboard to monitor the health, connectivity, and availability of all devices and nodes in your testing environment.

**Key Benefits:**

* **Real-time Monitoring**: Live status updates for all infrastructure components
* **Quick Diagnostics**: Rapidly identify connectivity issues and device problems
* **Resource Planning**: Understand device availability for test scheduling
* **Infrastructure Management**: Monitor node health and performance
* **Troubleshooting**: Identify and resolve connectivity issues quickly

**Access Method:**

Click the Health Page icon in the main RobusTest navigation header to access the monitoring dashboard.

Health Page Sections
--------------------

The Health Page is organized into two main monitoring sections:

1. **Devices** - Monitor device connectivity and status
2. **Nodes** - Monitor server/node health and performance

Device Monitoring
-----------------

The Devices tab (default view) provides comprehensive monitoring of all devices in your RobusTest infrastructure.

**Search and Filter:**

Use the **Search Devices** text box to quickly locate specific devices by name, model, or other attributes.

**Device Status Views:**

The Devices section includes three filtered views:

**All Devices**
Complete overview of your entire device inventory, including both connected and disconnected devices.

**Device Information Displayed:**

* **Device Name**: Device model and operating system version
  
  * Format: Device Model - OS Version
  * Example: "Redmi 6A - v8.1.0"

* **Node Name**: Server/node hosting the device
  
  * Displayed for connected devices only
  * Helps identify device location in your infrastructure

* **Device ID**: Unique identifier for the device
  
  * Used for API calls and device-specific operations
  * Useful for troubleshooting and configuration

* **Status**: Current connectivity state
  
  * **Connected**: Device is online and available for testing
  * **Disconnected**: Device is offline or experiencing connectivity issues

* **Connection Duration**: Time-based status information
  
  * **Connected Devices**: Shows how long the device has been online
  * **Disconnected Devices**: Shows how long the device has been offline

**Connected Devices**
Filtered view showing only devices currently online and available for testing.

* **Live Count**: Total number of connected devices displayed in tab header
* **Availability Status**: Real-time device availability for test scheduling
* **Resource Planning**: Understand current testing capacity

**Disconnected Devices**
Filtered view showing only devices that are currently offline.

* **Offline Count**: Total number of disconnected devices displayed in tab header
* **Issue Identification**: Quickly identify devices needing attention
* **Maintenance Planning**: Schedule device maintenance during downtime

**Device Status Indicators:**

* **Green Status**: Device is connected and available
* **Red Status**: Device is disconnected or experiencing issues
* **Yellow Status**: Device is connected but may be experiencing performance issues

**2. Nodes**

The '*Nodes*' tab provides you:

* a list of nodes (i.e., RobusTest servers) that constitute the RobusTest device cloud; 
* the connection/disconnection status of each individual node 

You can search for details pertaining to a specific node using the '*Search Nodes*' text box.

On this tab you see the following 3 sub-tabs:

  **a. All Nodes**

  This tab provides the connection status of all nodes on the RobusTest platform. This list includes both - connected and discnnected nodes.

  The following infomation is provided for each node:

  1. *Node Name*: The name of each node is displayed in this column. If no name has been provided to the node, then the IP of that node server is displayed.

  2. *Node IP*: The IP of each node or server is displayed here. The node IP is not displayed for disconnected nodes.

  3. *Status*: This column displays the values '*Connected*' or '*Disconnected*' depending on the status of the node.

  4. *Connected/Disconnected Since*: For nodes in '*Connected*' status, this column displays the time period for which the node has remained connected.

  For nodes in '*Disconnected*' status, this column displays the time period for which the node has remained disconnected.

  5. *Devices*: For each node, this column displayed the count of connected and disconnected devices on that node.

  **b. Connected Nodes**

  This tab acts as a filter on the '*All Nodes*' tab to display node related information only for those devices in '*Connected*' status. The total count of connected nodes is displayed next to the tab header.

  **c. Disconnected Nodes**  

  This tab acts as a filter on the '*All Nodes*' tab to display node related information only for those nodes in 'Disconnected' status. The total count of disconnected nodes is displayed next to the tab header.
