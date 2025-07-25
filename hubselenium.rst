.. _hub-selenium:

Selenium Testing Hub
====================

.. contents:: In this section
   :local:
   :depth: 2

Overview
--------

Selenium is the industry-standard framework for web application testing. RobusTest Hub's Selenium integration provides a cloud-based grid for running your Selenium tests on real browsers and devices, eliminating the need to maintain local browser infrastructure.

**Key Benefits:**

* **Real Browser Testing**: Execute tests on actual browsers across different platforms
* **Cross-Browser Support**: Test on multiple browsers simultaneously
* **Cloud Infrastructure**: No need to manage local browser installations
* **Scalable Execution**: Run tests in parallel across multiple browsers
* **Mobile Web Testing**: Test mobile web applications on real devices

.. image:: _static/buildURL.png
   :align: center
   :alt: Selenium Hub Setup

Setup Process
-------------

Follow these steps to configure Selenium testing on RobusTest Hub:

**Step 1: Project Configuration**

Create a web project in RobusTest for your Selenium testing:

* **Project Type**: Select "Mobile Web App Project" or appropriate web project type
* **Project ID**: Note the project ID from your project dashboard URL
* **Configuration**: Ensure project is configured for web testing

**Step 2: Hub URL Configuration**

Configure your Selenium tests to point to the RobusTest Hub:

* **Hub URL**: Point your Selenium WebDriver to the RobusTest Hub endpoint
* **Connection**: Ensure network connectivity to the RobusTest Hub
* **Authentication**: Use your access key for authentication

**Step 3: Desired Capabilities**

Configure your Selenium desired capabilities for RobusTest Hub:

.. code-block:: json

   {
     "browserName": "[Browser Name]",
     "accessKey": "[User Access Key]",
     "projectID": "[Project ID]"
   }

**Parameter Details:**

* **browserName**: Specify the browser for test execution
  
  * Supported values: `chrome`, `firefox`, `safari`, `edge`
  * Case-sensitive browser names

* **accessKey**: Your RobusTest API access key
  
  * Location: Available in your user profile
  * Security: Keep secure and never share publicly

* **projectID**: Your RobusTest project identifier
  
  * Format: Alphanumeric string from project dashboard URL
  * Example: `5d176ffef0238be8f3b7afa5`

**Step 4: Browser Status Monitoring**

Monitor available browsers and their status:

**API Endpoint:**

.. code-block:: text

   GET http://[DEVICE_LAB_URL]/grid/browsers

**Response Information:**

* **Available Browsers**: List of browsers ready for testing
* **Browser Versions**: Specific versions available for each browser
* **Device Status**: Current availability of browser instances
* **Capacity Information**: Maximum concurrent sessions supported

Example Implementation
---------------------

**Java Example:**

.. code-block:: java

   import org.openqa.selenium.WebDriver;
   import org.openqa.selenium.remote.DesiredCapabilities;
   import org.openqa.selenium.remote.RemoteWebDriver;
   
   public class RobusTestSeleniumExample {
       public static void main(String[] args) {
           DesiredCapabilities capabilities = new DesiredCapabilities();
           capabilities.setCapability("browserName", "chrome");
           capabilities.setCapability("accessKey", "your_access_key_here");
           capabilities.setCapability("projectID", "your_project_id_here");
           
           WebDriver driver = new RemoteWebDriver(
               new URL("http://your-robustest-hub-url/wd/hub"), 
               capabilities
           );
           
           // Your test code here
           driver.get("https://example.com");
           
           driver.quit();
       }
   }

**Python Example:**

.. code-block:: python

   from selenium import webdriver
   from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
   
   capabilities = DesiredCapabilities.CHROME.copy()
   capabilities['accessKey'] = 'your_access_key_here'
   capabilities['projectID'] = 'your_project_id_here'
   
   driver = webdriver.Remote(
       command_executor='http://your-robustest-hub-url/wd/hub',
       desired_capabilities=capabilities
   )
   
   # Your test code here
   driver.get('https://example.com')
   
   driver.quit()

**JavaScript (Node.js) Example:**

.. code-block:: javascript

   const { Builder } = require('selenium-webdriver');
   
   const capabilities = {
       browserName: 'chrome',
       accessKey: 'your_access_key_here',
       projectID: 'your_project_id_here'
   };
   
   const driver = new Builder()
       .usingServer('http://your-robustest-hub-url/wd/hub')
       .withCapabilities(capabilities)
       .build();
   
   // Your test code here
   driver.get('https://example.com');
   
   driver.quit();

Best Practices
--------------

**Test Design:**

* **Cross-Browser Testing**: Test on multiple browsers to ensure compatibility
* **Responsive Testing**: Verify responsive design across different screen sizes
* **Performance Testing**: Monitor page load times and responsiveness
* **Error Handling**: Implement proper error handling for network issues

**Resource Management:**

* **Session Management**: Properly close WebDriver sessions to free resources
* **Parallel Execution**: Use parallel execution for faster test feedback
* **Timeout Configuration**: Set appropriate timeouts for test operations
* **Resource Optimization**: Optimize tests for efficient resource usage

**CI/CD Integration:**

* **Pipeline Integration**: Integrate Selenium tests into your CI/CD pipeline
* **Automated Triggers**: Trigger tests automatically on code changes
* **Result Integration**: Integrate test results with your reporting systems
* **Quality Gates**: Use test results to make deployment decisions

Troubleshooting
---------------

**Common Issues:**

* **Connection Problems**: Verify hub URL and network connectivity
* **Authentication Failures**: Check access key validity and permissions
* **Browser Unavailability**: Monitor browser status and availability
* **Test Timeouts**: Adjust timeout settings for network conditions

**Debugging Tips:**

* **Log Analysis**: Review Selenium logs for error details
* **Network Monitoring**: Monitor network connectivity during test execution
* **Browser Status**: Check browser availability before test execution
* **Capability Validation**: Verify desired capabilities are correctly formatted

.. seealso::
   
   **Related Topics:**
   
   * :doc:`projectdashboard` - Project configuration and management
   * :doc:`userprofile` - Access key management
   * :doc:`automationreports` - Understanding test results
   * :doc:`continuousintegration` - CI/CD integration strategies

