.. _project-types:

Project Types
=============

RobusTest supports 4 different project types to accommodate various testing scenarios and requirements. Choose the right project type to optimize your testing workflow and ensure comprehensive coverage.

.. contents:: Available Project Types
   :local:
   :depth: 2

.. grid:: 4 3 2 1
   :margin: 4
   :gutter: 3

   .. grid-item-card:: 🤖 Android App Project
      :class-header: bg-success text-white
      :link: android-app-project
      :link-type: ref
      
      **Native Android Testing**
      
      Perfect for testing Android mobile applications with comprehensive device support and automation framework integration.
      
      +++
      
      **Supported Formats**: .apk, .zip
   
   .. grid-item-card:: 🍎 iOS App Project
      :class-header: bg-primary text-white
      :link: ios-app-project
      :link-type: ref
      
      **Native iOS Testing**
      
      Ideal for testing iOS mobile applications on real devices with XCUITest and Appium integration support.
      
      +++
      
      **Supported Formats**: .ipa, .zip
   
   .. grid-item-card:: 🌐 Mobile Web App Project
      :class-header: bg-info text-white
      :link: mobile-webapp-project
      :link-type: ref
      
      **Mobile Web Testing**
      
      Designed for testing web applications and responsive websites across multiple mobile browsers.
      
      +++
      
      **No File Upload Required**
   
   .. grid-item-card:: 📱 Device Only Project
      :class-header: bg-warning text-white
      :link: device-only-project
      :link-type: ref
      
      **Device Hardware Testing**
      
      Focuses on device-specific functionality, hardware validation, and network connectivity testing.
      
      +++
      
      **Direct Device Interaction**

.. _android-app-project:

Android App Project
-------------------

.. tabs::
   
   .. tab:: 🚀 Quick Start
      
      **Getting Started with Android Testing**
      
      Select this option when testing Android mobile applications. After project creation:
      
      .. grid:: 2 2 1 1
         
         .. grid-item-card:: 📁 Upload Process
            :class-header: bg-success text-white
            
            **Step 1: Upload Your App**
            
            * Upload your APK or ZIP file to the project
            * Supported formats: .apk, .zip
            * Multiple build versions supported
         
         .. grid-item-card:: 🎯 Device Selection
            :class-header: bg-primary text-white
            
            **Step 2: Choose Devices**
            
            * Select from available Android devices
            * Filter by OS version, manufacturer
            * Real device testing environment
   
   .. tab:: 🔧 Key Features
      
      **Android Testing Capabilities**
      
      .. grid:: 2 2 1 1
         
         .. grid-item-card:: 🤖 Native Testing
            :class-header: bg-success text-white
            
            **Native Android Support**
            
            * Full Android app testing
            * Multiple device configurations
            * Real device interactions
            * Hardware-specific testing
         
         .. grid-item-card:: 🔄 Automation Frameworks
            :class-header: bg-info text-white
            
            **Automation Integration**
            
            * Appium framework support
            * Espresso testing integration
            * CI/CD pipeline compatibility
            * Parallel test execution
   
   .. tab:: 💡 Best Practices
      
      **Android Testing Tips**
      
      .. admonition:: 🎯 Testing Strategy
         :class: tip
         
         **Optimize Your Android Testing:**
         
         * Test on multiple Android versions
         * Include different screen sizes and resolutions
         * Validate app behavior across manufacturers
         * Use automation for regression testing
      
      .. grid:: 2 2 1 1
         
         .. grid-item-card:: 📊 Device Coverage
            :class-header: bg-warning text-white
            
            **Device Selection Strategy**
            
            * Target popular Android versions
            * Test on different screen densities
            * Include various manufacturers
            * Consider regional device preferences
         
         .. grid-item-card:: 🚀 Performance Testing
            :class-header: bg-danger text-white
            
            **Performance Optimization**
            
            * Monitor memory usage
            * Test battery consumption
            * Validate network performance
            * Check app startup times

.. _ios-app-project:

iOS App Project  
---------------

.. tabs::
   
   .. tab:: 🚀 Quick Start
      
      **Getting Started with iOS Testing**
      
      Choose this option for iOS mobile application testing. After project setup:
      
      .. grid:: 2 2 1 1
         
         .. grid-item-card:: 📱 Upload Process
            :class-header: bg-primary text-white
            
            **Step 1: Upload Your App**
            
            * Upload your IPA or ZIP file to the project
            * Supported formats: .ipa, .zip
            * Multiple build versions supported
         
         .. grid-item-card:: ⚙️ Device Configuration
            :class-header: bg-info text-white
            
            **Step 2: Configure iOS Devices**
            
            * Ensure proper device setup
            * Verify provisioning profiles
            * Start testing on real iOS devices
      
      .. admonition:: 🔧 Important Setup Note
         :class: note
         
         **iOS Device Requirements:**
         
         iOS device setup and provisioning must be completed before testing. Ensure your devices are properly configured and provisioned for your development team.
   
   .. tab:: 🔧 Key Features
      
      **iOS Testing Capabilities**
      
      .. grid:: 2 2 1 1
         
         .. grid-item-card:: 🍎 Native Testing
            :class-header: bg-primary text-white
            
            **Native iOS Support**
            
            * Full iOS app testing
            * Real device testing environment
            * Multiple iOS versions supported
            * Hardware-specific testing
         
         .. grid-item-card:: 🔄 Automation Frameworks
            :class-header: bg-success text-white
            
            **Automation Integration**
            
            * XCUITest framework support
            * Appium testing integration
            * CI/CD pipeline compatibility
            * Parallel test execution
   
   .. tab:: 💡 Best Practices
      
      **iOS Testing Tips**
      
      .. admonition:: 🎯 Testing Strategy
         :class: tip
         
         **Optimize Your iOS Testing:**
         
         * Test on multiple iOS versions
         * Include different device models (iPhone, iPad)
         * Validate app behavior across screen sizes
         * Use automation for regression testing
      
      .. grid:: 2 2 1 1
         
         .. grid-item-card:: 📊 Device Coverage
            :class-header: bg-warning text-white
            
            **Device Selection Strategy**
            
            * Target current iOS versions
            * Test on different screen sizes
            * Include iPhone and iPad variants
            * Consider regional device preferences
         
         .. grid-item-card:: 🔐 Security Testing
            :class-header: bg-danger text-white
            
            **Security Considerations**
            
            * Validate app permissions
            * Test Touch ID/Face ID integration
            * Check keychain functionality
            * Verify app store compliance

.. _mobile-webapp-project:

Mobile Web App Project
---------------------

.. tabs::
   
   .. tab:: 🚀 Quick Start
      
      **Getting Started with Mobile Web Testing**
      
      Select this option for testing web applications on mobile browsers:
      
      .. grid:: 2 2 1 1
         
         .. grid-item-card:: 🌐 Setup Process
            :class-header: bg-info text-white
            
            **Step 1: Enter Web App URL**
            
            * Enter the Web App URL during project creation
            * No file upload required
            * Supports any web application
         
         .. grid-item-card:: 📱 Testing Workflow
            :class-header: bg-success text-white
            
            **Step 2: Start Testing**
            
            * Select a mobile device for testing
            * Choose from available browsers
            * Web App launches automatically
            * Begin testing your web application
   
   .. tab:: 🔧 Key Features
      
      **Mobile Web Testing Capabilities**
      
      .. grid:: 2 2 1 1
         
         .. grid-item-card:: 🌐 Cross-Browser Support
            :class-header: bg-primary text-white
            
            **Multi-Browser Testing**
            
            * Chrome browser support
            * Safari browser testing
            * Firefox compatibility
            * Device-dependent availability
         
         .. grid-item-card:: 📐 Responsive Design
            :class-header: bg-warning text-white
            
            **Responsive Testing**
            
            * Multiple screen sizes
            * Portrait and landscape modes
            * Mobile-specific interactions
            * Touch gesture validation
   
   .. tab:: 💡 Best Practices
      
      **Mobile Web Testing Tips**
      
      .. admonition:: 🎯 Testing Strategy
         :class: tip
         
         **Optimize Your Mobile Web Testing:**
         
         * Test across multiple browsers
         * Validate responsive breakpoints
         * Check touch interactions
         * Verify mobile-specific features
      
      .. grid:: 2 2 1 1
         
         .. grid-item-card:: 📊 Browser Coverage
            :class-header: bg-info text-white
            
            **Browser Selection Strategy**
            
            * Test on popular mobile browsers
            * Include different browser versions
            * Consider regional browser preferences
            * Validate WebKit vs Blink engines
         
         .. grid-item-card:: 🚀 Performance Testing
            :class-header: bg-danger text-white
            
            **Web Performance**
            
            * Monitor page load times
            * Test under different network conditions
            * Validate mobile data usage
            * Check battery impact

.. _device-only-project:

Device Only Project
-------------------

.. tabs::
   
   .. tab:: 🚀 Quick Start
      
      **Getting Started with Device Testing**
      
      This project type focuses on device hardware and SIM-related testing:
      
      .. grid:: 2 2 1 1
         
         .. grid-item-card:: 📱 Direct Access
            :class-header: bg-warning text-white
            
            **No App Upload Required**
            
            * Direct device interaction
            * Immediate testing access
            * Hardware-focused testing
         
         .. grid-item-card:: 🔧 Hardware Testing
            :class-header: bg-danger text-white
            
            **Device Functionality**
            
            * Network connectivity testing
            * Hardware feature validation
            * SIM card functionality
   
   .. tab:: 🔧 Use Cases
      
      **Device Testing Scenarios**
      
      .. grid:: 2 2 1 1
         
         .. grid-item-card:: 📞 Communication Testing
            :class-header: bg-success text-white
            
            **Phone & SMS Testing**
            
            * Making and receiving phone calls
            * SMS sending and receiving
            * MMS functionality testing
            * Call quality validation
         
         .. grid-item-card:: 🌐 Network Testing
            :class-header: bg-info text-white
            
            **Connectivity Validation**
            
            * Network connectivity testing
            * Carrier-specific functionality
            * Data connection validation
            * Roaming behavior testing
   
   .. tab:: 💡 Best Practices
      
      **Device Testing Tips**
      
      .. admonition:: 🎯 Testing Strategy
         :class: tip
         
         **Optimize Your Device Testing:**
         
         * Test core device functionality
         * Validate carrier-specific features
         * Check hardware component behavior
         * Verify network performance
      
      .. grid:: 2 2 1 1
         
         .. grid-item-card:: 📊 Hardware Coverage
            :class-header: bg-warning text-white
            
            **Hardware Testing Strategy**
            
            * Test across different manufacturers
            * Validate sensor functionality
            * Check camera and audio
            * Verify battery behavior
         
         .. grid-item-card:: 🌐 Network Validation
            :class-header: bg-primary text-white
            
            **Network Testing**
            
            * Test different network types
            * Validate carrier features
            * Check data speeds
            * Verify connectivity stability

.. grid:: 1 1 1 1
   :margin: 4
   
   .. grid-item-card:: 🚀 Next Steps
      :class-header: bg-success text-white
      
      **Ready to Get Started?**
      
      Once you've chosen your project type, continue with these essential guides:
      
      .. grid:: 2 2 1 1
         
         .. grid-item-card:: 📝 Project Creation
            :class-header: bg-primary text-white
            :link: createproject
            :link-type: doc
            
            **Step-by-Step Creation Guide**
            
            Complete walkthrough of creating your first project with detailed instructions and best practices.
         
         .. grid-item-card:: 📊 Project Management
            :class-header: bg-info text-white
            :link: projectdashboard
            :link-type: doc
            
            **Dashboard & Management**
            
            Learn how to effectively manage your project after creation, including team collaboration and settings.
      
      .. admonition:: 💡 Pro Tip
         :class: tip
         
         **Project Type Selection:** Choose the project type that best matches your primary testing goals. You can always create multiple projects for different testing scenarios!
