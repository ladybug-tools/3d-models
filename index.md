<span style=display:none; >
[You are now in a GitHub source code view - click this link to view the home page]
( https://ladybug-analysis-tools.github.io/3d-models/ "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/3d-models/'; 
value='You are now in the home page view - Click this button to view the read me file and the source code' >


[Ladybug Web 3D Models]( index.html )
===

_Not just pretty things to look at: 3D model data and viewers you can use for building and testing your 3D apps_

## Manifesto

* To supply architecture, engineering and construction (AEC) models in 3D for a variety of locations for a variety of conditions on all continents
* To supply models that have been used as evidence in real-world planning scenarios
* To supply latitude, longitude, north point, authors, license for all models
	* Positions will be suggested from imaginary projects
* To provide instructions for things to do and try with each models
* To supply models that load quickly and without error

There's much more on the [Concept / Manifesto ]( https://ladybug-analysis-tools.github.io/3d-models/#concept.md ) age

***

This repository provides you with content and code

## [Content]( https://ladybug-analysis-tools.github.io/3d-models/content/index.html )

The content comes in two flavors:

* Files: models you can copy, link to, edit and use and share however you want
* Galleries: curated set of files, sample content and code you can use to build your own menus, reports and  demos


### [JSON Files]( https://ladybug-analysis-tools.github.io/3d-models/content/json/index.html )

Currently supplies a small number AEC models in Three.js JSON file format

### [OBJ Files]( https://ladybug-analysis-tools.github.io/3d-models/content/obj/index.html )

Currently supplies three AEC models in OBJ format


### [Galleries]( https://ladybug-analysis-tools.github.io/3d-models/content/galleries/ )

A first glimpse at the possibilities offered by the Ladybug Web 3D Models viewers

* Menus to help you select what you want to see
* Viewers to display content in 3D
* Menus and read me files created using Markdown


The Galleries folder contains a three galleries of files. 
There's also a link to the EngleHouse gallery in the OBJ files



***

## [Code]( https://ladybug-analysis-tools.github.io/3d-models/code/index.html )

_Scripts you can use to create and support 3D content_

## JSON

<!--
#### [Ladybug Web JSON Browser]( ./code/json/browser/index.html )

#### [Ladybug Web JSON Opener]( ./code/json/opener/index.html )

#### [Ladybug Web JSON Core]( ./code/json/core/index.html )
-->

## OBJ

<!--
#### [Ladybug Web OBJ Browser]( ./code/obj/browser/index.html )

#### [Ladybug Web OBJ Opener]( ./code/obj/opener/index.html )

#### [Ladybug Web OBJ Core]( ./code/obj/core/index.html )
-->

### Browser Code


View files from this repository and from a variety of other repositories on GitHub

Both the above browsers display nearly raw or 'uncurated' models.

* File listings are gathered in real-time from the given repo.
* Models use varying scales and units. We try to make the model fit the screen
* Models are positioned all over the place. We try to position the model in the center of the screen
* For Three.js, Z-axis is out the screen. For many apps, its the Y-axis coming at you - so a number of models are rotated incorrectly. We don't know how to correct for this

Both these apps just create the users experience. 
They invoke their respective 'core' counterparts to do the opening loading and display of the models.
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


***

<center title="dingbat" >
# <a href=javascript:contents.scrollTop=0; style=text-decoration:none; ><img src="https://ladybug-analysis-tools.github.io/images/ladybug-logo.png" width=32 ></a>
</center>
