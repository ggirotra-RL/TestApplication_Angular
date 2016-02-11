# Single Page Application AngularJS

Application does the following Steps

1. Build a page having a table 
2. page will have 2 drop downs , second drop down to be populated based on selection of first drop down.
 
First Drop Down - a.json , front end will be mapped to "paramValue" field in JSON
 
Second Drop down - 
 
If user selects "REMOTE COLLECTION" from first drop down , second will be populated using c.json , if user selects "DELIVERY" from first drop down, second will be populated using d.json
 
3. Once user makes a selection from second drop down - publish a table using e.json with following fields at front end - 
 
1. Delivery Start Point 
2. Type
3. Catchment
4. Slot Type
4. Start Type
5. Service Area
 
with 1, 2 and 4 sortable and table row having alternate row colors and filter on filed 3. Table header will be "#b3d4fc" and alternate row color being "#fff" and "#eee"
 
Make 1 as clickable and on click on same open a simple modal window to display details of the item clicked using the same e.json .. no need to have fancy modal window, just simple modal window displaying following information (label and value) - 
 
a. deliverystartpointName
b.Collection Point Name
c. Service Area
d. Slot Type
e. task type
f. Start Date
g. End Date
