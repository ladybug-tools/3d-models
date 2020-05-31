
	if ( location.origin === 'http://' || location.origin === 'https://' ) {

		var coreJSON = 'http://ladybug-analysis-tools.github.io/3d-models/code/json/core/ladybug-web-json-core-r3.html';
		var coreOBJ = 'http://ladybug-analysis-tools.github.io/3d-models/code/obj/core/ladybug-web-obj-core-r3.html';

	} else {

		var coreJSON = '../../../code/json/core/ladybug-web-json-core-r3.html';
		var coreOBJ = '../../../code/obj/core/ladybug-web-obj-core-r3.html';

	}

	var defaultFile = 'README.md';

	init();

	function init() {

		var css, menu, contents, reader;

		css = document.body.appendChild( document.createElement( 'style' ) );
		css.innerHTML =

			'body { font: 12pt monospace; margin: 0; }' +
			'a { color: crimson; text-decoration: none; }' +
			'button, input[type=button] { background-color: #eee; border: 2px #eee solid; color: #888; }' +
			'iframe { border: 0px solid; height: 100%; width: 100%; }' +

			'#menu { box-sizing: border-box; background-color: #ccc; height: 100%; max-width: 300px; overflow: auto; padding: 0 10px; position: absolute; }' +
			'#contents { height: 100%; left: 350px; overflow: auto; position: absolute; top: 0; width: ' + ( window.innerWidth - 370 ) + 'px; }' +

		'';

		contents = document.body.appendChild( document.createElement( 'div' ) );
		contents.id = 'contents';

		menu = document.body.appendChild( document.createElement( 'div' ) );
		menu.id = 'menu';

		window.addEventListener ( 'hashchange', hashChange, false );


		reader = document.body.appendChild( document.createElement( 'script' ) );

		reader.onload = function() {

			getMarkdown( 'menu.md', menu );

			hashChange();

		};

		reader.src = 'http://cdnjs.cloudflare.com/ajax/libs/showdown/1.3.0/showdown.min.js';


	}

	function hashChange() {

//		var styleIframe, styleMarkdown, hashes, fileName, extension;

		styleIframe = 'left: 0; overflow: hidden; position: absolute; top: 0; width: 100%; ';
		styleMarkdown = 'left: 350px; overflow: auto; position: absolute; top: 0; width: ' + ( window.innerWidth - 370 ) + 'px; ';

		hashes = location.hash ? location.hash.slice( 1 ) : defaultFile;

		hashes = hashes.split( '#' );

		fileName = hashes[ 0 ];

		document.title = document.title === '' ? fileName | document.title;

		extension = fileName.split( '.' ).pop().toLowerCase();

		if ( extension === 'md' ) {

			contents.style.cssText = styleMarkdown;
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

	function getMarkdown( fileName, target ) {

		var converter, xhr;

		converter = new showdown.Converter( { strikethrough: true, literalMidWordUnderscores: true, simplifiedAutoLink: true, tables: true } );

		xhr = new XMLHttpRequest();
		xhr.open( 'GET', fileName, true );
		xhr.onload = function() {

			target.innerHTML = converter.makeHtml( xhr.responseText );

		};
		xhr.send( null );

	}

