ADB Commands API Reference
===========================

.. contents:: In this section
   :local:
   :depth: 2

Overview
--------

The ADB Commands API allows you to execute Android Debug Bridge (ADB) shell commands remotely from within your Espresso tests. This API provides direct access to the device's shell environment, enabling advanced testing scenarios that require system-level interactions.

.. grid:: 2 2 1 1

   .. grid-item-card:: 🚀 Key Benefits
      :class-header: bg-primary text-white
      
      * **Direct Device Control**: Execute shell commands on test devices
      * **Advanced Testing**: Perform system-level operations during tests
      * **Flexible Integration**: Works seamlessly with Espresso test framework
      * **Remote Execution**: Execute commands without physical device access

   .. grid-item-card:: 🔧 Common Use Cases
      :class-header: bg-success text-white
      
      * **File System Operations**: List, create, or modify files
      * **App State Management**: Clear app data or cache
      * **System Settings**: Modify device settings for testing
      * **Network Operations**: Configure network conditions

API Specification
------------------

.. tabs::

   .. tab:: Request Details
      
      **HTTP Method:** ``POST``
      
      **Endpoint URL:**
      
      .. code-block:: text
      
         http://<RobusTest URL>/v3/device/shell?accesskey=<user_access_key>
      
      **Request Headers:**
      
      .. code-block:: text
      
         Content-Type: application/json
         
      **Request Payload:**
      
      .. code-block:: json
      
         {
           "_id": "device_id",
           "command": "<ADB SHELL COMMAND>"
         }

   .. tab:: Response Format
      
      **Success Response:**
      
      .. code-block:: json
      
         {
           "status": "success",
           "output": "command execution result",
           "exitCode": 0
         }
      
      **Error Response:**
      
      .. code-block:: json
      
         {
           "status": "error",
           "message": "Command execution failed",
           "exitCode": 1
         }

   .. tab:: Authentication
      
      **Access Key:**
      
      Your access key is required as a query parameter in the URL. You can obtain your access key from:
      
      1. **User Profile**: Navigate to User Profile → Access Keys
      2. **Project Settings**: Found in Project Dashboard → Settings
      
      **Security Notes:**
      
      * Keep your access key secure
      * Never commit access keys to version control
      * Rotate keys regularly for security

Parameters Reference
--------------------

.. list-table:: API Parameters
   :header-rows: 1
   :widths: 20 15 40 20 5

   * - Parameter
     - Type
     - Description
     - Example
     - Required

   * - **_id**
     - String
     - Device ID of the target device for command execution
     - ``"2132SDSFDSFDSF"``
     - Yes

   * - **command**
     - String
     - ADB shell command to execute on the device
     - ``"ls /data/local/tmp/"``
     - Yes

   * - **accesskey**
     - String
     - User access key for authentication (URL parameter)
     - ``"1234DFFGG24FDSD"``
     - Yes

Device ID Retrieval
--------------------

Since the Device ID is required for the API payload, you can obtain it within your Espresso test using the following Java code:

.. tabs::

   .. tab:: Java Code
      
      .. code-block:: java
      
         Bundle testBundle = InstrumentationRegistry.getArguments();
         String deviceID = testBundle.getString("deviceID");
         
         // Use the deviceID in your API call
         System.out.println("Current Device ID: " + deviceID);

   .. tab:: Kotlin Code
      
      .. code-block:: kotlin
      
         val testBundle = InstrumentationRegistry.getArguments()
         val deviceID = testBundle.getString("deviceID")
         
         // Use the deviceID in your API call
         println("Current Device ID: $deviceID")

Sample Implementation
---------------------

Here's a complete example of how to use the ADB Commands API:

.. tabs::

   .. tab:: Basic Example
      
      **Request:**
      
      .. code-block:: http
      
         POST /v3/device/shell?accesskey=1234DFFGG24FDSD HTTP/1.1
         Host: devicelab.robustest.com
         Content-Type: application/json
         
         {
           "_id": "2132SDSFDSFDSF",
           "command": "ls /data/local/tmp/"
         }
      
      **Response:**
      
      .. code-block:: json
      
         {
           "status": "success",
           "output": "file1.txt\nfile2.txt\ntest_data/",
           "exitCode": 0
         }

   .. tab:: Advanced Example
      
      **Clear App Data:**
      
      .. code-block:: json
      
         {
           "_id": "2132SDSFDSFDSF",
           "command": "pm clear com.example.app"
         }
      
      **Install APK:**
      
      .. code-block:: json
      
         {
           "_id": "2132SDSFDSFDSF",
           "command": "pm install /data/local/tmp/test.apk"
         }
      
      **Check Battery Level:**
      
      .. code-block:: json
      
         {
           "_id": "2132SDSFDSFDSF",
           "command": "dumpsys battery | grep level"
         }

   .. tab:: cURL Example
      
      .. code-block:: bash
      
         curl -X POST \
           'http://devicelab.robustest.com/v3/device/shell?accesskey=1234DFFGG24FDSD' \
           -H 'Content-Type: application/json' \
           -d '{
             "_id": "2132SDSFDSFDSF",
             "command": "ls /data/local/tmp/"
           }'

Common ADB Commands
-------------------

.. grid:: 2 2 1 1

   .. grid-item-card:: 📁 File Operations
      :class-header: bg-info text-white
      
      * **List Directory**: ``ls /path/to/directory``
      * **Create Directory**: ``mkdir /path/to/new/directory``
      * **Copy File**: ``cp /source/file /dest/file``
      * **Remove File**: ``rm /path/to/file``
      * **Change Permissions**: ``chmod 755 /path/to/file``

   .. grid-item-card:: 🔧 System Operations
      :class-header: bg-warning text-white
      
      * **Clear App Data**: ``pm clear com.package.name``
      * **Install APK**: ``pm install /path/to/app.apk``
      * **Check Processes**: ``ps | grep process_name``
      * **Memory Info**: ``dumpsys meminfo``
      * **Battery Status**: ``dumpsys battery``

Best Practices
--------------

.. note::
   
   **Security Considerations:**
   
   * Only execute trusted commands
   * Validate command parameters to prevent injection attacks
   * Use appropriate error handling for failed commands
   * Monitor command execution for security anomalies

.. tip::
   
   **Performance Tips:**
   
   * Keep commands lightweight to avoid test timeouts
   * Use specific paths rather than wildcards when possible
   * Cache device IDs to avoid repeated retrievals
   * Implement retry logic for transient failures

Error Handling
--------------

Common error scenarios and their solutions:

.. list-table:: Common Errors
   :header-rows: 1
   :widths: 30 40 30

   * - Error Type
     - Description
     - Solution

   * - **Invalid Device ID**
     - Device ID not found or inactive
     - Verify device availability and correct ID

   * - **Command Timeout**
     - Command execution exceeded timeout
     - Use simpler commands or increase timeout

   * - **Permission Denied**
     - Insufficient permissions for command
     - Use appropriate permissions or alternative commands

   * - **Authentication Error**
     - Invalid access key
     - Verify access key validity and permissions

.. seealso::
   
   **Related Documentation:**
   
   * :doc:`hubespresso` - Espresso Hub Integration
   * :doc:`switchWiFiAPI` - WiFi Network Switching API
   * :doc:`hubjobpayload` - Job Payload API Reference
   * :doc:`automationreports` - Understanding Test Reports