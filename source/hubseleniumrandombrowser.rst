Randomize the browser selection process
=======================================

The RobusTest deployment at your location may consist of more than one servers.

When starting a test session using the Selenium Hub on a multi-server deployment of RobusTest, it may be desirable to launch the browser each time from a different server machine at random.

This is in opposition to launching the test session on the browser on the same server machine in every run, thereby increasing the load on the server.


In order to randomize this process, i.e., to launch the browser on a different server machine each time, you need to perform the following steps:

**1.** Obtain all browsers on all server machines

**2.** Add the following code to your program:

.. code-block:: Go

    browsers := model.GetAllAvailableSeleniumBrowsers(*db)
	browser := model.Browser{}
	rand.Seed(time.Now().UnixNano())
	rand.Shuffle(len(browsers), func(i, j int) { browsers[i], browsers[j] = browsers[j], browsers[i] })

**3.** Now, iterate through the list of browsers until you find one that matches the desired capabilities you have chosen

**4.** Launch the Selenium test session