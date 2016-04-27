Supported File Formats
===

It would be a good thing to have access to several dozen different 3D model files that Ladybug Web can use for test cases and for demos.

There is a huge number of 3D models available on the web but almost all - such as 3D Warehouse, Clara.io and many more - require you to download models to your hard disk before using them. This is very old school.

For testing and demo purposes, the web needs a repository of 3D FOSS AEC models available to all from CORS-enabled servers such as GitHub

Currently we have importers for Three.js JSON files and also for OBJ files. Next will be an effort on the up and coming GLTF format

## Possible Support

Here's a list of the 3D model file formats supported - more or less - by Three.js. These are the files listed in the [Three.js Editor]( http://mrdoob.github.io/three.js/editor/ ). 
Many are quite obscure, but you might find one or two that you like.

* amf
* awd
* babylon
* babylonmeshdata
* ctm
* dae
* fbx
* js
* json
* 3geo
* 3mat
* 3obj
* 3scn
* kmz
* md2
* obj
* playcanvas
* ply
* stl
* vtk
* wrl

## Currently Supported


### Three.js JSON

There are four revisions of the Three.js JSON 3D model file format. Each revision is quite different. The formats are described here: https://github.com/mrdoob/three.js/wiki

In particular there was a big jump between R3 and R4. They each require different loader scripts.
Each revision supports geometry, objects (geometry + material) and scenes( objects + cameras + lights ).
Also the revision each supports importing ASCII and binary data - again with the addition of a special script.

This implies a grid of a dozen or so formats, but this issue is bigger than than because not all files obey all standards.
or example we have seen files that say they are objects but include no material, or that say they are scenes but contain no cameras or light.
There are files that contain features that are no longer supported. These usually do not cause crashes, but endless error messages prevent debugging

### OBJ and MTL

MTL files add material properties to OBJ files - and therefore add an extra level of complexity to the loading process



### STL 

STL files are the the darling of the 3D printer industry. There huge numbers of STL sample files available.
Importing and loading STL files has proved to be fairly painless. 
Unfortunately, we have not found any terrific AEC files.

### FBX

The current Three.js loader for FBX files seems to work quite well. There is a very large number of AEC FBX files on the web.
Unfortunately the Three.js FBX reader reads only ASCII files and all the AEC FBX files are in binary format. 

 

## Common Issues

### Scale

Models come in a wide variety of scales. Some to tiny to see. Some too large.

A zoom-to-fit feature is under development


### Position

Models are sometimes situated far from the origin. Again this may cause the model to be invisible when you first view it.


### Orientation

With most traditional computer graphics apps, the X and Y coordinates are parallel with the face of the screen and Z comes out of the screen

With most traditional CAD apps, the X and Y are parallel with the floor and Z points toward the ceiling.

Three.js is written as a computer graphics app, but a good number of models ae created by CAD apps and come in facing the wrong way

### View

It may be the most beautiful view in the world, but you may not always be able to see that in the default view.


### CORS Issues

[Cross origin resource sharing (CORS)]( https://en.wikipedia.org/wiki/Cross-origin_resource_sharing ) issues are ongoing.

The primary CORS issue is gaining acces to subsidiary files such as bitmap textures.

