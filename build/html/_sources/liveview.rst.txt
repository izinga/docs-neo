Live View
=========

.. role:: bolditalic
  :class: bolditalic

.. role:: underline
  :class: underline

.. contents:: In this section
   :local:
   :depth: 2

.. grid:: 1 1 1 1
   :margin: 4
   
   .. grid-item-card:: 👀 Live View Overview
      :class-header: bg-primary text-white
      
      **Real-time Testing Dashboard**
      
      Live View provides comprehensive real-time monitoring and control capabilities for all your active testing sessions. Located in the RobusTest application header, it serves as your centralized command center for managing and observing ongoing test activities across all devices.
      
      +++
      
      **🎯 Instant access to all active sessions • 📱 Universal device support • ⚡ Real-time monitoring**

Overview
--------

Live View transforms how you monitor and manage your testing activities by providing instant visibility into all active sessions:

.. grid:: 3 3 2 1
   :margin: 4
   :gutter: 3

   .. grid-item-card:: 📊 Real-time Monitoring
      :class-header: bg-success text-white
      
      **Live Device Screens**
      
      Watch live device screens during test execution with zero-delay streaming and interactive capabilities.
      
      +++
      
      * Zero-delay screen streaming
      * Interactive device control
      * Multi-screen simultaneous viewing
      * Performance metrics overlay

   .. grid-item-card:: 🎮 Session Management
      :class-header: bg-info text-white
      
      **Complete Control**
      
      Resume, control, and terminate active sessions with comprehensive management tools.
      
      +++
      
      * Session resume capabilities
      * Remote device control
      * Emergency session termination
      * Cross-browser continuity

   .. grid-item-card:: 🔧 Universal Access
      :class-header: bg-warning text-white
      
      **All Testing Types**
      
      Works seamlessly with manual, automation, and Hub test sessions across all device types.
      
      +++
      
      * Manual testing sessions
      * Automation test runs
      * Hub-based testing
      * Multi-device scenarios

Active Session Information
--------------------------

Live View displays comprehensive information about all your active testing sessions in an organized, easy-to-understand format:

.. tabs::

   .. tab:: 📋 Session Overview
      
      **Comprehensive Session Data**
      
      Each active session displays detailed information to help you understand the current testing state:
      
      .. grid:: 2 2 1 1
      
         .. grid-item-card:: 📱 Device & App Information
            :class-header: bg-primary text-white
            
            **Core Session Details:**
            
            * **📦 App Build**: Current application build being tested
            * **📱 Device Model**: Device specifications and model information
            * **🔧 ADB ID**: Android Debug Bridge unique identifier
            * **⚙️ Device Configuration**: Screen size, OS version, and capabilities
            
         .. grid-item-card:: 👤 Session Metadata
            :class-header: bg-info text-white
            
            **Session Context:**
            
            * **🎯 Session Type**: Manual, automation, or Hub test classification
            * **👤 User Details**: Name of the user who initiated the session
            * **⏰ Start Time**: Precise session start timestamp
            * **⏱️ Duration**: Real-time session elapsed time

   .. tab:: 🎛️ Session Controls
      
      **Available Actions**
      
      For each active session, you can perform various control actions:
      
      .. grid:: 3 3 2 1
      
         .. grid-item-card:: 👀 Live Screen
            :class-header: bg-success text-white
            
            **Real-time Viewing**
            
            * Monitor device screen in real-time
            * Interactive control capabilities
            * Multiple screen support
            
         .. grid-item-card:: ▶️ Resume Session
            :class-header: bg-warning text-white
            
            **Session Recovery**
            
            * Resume interrupted sessions
            * Cross-browser continuity
            * Maintain test progress
            
         .. grid-item-card:: 🔚 Release Device
            :class-header: bg-danger text-white
            
            **Session Termination**
            
            * Terminate active sessions
            * Free up device resources
            * Clean session closure

   .. tab:: 📊 Session Status
      
      **Understanding Session States**
      
      .. grid:: 2 2 1 1
      
         .. grid-item-card:: 🟢 Active States
            :class-header: bg-success text-white
            
            **Running Sessions:**
            
            * **🟢 Active**: Session is running normally
            * **🔵 Paused**: Session is temporarily paused
            * **🟡 Busy**: Device is processing commands
            * **🟠 Waiting**: Session waiting for user input
            
         .. grid-item-card:: ⚠️ Alert States
            :class-header: bg-warning text-white
            
            **Attention Required:**
            
            * **🔴 Disconnected**: Network connection lost
            * **⚫ Crashed**: Application or device crash detected
            * **🟣 Timeout**: Session approaching timeout
            * **🔶 Resource Low**: Device resources running low

.. figure:: _static/liveviewsessions.png
   :align: center
   :alt: Live View Sessions Overview showing active test sessions
   :class: screenshot-border
   
   Live View dashboard displaying all currently active test sessions

Session Control Options
-----------------------

Live View provides comprehensive control options for managing your active testing sessions with powerful features and flexible configurations:

.. tabs::

   .. tab:: 👀 Live Screen Monitoring
      
      **Real-time Device Screen Viewing**
      
      The Live Screen button (monitor icon) opens a powerful real-time device viewing experience:
      
      .. grid:: 2 2 1 1
      
         .. grid-item-card:: 🖥️ Screen Viewing Features
            :class-header: bg-primary text-white
            
            **Advanced Display Options:**
            
            * **📺 Real-time Display**: Zero-delay live device screen streaming
            * **🔍 Test Step Visibility**: Watch automation test steps in real-time
            * **📱 Multiple Resolutions**: Adaptive screen sizing and quality
            * **🎥 Recording Capability**: Record sessions for later analysis
            * **📊 Performance Overlay**: Real-time performance metrics display
            
         .. grid-item-card:: 🎮 Interactive Control
            :class-header: bg-success text-white
            
            **Device Control Capabilities:**
            
            * **👆 Touch Interactions**: Click, swipe, and gesture support
            * **⌨️ Keyboard Input**: Direct text input to device
            * **🔄 Device Rotation**: Portrait/landscape orientation control
            * **📲 Hardware Buttons**: Volume, power, and navigation controls
            * **📋 Clipboard Support**: Copy/paste between device and computer
      
      .. admonition:: 🔧 Enabling Device Control
         :class: tip
         
         **To enable full device control during Live Screen viewing, append this parameter to the Live Screen URL:**
         
         .. code-block:: text
            
            ?deviceControl=true
         
         **Example URL:**
         ``https://your-robustest-instance.com/liveview/session/123?deviceControl=true``
         
         This enables complete remote control capabilities including touch, swipe, and keyboard input.

   .. tab:: ▶️ Session Recovery
      
      **Robust Session Continuity**
      
      The Resume Session button (green play icon) provides comprehensive session recovery capabilities:
      
      .. grid:: 2 2 1 1
      
         .. grid-item-card:: 🔄 Recovery Scenarios
            :class-header: bg-warning text-white
            
            **When to Use Resume:**
            
            * **🌐 Browser Crash Recovery**: Restore sessions after browser failures
            * **📡 Network Interruption**: Continue after connection drops
            * **💻 Device Switching**: Move sessions between computers
            * **👥 Collaborative Testing**: Share sessions with team members
            * **⏰ Timeout Prevention**: Extend session timeouts
            
         .. grid-item-card:: ✅ Resume Benefits
            :class-header: bg-info text-white
            
            **Continuity Features:**
            
            * **💾 Progress Preservation**: Maintain all test progress and state
            * **🔗 Cross-browser Support**: Resume from any browser or device
            * **📱 App State Maintained**: Application remains in current state
            * **⚡ Instant Reconnection**: Immediate session restoration
            * **🔐 Secure Handoff**: Secure session transfer mechanisms
      
      .. tip::
         
         **Best Practice**: Always use Resume Session instead of starting new sessions when returning to interrupted tests to maintain progress and save time.

   .. tab:: 🔚 Device Release
      
      **Efficient Resource Management**
      
      The Release Device button provides clean session termination and resource optimization:
      
      .. grid:: 2 2 1 1
      
         .. grid-item-card:: 🎯 When to Release
            :class-header: bg-danger text-white
            
            **Release Scenarios:**
            
            * **✅ Testing Completion**: Normal end of testing session
            * **🚨 Emergency Release**: Immediate device liberation needed
            * **⚡ Resource Optimization**: Free devices for team members
            * **🧹 Session Cleanup**: Remove inactive or stuck sessions
            * **🔄 Device Reset**: Prepare device for fresh testing
            
         .. grid-item-card:: 💡 Release Benefits
            :class-header: bg-secondary text-white
            
            **Optimization Advantages:**
            
            * **🏃 Quick Liberation**: Immediate device availability
            * **💰 Cost Efficiency**: Optimize device usage costs
            * **👥 Team Sharing**: Make devices available to colleagues
            * **🔄 Resource Cycling**: Prevent device resource exhaustion
            * **📊 Usage Analytics**: Better resource utilization tracking
      
      .. warning::
         
         **Important**: Device release immediately terminates the session. Ensure you've saved all necessary test artifacts before releasing.

.. figure:: _static/liveview1.png
   :align: center
   :alt: Live Screen View with Interactive Controls and device interface
   :class: screenshot-border
   
   Interactive Live View showing device screen with control panel

Multi-Device Monitoring
-----------------------

Live View's multi-device monitoring capabilities enable comprehensive testing scenarios across multiple devices simultaneously:

.. tabs::

   .. tab:: 🖥️ Parallel Monitoring
      
      **Simultaneous Device Screen Viewing**
      
      Monitor multiple devices in real-time with advanced multi-screen capabilities:
      
      .. grid:: 2 2 1 1
      
         .. grid-item-card:: 📺 Multi-Screen Features
            :class-header: bg-primary text-white
            
            **Advanced Viewing Options:**
            
            * **🪟 Multiple Windows**: Open unlimited device screens simultaneously
            * **⚡ Grid Layout**: Organize screens in customizable grid patterns
            * **🔄 Synchronized Monitoring**: Coordinated test execution viewing
            * **🎯 Focus Mode**: Highlight primary device while monitoring others
            * **📱 Responsive Scaling**: Adaptive screen sizing for optimal viewing
            
         .. grid-item-card:: ⚡ Performance Optimization
            :class-header: bg-success text-white
            
            **Efficient Resource Usage:**
            
            * **💾 Memory Optimization**: Intelligent resource management
            * **🌐 Bandwidth Efficiency**: Adaptive streaming quality
            * **🖥️ GPU Acceleration**: Hardware-accelerated rendering
            * **⏱️ Latency Reduction**: Minimized delay across all screens
            * **🔋 Power Management**: Optimized for extended monitoring sessions

   .. tab:: 🛠️ Setup & Configuration
      
      **Easy Multi-Device Setup**
      
      .. grid:: 1 1 1 1
      
         .. grid-item-card:: 📋 Step-by-Step Setup
            :class-header: bg-info text-white
            
            **Quick Configuration Process:**
            
            **Step 1: Session Selection**
            
            * Select multiple active sessions from the Live View dashboard
            * Use checkboxes to choose desired devices for monitoring
            * Verify device compatibility and availability
            
            **Step 2: Screen Layout**
            
            * Click "Start Multiplexing" to initialize multi-device view
            * Arrange windows according to your monitoring preferences
            * Configure screen resolution and quality settings
            
            **Step 3: Active Monitoring**
            
            * Begin real-time monitoring across all selected devices
            * Use synchronized controls for coordinated testing
            * Monitor performance metrics across all devices
            
            **Step 4: Session Management**
            
            * Control individual devices or all devices simultaneously
            * Save screenshots and recordings from multiple devices
            * End sessions individually or as a group

   .. tab:: 🎯 Use Cases & Benefits
      
      **Powerful Testing Scenarios**
      
      .. grid:: 2 2 1 1
      
         .. grid-item-card:: 🚀 Testing Scenarios
            :class-header: bg-warning text-white
            
            **Multi-Device Applications:**
            
            * **📱 Cross-Device Testing**: Test app behavior across different devices
            * **💬 Communication Apps**: Monitor chat, call, and messaging features
            * **🎮 Multiplayer Games**: Test real-time multiplayer interactions
            * **🔄 Synchronization**: Verify data sync across multiple devices
            * **📊 Performance Comparison**: Compare app performance across devices
            
         .. grid-item-card:: 💡 Strategic Benefits
            :class-header: bg-secondary text-white
            
            **Monitoring Advantages:**
            
            * **⏰ Time Efficiency**: Monitor multiple tests simultaneously
            * **🔍 Comparative Analysis**: Side-by-side behavior comparison
            * **👥 Team Collaboration**: Share multi-device views with team
            * **📈 Comprehensive Coverage**: Test across device ecosystem
            * **🎯 Centralized Control**: Manage all devices from single interface

   .. tab:: ⚙️ Performance & Optimization
      
      **System Requirements & Best Practices**
      
      .. grid:: 2 2 1 1
      
         .. grid-item-card:: 📊 Performance Considerations
            :class-header: bg-danger text-white
            
            **Resource Requirements:**
            
            * **🌐 Bandwidth Usage**: Multiple screens increase network consumption
            * **💻 System Resources**: Monitor CPU and memory usage carefully
            * **🖥️ Screen Resolution**: Optimize resolution for performance
            * **📡 Network Latency**: Consider network conditions for smooth streaming
            * **🔋 Battery Impact**: Extended monitoring affects device battery
            
         .. grid-item-card:: 🛠️ Optimization Tips
            :class-header: bg-info text-white
            
            **Best Practices:**
            
            * **📱 Limit Concurrent Screens**: Start with 2-4 devices maximum
            * **⚡ Adjust Quality**: Reduce streaming quality if performance lags
            * **🖥️ Monitor Layout**: Use efficient screen arrangements
            * **⏰ Session Duration**: Limit extended multi-device sessions
            * **🔄 Rotate Devices**: Periodically refresh device connections

Best Practices
--------------

Maximize your Live View experience with these proven strategies and recommendations:

.. tabs::

   .. tab:: 🎯 Session Management
      
      **Optimal Session Control**
      
      .. grid:: 2 2 1 1
      
         .. grid-item-card:: 🧹 Resource Management
            :class-header: bg-primary text-white
            
            **Efficient Resource Usage:**
            
            * **⏰ Regular Cleanup**: Release unused sessions every 30 minutes
            * **🏷️ Session Naming**: Use descriptive, time-stamped session names
            * **⏱️ Time Management**: Monitor session duration and set alerts
            * **🔄 Rotation Strategy**: Rotate devices to prevent resource exhaustion
            * **📊 Usage Tracking**: Monitor device utilization patterns
            
         .. grid-item-card:: 🛡️ Backup & Recovery
            :class-header: bg-success text-white
            
            **Session Continuity:**
            
            * **💾 Progress Saving**: Save test progress at regular intervals
            * **🔗 Resume Planning**: Keep session URLs for easy recovery
            * **🌐 Browser Backup**: Test resume capability across browsers
            * **👥 Team Handoff**: Document session details for team members
            * **📱 Device Backup**: Have alternate devices ready if needed

   .. tab:: 🖥️ Multi-Device Strategy
      
      **Effective Multi-Device Monitoring**
      
      .. grid:: 2 2 1 1
      
         .. grid-item-card:: 🎯 Device Selection
            :class-header: bg-info text-white
            
            **Strategic Device Choice:**
            
            * **👥 Target Representation**: Choose devices matching your user base
            * **📊 Coverage Strategy**: Test across different screen sizes and OS versions
            * **⚡ Performance Tiers**: Include high, medium, and low-performance devices
            * **🌍 Geographic Distribution**: Consider devices from different regions
            * **🔄 Update Cycles**: Test on devices with different OS update schedules
            
         .. grid-item-card:: 🖼️ Screen Organization
            :class-header: bg-warning text-white
            
            **Optimal Layout Management:**
            
            * **📐 Grid Arrangement**: Organize screens in logical grid patterns
            * **🎯 Priority Focus**: Place critical devices in primary viewing area
            * **📱 Screen Sizing**: Optimize individual screen sizes for visibility
            * **⚡ Quick Access**: Keep session controls easily accessible
            * **👀 Eye Movement**: Minimize eye strain with efficient layouts

   .. tab:: 🔧 Troubleshooting
      
      **Common Issues & Solutions**
      
      .. grid:: 2 2 1 1
      
         .. grid-item-card:: 🔗 Connection Issues
            :class-header: bg-danger text-white
            
            **Network & Connectivity:**
            
            * **🌐 Network Check**: Verify stable internet connection
            * **🔄 Browser Refresh**: Refresh browser if screens don't load
            * **🚀 Browser Update**: Use latest browser versions
            * **🔧 Cache Clear**: Clear browser cache for persistent issues
            * **📡 Bandwidth Test**: Ensure sufficient bandwidth for multiple streams
            
         .. grid-item-card:: ⚡ Performance Issues
            :class-header: bg-secondary text-white
            
            **System Optimization:**
            
            * **📱 Screen Reduction**: Reduce concurrent screens if performance lags
            * **🖥️ Resolution Adjustment**: Lower screen resolution for better performance
            * **💻 Resource Monitoring**: Monitor CPU and memory usage
            * **🔄 Device Rotation**: Rotate devices to prevent overload
            * **⏰ Session Limits**: Set time limits for extended sessions

   .. tab:: 💡 Advanced Tips
      
      **Expert-Level Optimization**
      
      .. grid:: 2 2 1 1
      
         .. grid-item-card:: 🚀 Performance Maximization
            :class-header: bg-success text-white
            
            **Advanced Techniques:**
            
            * **🎯 Focused Monitoring**: Use Live View for critical test phases only
            * **📊 Metrics Integration**: Combine Live View with performance monitoring
            * **🔄 Automated Alerts**: Set up alerts for session issues
            * **👥 Team Protocols**: Establish team protocols for Live View usage
            * **📈 Usage Analytics**: Track Live View usage patterns for optimization
            
         .. grid-item-card:: 🛠️ Integration Strategies
            :class-header: bg-info text-white
            
            **Workflow Integration:**
            
            * **🔗 CI/CD Integration**: Integrate Live View with automated workflows
            * **📋 Test Management**: Link Live View sessions with test case management
            * **📊 Reporting Integration**: Include Live View data in test reports
            * **👥 Collaboration Tools**: Integrate with team communication platforms
            * **🎥 Recording Strategy**: Develop systematic recording practices

.. admonition:: 💡 Pro Tip
   :class: tip
   
   **Efficient Monitoring Strategy**: Use Live View strategically during critical test phases rather than continuous monitoring to optimize resource usage and maintain system performance.

.. admonition:: 🎯 Quick Start Guide
   :class: note
   
   **For Multi-Device Monitoring:**
   
   1. **✅ Select Sessions**: Enable checkboxes for desired live session entries (minimum 2 required)
   2. **🚀 Start Multiplexing**: Click the 'Start Multiplexing' button
   3. **👀 Monitor Devices**: View and control selected devices in multi-device mode
   4. **🎛️ Manage Sessions**: Use individual or coordinated controls as needed

.. seealso::
   
   **Related Documentation:**
   
   * :doc:`manualtesting` - Manual testing session management and workflows
   * :doc:`robustesthub` - Hub-based testing and advanced monitoring capabilities
   * :doc:`healthpage` - Device and infrastructure health monitoring
   * :doc:`performancetesting` - Performance monitoring and optimization
   * :doc:`multidevicetesting` - Multi-device testing strategies and best practices
