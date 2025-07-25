.. _install-homebrew:

Homebrew
========

.. role:: bolditalic
  :class: bolditalic

.. role:: underline
  :class: underline


To install Homebrew on your machine, follow the following instructions:

1. Install Homebrew by running the following command:

   ``/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"``

2. Install Homebrew Modules	

   1. Run the following commands on Terminal. Each command should be run after the command before it has completed successfully without any errors.

  	  ``brew update``
	  ``brew uninstall --ignore-dependencies libimobiledevice``
	  ``brew uninstall --ignore-dependencies usbmuxd``
	  ``brew uninstall --ignore-dependencies ideviceinstaller``
	  ``brew install --HEAD usbmuxd``
	  ``brew unlink usbmuxd``
	  ``brew link usbmuxd``
	  ``brew install --HEAD libimobiledevice``
	  ``brew link --overwrite libimobiledevice``
	  ``brew install ideviceinstaller``
	  ``brew link --overwrite ideviceinstaller``
	  ``brew install mobiledevice``
	  ``brew install ios-deploy``
	  ``brew install ios-webkit-debug-proxy``
	  ``brew install libzip``
	  ``export LDFLAGS="-L/usr/local/opt/openssl/lib"``
	  ``export CPPFLAGS="-I/usr/local/opt/openssl/include"``
	  ``export PATH=/usr/local/opt/openssl/bin:$PATH``
	  ``export LD_LIBRARY_PATH=/usr/local/opt/openssl/lib:$LD_LIBRARY_PATH``
	  ``export CPATH=/usr/local/opt/openssl/include:$CPATH``
	  ``export LIBRARY_PATH=/usr/local/opt/openssl/lib:$LIBRARY_PATH``
	  ``export PKG_CONFIG_PATH=/usr/local/opt/openssl/lib/pkgconfig``  
	  ``brew install carthage``

   2. Install iOS real device testing dependencies

	  ``cd ~/robustest/tools/node/lib/node_modules/appium/node_modules/appium-webdriveragent``
	  ``./Scripts/bootstrap.sh``