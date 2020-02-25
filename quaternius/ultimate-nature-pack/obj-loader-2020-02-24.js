// copyright 2020 Theo Armour. MIT license.
// See pushme-pullyou/templates-01/modules/template
// 2020-02-13
/* divContent */
// jshint esversion: 6
// jshint loopfunc: true


const OL = {};



OL.init = function () {

	OLdivObjLoader.innerHTML = OL.getMenu();

	for ( let i = 1; i < 6; i++ ) {

		OL.loadObj( i );

	}

	//zoomObjectBoundingSphere( group )

};

OL.path = "https://cdn.jsdelivr.net/gh/ladybug-tools/3d-models@gh-pages/quaternius/ultimate-nature-pack/";

OL.fileName = "CommonTree_";

OL.getMenu = function () {

	const htm = `
<details>

	<summary>
		OBJ Loader

		<span class="couponcode">??<span class="coupontooltip">aaa bbb ccc 123 456</span></span>

	</summary>

	<p>ccc</p>

	<p>vvvvv</p>

	<div id=OLdivMessage ></div>

</details>`;

	return htm;

};



OL.loadObj = function (i ) {

	var manager = new THREE.LoadingManager();

	manager.addHandler( /\.dds$/i, new THREE.DDSLoader() );

	new THREE.MTLLoader( manager )
		.setPath( OL.path )
		.load( OL.fileName + i + '.mtl', function ( materials ) {

			materials.preload();

			new THREE.OBJLoader( manager )
				.setMaterials( materials )
				.setPath( OL.path )
				.load( OL.fileName + i + '.obj', function ( obj ) {

					object = obj;
					object.position.x = 60 * i -200;
					object.rotation.x = Math.PI / 2;
					object.rotation.y = 7 * Math.random();
					object.scale.set( 30, 30, 30 );
					object.children[ 0 ].receiveShadow = true;
					object.children[ 0 ].castShadow = true;
					scene.add( object );

				} );

		} );



}

