.. _selecting-device-groups-for-job:

Using Device Groups to configure device selection for job creation API
======================================================================

You can use the Groups feature to enable selection of devices from a specific set or sets of devices.

To be able to use this feature, you need to ensure there is at least one group created and your project and desired devices are part of that group.

Once you have one or more groups, you can use the deviceGroupsIDs attributes in the payload for job creation API and specify which groups should the devices be picked from. You can check the API details at http://api.robustest.com/#tag/job/paths/~1v3~1job~1new/post


deviceGroupsIDs is an array of strings.

Possible values for deviceGroupsIDs attribute are

1. An array specifying one or more groupIDs - to direct the system to pick up devices only from the group(s) whose IDs have been provided in the array

2. An array specifying the value ["any"] - to direct the system to pick up available devices from any of the groups that the project is part of

3. An empty array - to direct the system to pick up any eligible and available device i.e. device could be part of a group or not

