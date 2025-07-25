.. _install-idevice-location:

idevicelocation
===============

.. role:: bolditalic
  :class: bolditalic

.. role:: underline
  :class: underline


To install idevicelocation on your machine, follow the following instructions:

1. Download complete project from `<https://github.com/JonGabilondoAngulo/idevicelocation>`

   * A zip file with all folders is downloaded

2. Unzip the downloaded file

3. Run the following commands:

   a. ``./autogen.sh``
   b. ``make``
   c. ``sudo make install``

4. If you face any path related issues while running the autogen.sh script above, run the ‘export’ commands from the :ref:`install-homebrew` page and then execute the ``./autogen.sh`` command again

5. Copy the binary file idevicelocation from the folder ‘src’ in the unzipped folder and move it to the folder ~/robustest/tools/idevicelocation