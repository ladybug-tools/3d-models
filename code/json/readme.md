<span style=display:none; >
[You are now in a GitHub source code view - click this link to view the home page]
( http://ladybug-analysis-tools.github.io/3d-models/code/json/ "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/3d-models/tree/gh-pages/code/json/'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[JSON Code Read Me]( index.html )
===

 
### Browser Code

View files from this repository and from a variety of other repositories on GitHub

Browsers display nearly raw or 'uncurated' models.

* File listings are gathered in real-time from the given repo.
* Models use varying scales and units. We try to make the model fit the screen
* Models are positioned all over the place. We try to position the model in the center of the screen
* For Three.js, Z-axis is out the screen. For many apps, its the Y-axis coming at you - so a number of models are rotated incorrectly. We don't know how to correct for this

Browser code just create the users experience. 
It calls its 'core' counterpart to do the opening loading and display of the models.
The communication between the apps is via location.hash through the core being embedded in an iframe in the browser app


### Opener Code

Open and prepare files 

* The scripts provide a user interface for setting viewing parameters
* These scripts manage their respective cores via standard iframe protocols


### Core Code

The basic core or engine to load and display 3D files

* These scripts have minimal user interface
* Their job is to examine the data and send it to the appropriate loader
* They are designed to work inside iframes 
