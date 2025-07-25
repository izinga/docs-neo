Admin Console
=============

.. contents:: In this section
   :local:
   :depth: 2

Overview
--------

The Admin Console is a powerful administrative interface available to users with Admin privileges on the RobusTest platform. It provides comprehensive tools for platform management, user oversight, and usage monitoring.

**Access Requirements:**

* Admin privileges on the RobusTest platform
* Access through the dedicated Admin Console icon in the platform header

.. image:: _static/adminconsole.png
   :align: center
   :alt: Admin Console access icon

**Core Admin Console Functions:**

* **Administrative Management**: Perform essential platform administration tasks
* **Usage Monitoring**: Track and analyze platform usage patterns
* **User Management**: Oversee user accounts and permissions
* **Resource Management**: Monitor device groups and project resources
* **Activity Tracking**: Comprehensive audit trail of platform activities

Admin Console Sections
----------------------

**1. Activity Monitoring**

The Activity section provides comprehensive tracking of device group-related activities:

**Device Group Activities Tracked:**

* **Group Creation**: Monitor when new device groups are created
* **Group Modifications**: Track changes to existing device groups, including:
  
  * Addition/removal of devices within groups
  * Addition/removal of projects associated with groups
  * Configuration changes and updates

* **Group Deletion**: Log when device groups are removed from the platform

**Benefits:**

* **Audit Trail**: Complete history of device group changes
* **Change Tracking**: Understand who made what changes and when
* **Compliance**: Maintain records for administrative compliance

**2. Projects**

The Projects section provides comprehensive oversight and management of all projects on the RobusTest platform:

**Project Overview:**

The main Projects page displays a comprehensive list of all projects with the following information:

* **Project List**: Tabular view of all projects with key project details
* **Project Status**: Active/Inactive status indicators
* **Project Type**: Project type classification (Android App, iOS App, Web App, Device Only)
* **Creation Date**: When each project was created
* **Last Activity**: Most recent activity timestamp
* **Team Size**: Number of team members per project
* **Resource Usage**: Current resource allocation and usage metrics

**Project Actions:**

From the main Projects list, administrators can perform the following actions:

* **Create New Project**: Launch project creation wizard
* **Search & Filter**: Find specific projects using search and filtering options
* **Bulk Operations**: Perform operations on multiple projects simultaneously
* **Export Data**: Export project information for reporting and analysis
* **Archive Projects**: Archive inactive or completed projects

**Detailed Project Information:**

When you select a specific project, the following comprehensive tabs become available:

**Project Details Tab Navigation:**

When a project is selected from the main Projects list, the following comprehensive tabs become available for detailed project management:

* **SESSIONS** - Session management and monitoring (see detailed documentation: :doc:`adminconsole_projects_sessions`)
* **BUILDS** - Build management and history
* **GROUPS** - Device group assignments
* **MEMBERS** - Team member and permission management
* **DEVICES** - Project-specific device allocations
* **SETTINGS** - Project configuration and settings

**a. Sessions Tab**

Monitor comprehensive test session activity for the selected project:

* **Session Overview**: Summary of all test sessions with filtering and search capabilities
* **Session Details**: Detailed information for each session including:
  
  * **Session Type**: Manual, Automation, Run, or Hub testing sessions
  * **Device Information**: Complete device details used for each session
  * **User Details**: User who initiated the session with role information
  * **Timeline**: Detailed start and end times with duration calculations
  * **Status**: Session completion status and health indicators
  * **Termination Reason**: Comprehensive information about session endings
  * **Performance Metrics**: Session-level performance data and insights

* **Session Analytics**: Advanced analytics including session patterns, success rates, and trends
* **Export Options**: Export session data for external analysis and reporting

For comprehensive details on the Sessions tab functionality, see: :doc:`adminconsole_projects_sessions`

**b. Usage Tab**

Comprehensive testing activity analysis and resource utilization:

* **Usage Dashboard**: Visual dashboard showing project usage patterns
* **Session Type Breakdown**: Detailed duration analysis by test type:
  
  * Manual testing time and patterns
  * Automation testing execution time
  * Test run duration and frequency
  * Hub testing utilization

* **Resource Utilization**: Detailed resource usage metrics:
  
  * Device usage patterns and allocation
  * Peak usage times and capacity planning
  * Cost analysis and budget tracking
  * Efficiency metrics and optimization recommendations

* **Historical Trends**: Long-term usage patterns and trend analysis
* **Comparative Analysis**: Usage comparison with other projects and benchmarks

**c. Builds Tab**

Comprehensive application build management and tracking:

* **Build Repository**: Complete inventory of all builds with detailed metadata
* **Build Information**: Comprehensive build details including:
  
  * Version information and build numbers
  * Upload dates and user information
  * Build size and technical specifications
  * Testing status and coverage metrics
  * Quality metrics and test results

* **Build Management**: Advanced build management capabilities:
  
  * Build activation/deactivation
  * Build comparison and diff analysis
  * Build promotion workflows
  * Automated testing integration
  * Build retention policies

* **Release Management**: Integration with release management processes

**d. Members Tab**

Advanced team and permission management:

* **Team Overview**: Complete team roster with role assignments
* **Member Management**: Comprehensive member administration:
  
  * **Add/Remove Members**: Streamlined member onboarding and offboarding
  * **Role Assignment**: Flexible role-based access control
  * **Permission Matrix**: Detailed permission management and audit
  * **Team Hierarchy**: Support for team structures and reporting relationships

* **Access Control**: Granular access control features:
  
  * **Project-Level Permissions**: Control access to project features and data
  * **Resource Permissions**: Manage access to devices and testing resources
  * **Admin Rights**: Grant or revoke administrative privileges
  * **Audit Trail**: Complete audit trail of permission changes

* **Team Analytics**: Team performance metrics and collaboration insights

**e. Devices Tab**

Dedicated device management for the project:

* **Reserved Devices**: Complete list of devices specifically allocated to the project
* **Device Allocation**: Manage device reservations and assignments
* **Usage Patterns**: Device-specific usage analytics and optimization
* **Maintenance Schedule**: Coordinate device maintenance with project timelines
* **Performance Metrics**: Device performance monitoring and health status

**f. Settings Tab**

Comprehensive project configuration and management:

* **Project Status Management**:
  
  * **Activate/Deactivate Project**: Control project operational status
  * **Archive Project**: Archive completed or inactive projects
  * **Delete Project**: Permanent project removal with safeguards

* **Project Configuration**:
  
  * **Universal Project Settings**: Configure universal project access for new users
  * **Resource Limits**: Set project-specific resource allocation limits
  * **Notification Settings**: Configure project-specific notifications
  * **Integration Settings**: Manage third-party integrations and APIs

* **Advanced Settings**:
  
  * **Security Configuration**: Project-level security settings and policies
  * **Backup Settings**: Configure project data backup and retention
  * **Compliance Settings**: Ensure compliance with organizational policies
  * **Custom Fields**: Configure project-specific custom fields and metadata

**g. Reports Tab**

Comprehensive project reporting and analytics:

* **Executive Dashboard**: High-level project health and performance metrics
* **Quality Reports**: Test quality and coverage analysis
* **Resource Reports**: Resource utilization and cost analysis
* **Team Performance**: Team productivity and efficiency metrics
* **Custom Reports**: Configurable custom reports and dashboards

**3. Users**

This section provides details of all active and inactive users on RobusTest

On selecting a user by clicking on their name, the following additional information pertaining to that user are available:

a. *Sessions* - Details of the last 100 test sessions that were started by the user are visible. 

b. *Usage* - This tab provides the breakup of the total duration spent on each type of test session by the user

c. *Projects* - This section provides a list of all projects that the user is a part of

d. *Settings* - This section enables you to:-

  * Activate/Deactivate a user on RobusTest
  * Grant/Revoke admin privileges for a user on RobusTest

**4. Device Models**

This section provides details of all active and inactive mobile device *models* being used on RobusTest.

A device model is a combination of the Model name (e.g. Mi A2, Samsung Galaxy S7, iPhone 7, etc.) and the Android/iOS version 

On selecting a model name, the following additional information pertaining to that device model are available:

a. *Devices* - This provides a list of all devices on RobusTest that have the same model and OS version running on them

b. *Settings* - Under this section, you can: 

  * provide various information pertaining to the model such as Model name, Model brand, Model manufacturer, CPU, RAM, Screen Ratio, Screen Size, Resolution, etc.

  * enable the device navigation bar/menu to be displayed in the device screen. This is menu where you would have buttons such as Back, Home, History, etc.

  * make available for automation all devices belonging to the model by enabling the 'Support Automation' checkbox. If this check box is not selected, all devices that fall under the model category will only be available for Manual testing

**5. Devices**

This section provides details of all devices available on RobusTest. You can view a list of devices that are connected, disconnected or in a busy (in-use) state.

Android and iOS devices can be visually differentiated by the logo displayed on the left of the device name. The logo also helps determine the state of the device by the colour in which the logo is displayed

* Green colour - the device is connected and available for use
* Red colour - the device is in use
* Grey colour - the device is disconnected
* Blue colour - the device is in the state of being added to RobusTest. This is seen under the following circumstances:
  * when a device is being added for the first time
  * when an existing device is being restarted
  * when the RobusTest server to which the device is connected to is being restarted

On selecting a device by clicking on its name, the following information are visible:

* device name
* OS version running on the device
* device model
* device ID
* ADB ID
* device IMEI number
* Node server name and IP to which the device is connected
* date and time when device was last used

You can also perform the following actions using the buttons displayed on the top right:

* *Free device* - This button is visible only if the device is in use in a test session. Clicking on it, releases the device from its current test session and makes it available for a new test session

* *Restart device* - This button can be used to restart a connected device remotely

* *Flash Screen* - On clicking on this button, a red screen appears on the device for a few seconds and then goes away. This button can be used for identifying a specific device when there are multiple devices of the same make and model. It can help with proper labelling of devices for later identification

On selecting a device, a few more tabs become visble. These tabs provide the following additional information pertaining to that device:

a. *Sessions* - Details of the last 100 test sessions that were started on the device are visible. 

b. *Usage* - This tab provides the breakup of the total duration of each type of test session in which the device was used

c. *Apps* - This tab provides a list of apps that have been pre-installed on the device

d. *History* - This tab provides the history of the connection and disconnection events of the device with the RobusTest server along with the date & time of these events as well as the reason for the same

e. *Contact* - Any contact provided here will receive notification emails in the event of the device getting disconnected from the RobusTest server. To add a contact to a device, first create a contact in the 'Contacts' section of the Admin Consle. Once the contact has been added in the 'Contacts' section, you can add the same to the device from the current tab

f. *Shell* - You can run adb commands on the device from here

g. *Settings* - This section enables you to:
  
  * provide a name for the device
  * opt in or out of receiving a device disconnection email
  * provide a mobile number associated with the device
  * add device tags to identify the device
  * identify the device groups to which the device belongs, if any
  * identify the contacts associated with the device

**6. Emulators**

This section provides management and configuration capabilities for Android and iOS emulators/simulators in your RobusTest environment.

**Emulator Management Features:**

* **Emulator Creation**: Create new Android emulators and iOS simulators
* **Configuration Management**: Configure emulator specifications including:
  
  * Android API levels and system images
  * Device profiles (screen size, resolution, RAM)
  * Hardware acceleration settings
  * Network configuration

* **Emulator Status Monitoring**: Track emulator availability and performance
* **Resource Allocation**: Manage CPU and memory allocation for emulators
* **Snapshot Management**: Create and restore emulator snapshots for consistent testing states

**Benefits of Emulator Integration:**

* **Cost-Effective Testing**: Reduce dependency on physical devices for basic testing
* **Rapid Provisioning**: Quickly spin up test environments without hardware constraints
* **Consistent Environments**: Ensure repeatable test conditions across test runs
* **Parallel Execution**: Run multiple emulator instances simultaneously

**7. Browsers**

This section manages web browser configurations for web application testing within the RobusTest platform.

**Browser Management Features:**

* **Browser Inventory**: Manage available browser versions including:
  
  * Chrome (various versions)
  * Firefox (various versions)
  * Safari
  * Edge
  * Mobile browsers

* **Browser Configuration**: Configure browser-specific settings:
  
  * User agent strings
  * Screen resolutions and viewport sizes
  * Browser extensions and plugins
  * Security and privacy settings

* **Version Management**: Maintain multiple browser versions for compatibility testing
* **Mobile Browser Support**: Configure mobile browsers for responsive web testing

**Use Cases:**

* **Cross-Browser Testing**: Ensure web applications work across different browsers
* **Responsive Testing**: Validate mobile web application behavior
* **Selenium Integration**: Browser configurations for Selenium-based automation
* **Performance Testing**: Browser-specific performance monitoring

**8. Device Groups**

A device group is a means by which you can restrict the usage of specific devices to specific projects.

In other words, it is a binding between one or more devices and one or more projects.

Devices that are part of a group can only be accessed by members of the projects that are part of the same group. These devices will **NOT** be available for members of other projects which are not part of the group.

This functionality comes in handy when there are multiple teams accessing the same device cloud and each team has their own set of devices on the cloud. Grouping your devices helps you ensure that the devices that you need for testing your projects are always available to your team.

**9. Session**

This section displays details of the last 100 test sessions created by all users on RobusTest. It also displays the count of test sessions that are in progress at that moment of time.

**10. Device Nodes**

This section provides details of all device nodes available on RobusTest. 

Each device node is basically a RobusTest server to which physical devices are connected. The RobusTest device cloud is made up of a number of interconnected device nodes or servers with devices attached to one or more of them.

**11. Test Nodes**

This section manages the computational nodes dedicated to running automated tests and processing test execution workloads.

**Test Node Management Features:**

* **Node Registration**: Register and configure new test nodes for distributed testing
* **Capacity Management**: Monitor and configure test execution capacity per node
* **Load Balancing**: Distribute test workloads across available test nodes
* **Resource Monitoring**: Track CPU, memory, and storage utilization on test nodes

**Test Node Configuration:**

* **Execution Environments**: Configure supported test frameworks per node
* **Parallel Execution Limits**: Set maximum concurrent test executions per node
* **Node Specifications**: Define hardware capabilities and limitations
* **Network Configuration**: Configure network settings and connectivity

**Benefits:**

* **Scalable Testing**: Distribute test execution across multiple nodes for better performance
* **Resource Optimization**: Efficiently utilize available computational resources
* **High Availability**: Ensure test execution continuity with multiple test nodes
* **Performance Isolation**: Isolate different types of tests on dedicated nodes

On selecting a node by clicking on its name, the following information are visible:

* node name
* node IP
* date & time the node was last updated
* date & time till which the node will function (this is usually in sync with the RobusTest license period)

You can also perform the following actions using the buttons displayed on the top right:

* *Flash Screen* - On clicking on this button, a red screen appears for a few seconds on each device conected to the server/node and then goes away. This button can be used for identifying all Android devices connected to that node.

* *Create Snapshot* - Clicking on this button captures details of all devices that are successfully connected to the server at that point in time. These details are now visible on the 'Snapshot' tab for each node. This can be used for comparison at a later point of time to identify the devices that are no longer seen connected to the server.

* *Delete Node* - This button is to delete a node entry under the Node section for a node that is no longer valid.

On selecting a node, a few more tabs become visble. These tabs provide the following additional information pertaining to that node:

a. *Devices* - This provides a list and details of all devices that are connected to the RobusTest node

b. *History* - This tab provides the history of the connection and disconnection events of the RobusTest server along with the date & time of these events as well as the reason for the same.

c. *Snapshot* - Clicking on the 'Create Snapshot' button captures details of all devices that are successfully connected to the server at that point in time. This can be used for comparison at a later point of time to identify the devices that are no longer seen connected to the server

d. *Contact* - Any contact provided here will receive notification emails in the event of the node getting disconnected (i.e, the machine is either switched off or is unreachable). To add a contact to a node, first create a contact in the 'Contacts' section of the Admin Consle. Once the contact has been added in the 'Contacts' section, you can add the same to the node from the current tab.

e. *Settings* - This section enables you to update the following information about the node:
  
  * Node Name
  * Node Location
  * Node Mac Address
  * Node Machine Serial

**12. Default Run Settings**

This section allows administrators to configure default run settings that will be applied to new test sessions and automation runs across the platform.

**Default Run Settings Configuration:**

* **Session Timeouts**: Set default timeout values for manual and automation sessions
* **Recording Settings**: Configure default video and screenshot capture settings
* **Performance Monitoring**: Enable default performance data collection
* **Network Configuration**: Set default network conditions and shaping
* **Device Interaction**: Configure default device interaction settings

**Benefits:**

* **Consistency**: Ensure uniform test execution settings across all projects
* **Efficiency**: Reduce configuration time for new test sessions
* **Compliance**: Enforce organizational testing standards and policies
* **Quality Assurance**: Maintain consistent data collection for analysis

**13. Maintenance**

This section provides tools for performing system maintenance operations and monitoring platform health.

**Maintenance Operations:**

* **System Health Monitoring**: Monitor overall platform performance and resource utilization
* **Database Maintenance**: Perform database optimization and cleanup operations
* **Log Management**: Configure log retention policies and cleanup procedures
* **Cache Management**: Clear system caches and optimize performance
* **Backup Operations**: Schedule and monitor system backups

**Scheduled Maintenance:**

* **Maintenance Windows**: Schedule planned maintenance activities
* **User Notifications**: Notify users of upcoming maintenance activities
* **Service Status**: Monitor service availability during maintenance
* **Rollback Procedures**: Configure rollback plans for maintenance operations

**14. Integrations**

RobusTest enables you to integrate with any API enabled CI tool like JIRA, Asana, etc.

In order to integrate with such tools, you first need to create a configuration in the 'Integrations' section of the Admin Console.

To integrate with a tool: 

a. click on the 'Create New Integration' button
b. select a tool from the drop down provided. A list of fields that enable integration with the tool are now displayed
c. enter relevant values for the fields displayed and click on the 'Create Configuration' button

E.g., let's say you need to integrate with JIRA to log bugs encountered while testing your app. You need to do the following:
* select JIRA from the tool drop down list
* provide information such as the JIRA Server URL, JIRA username, JIRA API Token, etc.
* create the configuration setting
* now, on the Project Dashboard go to the 'Settings' tab and select the name of the configuration you created on the 'Bug Tracker' dropdown

*In case you do not find the CI tool of your choice on the tool drop down list, please reach out to the RobusTest support team by emailing us at support@robustest.com and our team shall get back to you for further assistance with integration*


**15. DB Maintenance**

This section provides database administration tools for maintaining optimal database performance and data integrity.

**Database Maintenance Features:**

* **Database Optimization**: Run database optimization procedures to improve query performance
* **Index Management**: Create, modify, and optimize database indexes
* **Data Cleanup**: Remove obsolete test data and logs based on retention policies
* **Performance Monitoring**: Monitor database performance metrics and identify bottlenecks
* **Backup Management**: Schedule and monitor database backup operations

**Database Health Monitoring:**

* **Query Performance**: Analyze slow-running queries and optimization opportunities
* **Storage Utilization**: Monitor database storage usage and growth trends
* **Connection Monitoring**: Track database connection pools and usage patterns
* **Data Integrity Checks**: Perform regular data consistency and integrity validations

**16. Storage**

This section manages storage resources and policies across the RobusTest platform.

**Storage Management Features:**

* **Storage Allocation**: Monitor and configure storage allocation for different data types
* **File Management**: Manage test artifacts, videos, screenshots, and logs
* **Retention Policies**: Configure data retention policies for automatic cleanup
* **Storage Optimization**: Compress and archive older test data to optimize storage usage
* **Backup Storage**: Manage backup storage locations and replication policies

**Storage Categories:**

* **Test Artifacts**: Screenshots, videos, logs, and test reports
* **Application Builds**: APK, IPA, and other application files
* **System Data**: Configuration files, user data, and platform metadata
* **Backup Data**: System backups and archived test data

**17. Deployment Info**

This section provides information about the current RobusTest deployment configuration and environment details.

**Deployment Information Displayed:**

* **Platform Version**: Current RobusTest platform version and build information
* **Environment Configuration**: Deployment environment details (production, staging, etc.)
* **Service Status**: Status of various RobusTest services and components
* **License Information**: License details, expiration dates, and usage limits
* **System Resources**: Hardware specifications and resource allocation

**Deployment Monitoring:**

* **Service Health**: Monitor the health status of all platform services
* **Resource Utilization**: Track CPU, memory, and storage usage across the deployment
* **Network Configuration**: View network settings and connectivity information
* **Security Configuration**: Review security settings and compliance status

**18. Administration**

This section provides high-level administrative controls and platform-wide configuration options.

**Administrative Functions:**

* **Platform Configuration**: Configure global platform settings and behaviors
* **Security Policies**: Manage authentication, authorization, and security policies
* **User Management**: Bulk user operations and account management tools
* **System Monitoring**: High-level system monitoring and alerting configuration
* **Audit Logging**: Configure audit trails and compliance logging

**Administrative Controls:**

* **Feature Toggles**: Enable or disable platform features across the deployment
* **Resource Limits**: Set platform-wide resource limits and quotas
* **Notification Settings**: Configure system-wide notification policies
* **Compliance Settings**: Configure compliance and regulatory requirements
* **Emergency Controls**: Emergency shutdown and maintenance procedures

**19. iOS Models**

This section provides specialized management for iOS device models and their specific configurations.

**iOS Model Management:**

* **iOS Device Catalog**: Comprehensive catalog of supported iOS devices
* **iOS Version Support**: Track iOS version compatibility across device models
* **Provisioning Profiles**: Manage iOS provisioning profiles and certificates
* **Xcode Integration**: Configure Xcode and development tool integrations
* **iOS-Specific Settings**: Configure iOS-specific testing parameters

**iOS Model Configuration:**

* **Device Specifications**: Configure iOS device hardware specifications
* **Simulator Integration**: Manage iOS Simulator configurations and versions
* **TestFlight Integration**: Configure TestFlight beta testing capabilities
* **App Store Connect**: Integration with App Store Connect for build management
* **iOS Automation Support**: Configure iOS automation frameworks and capabilities

**Benefits:**

* **iOS-Specific Optimization**: Optimized configurations for iOS testing workflows
* **Development Integration**: Seamless integration with iOS development tools
* **Version Management**: Comprehensive iOS version and device compatibility tracking
* **Enterprise Features**: Enterprise iOS deployment and testing capabilities

**20. Contacts**

This section enables you to add contact details about one or more persons. These are folks who should be informed in the event of a device or node disconnection.

Once you have created contacts, you can add these to the contact list on the Device and Node sections of the Admin console so that they receive notification emails.

**21. Settings**

This section enables you to configure various parameters on the RobusTest platform.

More details are available in the :doc:`settings` page