
	var objectMesh;

	function loadOBJFileByURL( index ) {

		file = files[ index ];

//console.log( '', file );

		var loader = new THREE.OBJLoader();
		loader.crossOrigin = 'anonymous';
		loader.load( file[ 2 ], onLoad, onProgress, onError );

		function onLoad( object ) {

			scene.remove( objectMesh );
			positions = 0;

			object.traverse( function ( child ) {

				if ( child instanceof THREE.Mesh ) {

					child.material = new THREE.MeshNormalMaterial();

					positions += child.geometry.attributes.position.count;

				}

			} );

			objectMesh = object;

			scl = file[ 3 ];
			objectMesh.scale.set( scl, scl, scl );
			objectMesh.rotation.x = file[ 4 ] || 0 ;

			scene.add( objectMesh );



			menuData.innerHTML = 

				'<p>Positions(vertices): ' + positions.toLocaleString() + '</p>' +

			'';

			controls.autoRotate = true;

		}

		function onProgress( xhr ) {

			if ( xhr.total ) {

				var percentComplete = xhr.loaded / xhr.total * 100;

				menuInfo.innerHTML = '<p>' + file[ 0] + ': ' + percentComplete.toFixed() + '% or ' + xhr.loaded.toLocaleString() + ' bytes of ' + xhr.total.toLocaleString() + ' downloaded <p>';

			} else {

				menuInfo.innerHTML = file[ 0] + ': ' + xhr.loaded + ' bytes loaded <br>';

			}

		}

		function onError ( xhr ) { menuInfo.innerHTML = 'An error happened'; };

	}