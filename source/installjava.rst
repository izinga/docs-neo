.. _install-java:

Java
====

.. role:: bolditalic
  :class: bolditalic

.. role:: underline
  :class: underline


To install Java on your machine, follow the following instructions:

**1.** Download the appropriate Java JDK from the following website `<http://www.oracle.com/technetwork/java/javase/downloads/index.htm>`_ depending on whether you are using a Mac, a Linux or a Windows machine.
  
   *  Note: You need to download the JDK not the JRE

**2.** Follow the instructions that are displayed by the installer and install Java on your machine.

**3.** If your computer runs on Windows, then you need to additionally create the JAVA_HOME environment variable as follows:

   1. Search for Command Prompt
   2. In the search result, right-click on the icon for Command Prompt and select the ‘Run as Administrator’ option
   3. On the Command Prompt window run the following command

		``setx -m JAVA_HOME "C:\Program Files\Java\jdk-14.0.2"``

      * Use the appropriate installation path and jdk version in the above command
      * You should see a message that looks as follows: “SUCCESS: Specified value was saved.”