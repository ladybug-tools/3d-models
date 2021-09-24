<span style=display:none; >[You are now in a GitHub source code view - click this link to view the home page]( http://ladybug-analysis-tools.github.io/3d-models/ "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/ladybug-analysis-tools/3d-models/';
value='You are now in the home page view - Click this button to view the read me file and the source code' >


# [Ladybug Web 3D Models Concept / Manifesto]( ./index.html#concept.md )



_Ladybug Web is about helping you carry out a variety of analyses on your building projects_

_Real world patterns we see that require solutions_


### Issue / Pattern: 3D Models Readily Available Online

There are many thousands of 3D models online already, but hardly any are accessible online.
Sites such 3D Warehouse, Clario, SketchFab all require you to download models to your local hard disk.
And having to download files is the enemy of online, timely, collaboration

### Mission / Solution

In order to test and verify that our studies are valid and that you can submit projects for study,
we need a good number of building models - a '[corpora]( https://en.wikipedia.org/wiki/Text_corpus )' of 3D data.
The mission of this site is to make a large number of models available for our testing.
And since they are online and FOSS, you can use them too - for whatever purpose serves your needs.

***

### Issue: Share Model Views with Colleagues and Friends

{Should this be split into several patterns? It involves both viewer apps and setting parameters for views.}

The are many 3D model viewers available - but you must download and install them.
If you just want to share a particular view with a friend or colleague, asking them to download and install an app is not a good solution.
Creating a 2D thumbnail is the usual answer, but that means not sharing the full 3D data

The 3D model web sites such 3D Warehouse create their own views of the model. Adjusting for lighting and initial camera position is not possible.

### Mission

Provide online viewers anybody can use to view, edit and share 3D models online.
Viewers and models you can host anywhere.
Viewers with Models where you can edit, set and share parameters for scale, position, rotation, camera position and target and more.

***

### Issue: 2D is not 3D

When thumbnails of 3D models are required, they are to this day most often composed of 2D bitmaps.
2D images are a poor substitute for 3D.


### Mission

All 3D models always available and manipulable in 3D.

***

### Issue: Code for Beginners and Designers

Currently available apps tend to be large and complex and require 'full stack' programmes

### Mission

To supply code where all you need to know is entry level JavaScript.
Even the CSS and HTML are created and written in JavaScript
No need to know jQuery, Node, MySQL or whatever.

***

### Issue: Code that stands Alone

Code often has many external dependencies.

Installing the app is like trying to create a 3D spider web.

### Mission

To supply a number of small and simple apps that may be custom tailored by ordinary people in engineering and design offices.
All scripts just click and run. Download any script to your computer or to another server and it still runs when you click on it,

Open a script and everything you need to know is right there.

***

### Issue: Overwhelming complexities are avoided

Models are in 3D worlds. User experience is on a 2D user interface.
Realtime updates requires attention sixty times every second. User interfaces are whenever event-driven.

### Mission

Allow multiple separate 'walled gardens' but establish clear, viable communication between the gardens
Use iframes as the vehicle. The provides extra layer of security, enables the use of multiple processes or threads per app.

At some time, more external .js files will certainly be offered.
But at this early stage we have not yet decided what are the most likely candidates to be exported.

***

### Issue: Start with what you know already

Many times in learning to code, you need to learn stuff before you can learn stuff
For example, with HTML yu have to learn that <br> and <p> make line breaks.
If you don'y use these then all your text is jumbled together


### Mission

Use of Markdown is an example of the way things should be.
You can start with just writing text. And that text will appear on the web with line breaks as you would expect.
The bit by bit you ca learn how to control the appearance of the text and add things such as links and images.
