.. _run-settings:

Run Settings
============


.. contents:: In this section
   :local:
   :depth: 2

.. grid:: 1 1 1 1
   :margin: 4
   
   .. grid-item-card:: ⚙️ Run Settings Overview
      :class-header: bg-primary text-white
      
      **Customize Your Test Execution Environment**
      
      Run Settings provide powerful customization capabilities for your test sessions. Whether you're conducting manual testing or running automation suites, Run Settings allow you to define and control the behavior, configuration, and environment of your test executions.
      
      .. grid:: 2 2 1 1
         :margin: 2
         
         .. grid-item-card:: 🎯 Purpose & Benefits
            :class-header: bg-success text-white
            
            **Why Use Run Settings?**
            
            * Standardize test execution environments
            * Ensure consistent testing configurations
            * Customize behavior for different test scenarios
            * Optimize test performance and reliability
         
         .. grid-item-card:: 🚀 Quick Access
            :class-header: bg-info text-white
            
            **Getting Started**
            
            * Access via 'Run Settings' icon on Project Dashboard
            * Create multiple configurations for different needs
            * Apply settings to manual and automation sessions
            * Share configurations across team members

Overview
--------

Whenever you start a new test session - whether Manual or Automation - there are certain default configuration values that determine how your test session behaves. Run Settings enable you to customize these default configuration values to meet your specific testing requirements.

Run Settings Types
-----------------

.. admonition:: 🎯 Four Specialized Configuration Types
   :class: tip
   
   **RobusTest offers four distinct Run Settings types, each optimized for specific testing scenarios and frameworks.**

.. grid:: 2 2 2 2
   :margin: 4
   :gutter: 3
   
   .. grid-item-card:: 📱 Manual Run Settings
      :class-header: bg-success text-white
      :link: runsettingmanual
      :link-type: doc
      
      **Interactive Testing Configuration**
      
      Configure settings for manual test sessions including device interaction, session behavior, and user interface preferences.
      
      +++
      
      **Best for:** Exploratory testing, usability validation
   
   .. grid-item-card:: 🤖 Automator Run Settings
      :class-header: bg-primary text-white
      :link: runsettingsautomator
      :link-type: doc
      
      **Automation Framework Configuration**
      
      Customize automation execution parameters, timeout values, and framework-specific behaviors for optimal test performance.
      
      +++
      
      **Best for:** Appium, Selenium automation scripts
   
   .. grid-item-card:: 🏃 Runner Run Settings
      :class-header: bg-warning text-white
      :link: runsettingsrunner
      :link-type: doc
      
      **Test Suite Execution Configuration**
      
      Define execution strategies, parallel processing options, and reporting configurations for comprehensive test suite runs.
      
      +++
      
      **Best for:** Large-scale test execution, CI/CD integration
   
   .. grid-item-card:: ☕ Espresso Run Settings
      :class-header: bg-info text-white
      :link: run-settings-espresso
      :link-type: doc
      
      **Android Native Testing Configuration**
      
      Specialized settings for Espresso framework testing including Android-specific configurations and instrumentation options.
      
      +++
      
      **Best for:** Android native app testing

Run Setting Attributes Reference
---------------------------------

This comprehensive table lists all available run setting attributes and their descriptions for configuring test execution environments.

.. csv-table:: Run Setting Attributes
   :file: runsettings.csv
   :widths: 30, 70
   :header-rows: 1

Configuring Run Settings
------------------------

.. admonition:: 🔧 Configuration Workflow
   :class: note
   
   **After creating a run setting, you can apply it to different types of test sessions. Each session type has its own configuration pathway.**

.. tabs::
   
   .. tab:: 📱 Manual Test Sessions
      
      **Applying Run Settings to Manual Testing**
      
      Configure your manual test sessions with custom run settings for optimal testing experience.
      
      .. grid:: 1 1 1 1
         
         .. grid-item-card:: 🎯 Step-by-Step Configuration
            :class-header: bg-success text-white
            
            **Manual Session Setup Process**
            
            .. grid:: 2 2 1 1
               
               .. grid-item-card:: 1️⃣ Access Manual Testing
                  :class-header: bg-primary text-white
                  
                  **Start Manual Session**
                  
                  * Click the 'Manual' icon on Project Dashboard
                  * Device selection screen appears
                  * Ready for configuration
               
               .. grid-item-card:: 2️⃣ Configure Session
                  :class-header: bg-info text-white
                  
                  **Apply Run Settings**
                  
                  * Click 'Configure Session' icon (top right)
                  * Select from 'Run Settings' dropdown
                  * View configuration details via info icon
   
   .. tab:: 🤖 Automation Test Sessions
      
      **Applying Run Settings to Automation Testing**
      
      Enhance your automation test sessions with customized execution parameters.
      
      .. grid:: 1 1 1 1
         
         .. grid-item-card:: ⚡ Automation Configuration Process
            :class-header: bg-primary text-white
            
            **Automation Session Setup**
            
            .. grid:: 2 2 1 1
               
               .. grid-item-card:: 1️⃣ Launch Automation
                  :class-header: bg-warning text-white
                  
                  **Start Automation Session**
                  
                  * Click 'Automation' icon on Project Dashboard
                  * Device selection dialog opens
                  * Prepare for configuration
               
               .. grid-item-card:: 2️⃣ Apply Settings
                  :class-header: bg-success text-white
                  
                  **Configure Execution**
                  
                  * Access 'Configure Session' (top right)
                  * Choose automation run setting
                  * Review settings via information icon
   
   .. tab:: 🏃 Test Suite Execution
      
      **Applying Run Settings to Test Suites**
      
      Configure test suite runs with optimized execution settings for comprehensive testing.
      
      .. grid:: 1 1 1 1
         
         .. grid-item-card:: 🎭 Test Suite Configuration
            :class-header: bg-warning text-white
            
            **Suite Execution Setup**
            
            .. grid:: 2 2 1 1
               
               .. grid-item-card:: 1️⃣ Access Test Suites
                  :class-header: bg-info text-white
                  
                  **Navigate to Suites**
                  
                  * Click 'Test Suite' icon on Dashboard
                  * Locate desired test suite
                  * Prepare for execution
               
               .. grid-item-card:: 2️⃣ Execute with Settings
                  :class-header: bg-danger text-white
                  
                  **Configure & Run**
                  
                  * Click 'Play' icon for target suite
                  * Select run setting from dropdown
                  * Verify configuration and execute

.. grid:: 1 1 1 1
   :margin: 4
   
   .. grid-item-card:: 🚀 Best Practices & Tips
      :class-header: bg-success text-white
      
      **Optimize Your Run Settings Usage**
      
      .. admonition:: 💡 Pro Tips
         :class: tip
         
         **Maximize Run Settings Effectiveness:**
         
         * Create specific settings for different testing phases (smoke, regression, performance)
         * Use descriptive names for easy identification
         * Regularly review and update settings based on project evolution
         * Share standardized settings across team members for consistency
      
      .. grid:: 3 3 2 1
         
         .. grid-item-card:: 📋 Organization
            :class-header: bg-primary text-white
            
            **Settings Management**
            
            * Use clear naming conventions
            * Group settings by test type
            * Document configuration purposes
            * Version control settings changes
         
         .. grid-item-card:: 🔄 Maintenance
            :class-header: bg-warning text-white
            
            **Keep Settings Updated**
            
            * Review settings regularly
            * Update for new features
            * Remove obsolete configurations
            * Test settings before deployment
         
         .. grid-item-card:: 👥 Collaboration
            :class-header: bg-info text-white
            
            **Team Coordination**
            
            * Share settings across projects
            * Standardize team configurations
            * Document setting purposes
            * Train team on usage patterns





