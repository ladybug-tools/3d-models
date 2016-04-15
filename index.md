<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]( http://ladybug-analysis-tools.github.io/3d-models/ "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/3d-models/'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >

[Ladybug Analysis Tools]( http://ladybug-analysis-tools.github.io/ ) »

[Ladybug Web 3D Models]( ./index.html#index.md )
===

_Not just pretty things to look at: 3D model data and viewers you can use for building and testing your 3D apps_


## &#128279; [Engel House Gallery]( ./obj/engel-house/index.html )

A first glimpse at the possibilities offered by the Ladybug Web 3D Models viewers

* Menus to help you select what you want to see
* Viewers to display content in 3D
* Menus and read me files created using Markdown

## &#128279; [JSON Gallery]( ./viewers/json/gallery/index.html )

* First attempt at building a JSON file gallery

## &#128279; [OBJ Gallery]( ./viewers/obj/gallery/index.html )

* First attempt at building an OBJ file gallery


***
_The scripts used to create and support the content_

## &#128279; [Ladybug Web JSON Browser]( ./viewers/json/browser/index.html )

View Three.js JSON and JS files from this repository - and from a variety of other repositories on GitHub

## &#128279; [Ladybug Web OBJ Browser]( ./viewers/obj/browser/index.html )

View OBJ and MTL files from this repository - and from a variety of other repositories on GitHub

### Notes

Both the above viewers display nearly raw or 'uncurated' models.

* File listings are gathered in real-time from the given repo.
* Models use varying scales and units. We try to make the model fit the screen
* Models are positioned all over the place. We try to position the model in the center of the screen
* For Three.js, Z-axis is out the screen. For many apps, its the Y-axis coming at you - so a number of models are rotated incorrectly. We don't know how to correct for this

Both these apps just create the users experience. 
They invoke their respective 'core' counterparts to do the opening loading and display of the models.
The communication between the apps is via location.hash through the core beng embedded in an iframe in the browser app


## &#128279; [Ladybug Web JSON Opener]( ./viewers/json/opener/index.html )

* Open and edit JSON files 

## &#128279; [Ladybug Web OBJ Opener]( ./viewers/obj/opener/index.html )

* Open and edit OBJ and MTL files 

### Notes

* The scripts provide a user interface for setting viewing parameters
* These scripts manage their respectives cores via standatd iframe protocols



## &#128279; [Ladybug Web JSON Core]( ./viewers/json/core/index.html )

The basic core or engine to load and display Three.js JSON and JS files

## &#128279; [Ladybug Web OBJ Core]( ./viewers/obj/core/index.html )

The basic core or engine to load and display OBJ and MTL filea

### Notes

* These scripts have minimal user interface
* Their job is to examine the data and send it to the appropriate loader
* They are designed to work inside iframes 

## Concept

Ladybug Web is about helping you carry out a variety of analyses on your building projects.

### Issue: 3D Models available online

_The patterns we see that require solutions_

In order to test and verify that our studies are valid and that you can submit projects for study, 
we need a good number of building models - a '[corpora]( https://en.wikipedia.org/wiki/Text_corpus )' of 3D data.

There are many thousands of 3D models online already, but hardly any are accessible online. 
Sites such 3D Warehouse, Clario, SketchFab all require you to download models to your local hard disk.

* Downloading is the enemy of online, timely, collaboration

### Mission
The mission of this site is to make a large number of models available for our testing. 
And since they are online and FOSS, you can use them too - for whatever purpose serves your needs.


### Issue: Share model views with colleagues and friends

The are many 3D model viewers available - but you must download and install them.
If you just want to share a particular view with a friend or colleague, asking them to download and instal an app is not a good solution.
Creating a 2D thumbnail is the usual answer, but that means not sharing the full 3D data

The 3D model web sites such 3D Warehouse create their own views of the model. Adjusting for lighting and initial camera position is not possiblee.
    
### Mission

Provide viewers anybody can use to view, edit and share  3D models online

### Issue: Code for beginners and designers

Currently available apps tend to be large and complex and require 'full stack' programmes

### Mission

To supply code where all you need to know is entry level JavaScript.
Even the CSS and HTML are created and written in JavaScript
No need to know jQuery, Node, MySQL or whatever.


### Issue: Code has many external dependencies

Installing the app is like trying to create a 3D spider web.

### Mission

To supply a number of small and simple apps that may be custom tailored by ordinary people in engineering and design offices.
All scripts just click and run. Download any script to your computer or to another server and it still runs when you click on it,

Open a script and everything you need to know is right there.

### Issue: Overwhelming complexities are avoided

Models are in 3D worlds. User experience is on a 2D user interface. 
Realtime updates requires attention sixty times every second. User interfaces are whenever event-driven.
 
### Mision

Allow multiple separate 'walled gardens' but establish clear, viable communication between the gardens
Use iframes as the vehicle. The provides extra layer of security, enables the use of multiple processes or threads per app.

At some time, more external .js files will certainly be offered. 
But at this early stage we have not yet decided what are the most likely candidates to be exported.   



## Licensing

Currently the work herein is under the MIT license

But consideration should be given to a dual license - either MIT or GPL

And furthermore, the models here are content much more than code, therefore a Creative Commons license may be appropriate

## Issues

Probably a majority of the files that you can view here had issues the first time they were opened by one of the scripts.
Each of these issues has been used to improve the process.
The more models we can access, the more issues we will find and the better we will get

 
