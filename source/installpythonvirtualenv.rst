.. _install-python-virtual-env:

Python Virtual Environment
==========================


.. role:: bolditalic
  :class: bolditalic

.. role:: underline
  :class: underline


To install Python Virtual Environment on your machine, follow the following instructions:

1. On Windows,

   1. In Windows PowerShell, go to the robustest folder

   2. Run the following commands

      ``easy_install pip``

      1. You can obtain the latest version of pip by running the command ``pip install --upgrade pip``

      2. If you face any permission issues then run the following command: ``pip install  --user  —upgrade pip``

  3. Run the following commands 
  
     1. ``pip install --user virtualenv`` 
  
     2. ``py -m v env virtualenv``
  
     3. ``.\virtualenv\Scripts\activate``    (to activate virtualenv)
  
        1. If you get an error message stating that you are unable to run a script, then run the following command on PowerShell
  
           a. ``Set-ExecutionPolicy RemoteSigned`` and hit Enter
           b. Type **A** and hit Enter
           c. Now run the activate command above

     4. ``pip install -r requirements.txt``

        * The requirements.txt file will be available within the robustest folder

     5. ``deactivate``

  4. Create the VIRT_ENV environment variable

     1. In the Windows Search bar, search using the string ‘*env*’
     2. Click on the option ‘*Edit the system environment variables*’
     3. Click on the button ‘*Environment Variables*’
     4. Under the section ‘*User Variables*’, click on the button ‘*New*’

        1. Enter *VIRT_ENV* in the ‘*Variable name*’ field
        2. Enter the path to the robustest\virtualenv folder in the ‘*Variable value*’ field. This is usually of the form *C:\\\\Users<username>\\robustest\\virtualenv*
     5. Go to the folder ~/robustest/virtualenv and rename the folder ‘Scripts’ to ‘bin’

2. For Mac and Linux,

   1. On the terminal, go to the robustest folder

   2. Run the following commands

      1. ``easy_install pip``
      2. ``pip install virtualenv``
      3. ``virtualenv virtualenv``
      4. ``source ~/robustest/virtualenv/bin/activate``
      5. ``pip install -r requirements.txt``

         * The requirements.txt file will be available within the robustest folder

      6. ``deactivate``
