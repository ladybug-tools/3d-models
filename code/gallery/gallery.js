
	var coreJSON = 'https://ladybug-analysis-tools.github.io/3d-models/code/json/core/';
	var coreOBJ = 'https://ladybug-analysis-tools.github.io/3d-models/code/obj/core/index.html';

//	var coreJSON = '../json/core/index.html';
//	var coreOBJ = '../obj/core/ladybug-web-obj-core-r3.html';

	var defaultFile = 'readme.md';

	init();

	function init() {

		var css, menu, contents, reader, element;

		css = document.body.appendChild( document.createElement( 'style' ) );
		css.innerHTML =

			'html { height: 100%; }' +
			'body { font: 12pt monospace; height: 100%; margin: 0; padding: 0; }' +
			'a { color: crimson; text-decoration: none; }' +
			'button, input[type=button] { background-color: #eee; border: 2px #eee solid; color: #888; }' +
			'iframe { border: 1px solid; height: 100%; width: 100%; }' +

			'#bars { color: crimson; cursor: pointer; font-size: 24pt; text-decoration: none; }' +
			'#hamburger { left: 325px; height: 100%; position: absolute; top: 20px; transition: left 1s; }' +
			'#menu { background-color: #eee; border: 1px #ccc solid; left: -325px; height: 100%; ' +
				'opacity: 0.85; overflow: auto; padding: 0 10px; position: absolute; top: -20px; transition: left 1s; width: 300px; }' +
//			'#contents { height: 100%; left: 380px; overflow: auto; position: absolute; top: 0; width: ' + ( window.innerWidth - 450 ) + 'px; }' +
			'#contents { margin-left: 380px; max-width: 800px; }' +
			'h2, h3 { margin: 0px; }' +
			'p { margin: 0 0 16px 0; }' +
		'';

		contents = document.body.appendChild( document.createElement( 'div' ) );
		contents.id = 'contents';

		hamburger = document.body.appendChild( document.createElement( 'div' ) );
		hamburger.id = 'hamburger';
		hamburger.innerHTML = '<div id=bars >☰</div>';
		bars.onclick = function() { hamburger.style.left = hamburger.style.left === "0px" ? "325px" : 0; };

		menu = hamburger.appendChild( document.createElement( 'div' ) );
		menu.id = 'menu';

		window.addEventListener ( 'hashchange', hashChange, false );

		element = document.getElementById( 'gallery' );
		defaultFile = element && element.attributes.default ?  element.attributes.default.value : defaultFile;

// https://github.com/showdownjs/showdown

		reader = document.body.appendChild( document.createElement( 'script' ) );

		reader.onload = function() {

			getMarkdown( 'menu.md', menu );

			hashChange();

		};

		reader.src = 'https://cdnjs.cloudflare.com/ajax/libs/showdown/1.3.0/showdown.min.js';

	}

	function hashChange() {

		var styleIframe, styleMarkdown, hashes, fileName, extension;

		styleIframe = 'height: 100%; left: 0; margin: 0; position: absolute; overflow: hidden; top: 0; max-width: ' + window.innerWidth + 'px; width: ' + window.innerWidth + 'px; ';

		hashes = location.hash ? location.hash.slice( 1 ).split( '#' ) : [ defaultFile ];

		fileName = hashes[ 0 ];

		document.title = document.title ? document.title : fileName;

		extension = fileName.split( '.' ).pop().toLowerCase();

		if ( extension === 'md' ) {

			contents.style.cssText = '';
			getMarkdown( fileName, contents );

		} else if ( extension === 'json' || extension === 'js' ) {

			contents.style.cssText = styleIframe;
			contents.innerHTML = '<iframe id=ifr src=' + coreJSON + location.hash + '  ><iframe>';

		} else if ( extension === 'obj' || extension === 'mtl' ) {

			contents.style.cssText = styleIframe;
			contents.innerHTML = '<iframe id=ifr src=' + coreOBJ + location.hash + '  ><iframe>';

		} else {

			contents.innerHTML = '<iframe id=ifr src=' + fileName + ' ><iframe>';

		}

	}

	function getMarkdown( url, target ) {

		var converter, xhr;

		converter = new showdown.Converter( { strikethrough: true, literalMidWordUnderscores: true, simplifiedAutoLink: true, tables: true } );

		xhr = new XMLHttpRequest();
		xhr.open( 'GET', url, true );
		xhr.onload = function() { 

			target.innerHTML = converter.makeHtml( xhr.responseText ); 

		};
		xhr.send( null );

	}
