
			var camera, scene, renderer;
			var controls;

			var objects = [];
			var targets = { captainamerica: [], ironman: [], hulk: [], grid: [] };

			init();
			animate();

			function init() {

				camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 3000;

				scene = new THREE.Scene();

				// table
    
        for ( var i = 0; i < captainamerica.length; i += 5 ) {
					var element = document.createElement( 'div' );
					element.className = 'element-black';
					var object = new THREE.CSS3DObject( element );
					object.position.x = Math.random() * 4000 - 2000;
					object.position.y = Math.random() * 4000 - 2000;
					object.position.z = Math.random() * 4000 - 2000;
					scene.add( object );
					objects.push( object );
                   
					if ((i < 46&& i>25)||(i<85&&i>70)||(i<105&&i>90)||(i==130)||(i==155)) {
						//2nd to 5th row
					    element.className = 'element-blue';
					}
           if((i<210&&i>175)||(i==250)||(i==225) ||(i<245&&i>230)||(i<325&&i>310)) {//6th to 9th row
           	 element.className = 'element-blue';
           }
           if((i<365&&i>350)||(i<395&&i>370)||(i<425&&i>410)||(i<470&&i>455)) {	//10th to 11th row
           	 element.className = 'element-blue';
           }
           if((i<490&&i>475)||(i<645&&i>625)||(i<660&&i>645)) {	//11th row to
           	 element.className = 'element-blue';
           }
					if((i<95&&i>80)||(i<155&&i>130)||(i<480&&i>465)||(i==535)||(i==545)||(i==555)) {
						 element.className = 'element-white';
					}
					if((i==595)||i==605||i==615){
						 element.className = 'element-white';
					}
					if((i==270)||(i<290&&i>275)||(i==295)||(i<350&&i>325)){
						 element.className = 'element-nude';
					}
					if((i<435&&i>420)||(i<455&&i>440)||(i<505&&i>490)||(i<525&&i>510)||(i==530)||(i==540)||(i==550)) {//first red
						 element.className = 'element-red';
					}
						if((i==590)||i==600||i==610||(i<685&&i>665)||i==690||(i<715&&i>700)) {//second red
						 element.className = 'element-red';
					}

					var object = new THREE.Object3D();
					object.position.x = ( captainamerica[ i + 3 ] * 60) - 1200;
					object.position.y = - ( captainamerica[ i + 4 ] * 60) + 900;

					targets.captainamerica.push( object );

				}

				// ironman
				for (var i = 0; i < ironman.length; i += 5) {
					var element = document.createElement( 'div' );
					var object = new THREE.CSS3DObject( element );
					object.position.x = Math.random() * 10022 - 51;
					object.position.y = Math.random() * 10041 - 222;
					object.position.z = Math.random() * 10022 - 1200;
					scene.add( object );

				  var object = new THREE.Object3D();
					object.position.x = ( ironman[ i + 3 ] * 60) + 900;
					object.position.y = - ( ironman[ i + 4 ] * 60) + 500;
					targets.ironman.push( object );
				}



				// hulk
				for (var i = 0; i < hulk.length; i += 5) {
					var element = document.createElement( 'div' );
					var object = new THREE.CSS3DObject( element );
					object.position.x = Math.random() * 10022 - 51;
					object.position.y = Math.random() * 10041 - 222;
					object.position.z = Math.random() * 10022 - 1200;
					scene.add( object );

				  var object = new THREE.Object3D();
					object.position.x = ( hulk[ i + 3 ] * 60) + 900;
					object.position.y = - ( hulk[ i + 4 ] * 60) + 500;
					targets.hulk.push( object );
				}

				// var vector = new THREE.Vector3();

				// for ( var i = 0, l = objects.length; i < l; i ++ ) {

				// 	var phi = i * 0.175 + Math.PI;

				// 	var object = new THREE.Object3D();

				// 	object.position.x = 900 * Math.sin( phi );
				// 	object.position.y = - ( i * 8 ) + 450;
				// 	object.position.z = 900 * Math.cos( phi );

				// 	vector.x = object.position.x * 2;
				// 	vector.y = object.position.y;
				// 	vector.z = object.position.z * 2;

				// 	object.lookAt( vector );

				// 	targets.hulk.push( object );
				// }

				// grid

				for ( var i = 0; i < objects.length; i ++ ) {

					var object = new THREE.Object3D();

					object.position.x = ( ( i % 5 ) * 400 ) - 800;
					object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
					object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

					targets.grid.push( object );

				}

				//

				renderer = new THREE.CSS3DRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.domElement.style.position = 'absolute';
				document.getElementById( 'container' ).appendChild( renderer.domElement );

				//

				controls = new THREE.TrackballControls( camera, renderer.domElement );
				controls.rotateSpeed = 0.5;
				controls.minDistance = 500;
				controls.maxDistance = 6000;
				controls.addEventListener( 'change', render );

				var button = document.getElementById( 'captainamerica' );
				button.addEventListener( 'click', function ( event ) {
					$('body').css('background','url("images/captainamerica.jpg") center center fixed');
					$('body').css('background-size','cover');
					function addColor(array,color) {
						if(array.indexOf(i) != -1) {
								// console.log(i);
								$('#container > div > div > div').eq(i).removeAttr('class').attr('class', '').addClass(color);
						}
					}
					transform( targets.captainamerica, 2000 );
					var blackArray = [0,1,2,3,4,5,10,11,12,13,14,21,22,23,24,25,32,33,34,
					35,42,43,44,46,49,51,52,53,55,58,60,61,62,65,70,73,74,79,80,81,82,87,
					88,91,98,101,102,105,112,113,114,115,116,117,124,125,129,132,133,137,
					139,140,143,144,145,146];
					var blueArray = [6,7,8,9,15,16,19,20,26,31,36,37,38,39,40,41,45,47,48,
					50,63,64,71,72,75,76,77,78,83,84,92,93,96,97,126,127,128,130,131];
					var nudeArray = [54,56,56,57,59,66,67,68,69];
					var redArray = [85,86,89,90,99,100,103,104,106,108,110,118,120,122,134,135,136,138,141,142];
					var whiteArray = [17,18,27,28,29,30,94,95,107,109,111,119,121,123];
					var len = $('#container > div > div > div').length;
					for( var i = 0;i < len; i++) {
						addColor(blackArray,'element-black');
						addColor(redArray,'element-red');
						addColor(nudeArray,'element-nude');
						addColor(blueArray,'element-blue');
						addColor(whiteArray,'element-white');
					}
				}, false );

				var button = document.getElementById( 'ironman' );
				button.addEventListener( 'click', function ( event ) {
					$('body').css('background','url("images/ironman.jpg") center center fixed');
					$('body').css('background-size','cover');
					function addColor(array,color) {
						if(array.indexOf(i) != -1) {
								$('#container > div > div > div').eq(i).removeAttr('class').attr('class', '').addClass(color);
						}
					}
					transform( targets.ironman, 2000 );
					var blackArray = [0,1,2,3,4,5,6,13,14,21,22,31,32,41,42,44,47,49,50,51,53,
					56,58,59,60,63,68,71,72,77,78,79,80,85,86,89,96,99,100,101,102,
					109,112,113,120,121,122,123,126,130,132,134,138,139,140,141,144,145,146];
					var redArray = [7,8,9,10,11,12,15,16,17,18,19,20,23,25,26,27,28,30,33,36,37,40,61,
					62,69,70,73,74,75,76,81,82,83,84,90,91,94,95,103,104,107,108,110,111,114,115,116,117,118,119,133,142,143];
					var yellowArray = [24,29,34,35,38,39,43,45,46,48,52,54,55,57,64,65,66,67,87,88,97,98,124,125,127,128,129,135,136];
					var blueArray = [105,106];
					var transparentArray = [131];
					var len = $('#container > div > div > div').length;
					for( var i = 0;i < len; i++) {
						addColor(blackArray,'element-black');
						addColor(redArray,'element-red');
						addColor(yellowArray,'element-yellow');
						addColor(blueArray,'element-blue');
						addColor(transparentArray,'element-transparent');
					}

				}, false );

				var button = document.getElementById( 'hulk' );
				button.addEventListener( 'click', function ( event ) {
					$('body').css('background','url("images/hulk.jpg") center center fixed');
					$('body').css('background-size','cover');
					function addColor(array,color) {
						if(array.indexOf(i) != -1) {
								$('#container > div > div > div').eq(i).removeAttr('class').attr('class', '').addClass(color);
						}
					}
					transform( targets.hulk, 2000 );
					var blackArray = [0,1,2,3,4,5,6,7,14,15,21,25,26,27,31,32,35,36,38,39,40,
					43,45,46,53,54,55,56,58,61,63,64,65,67,70,72,73,74,77,82,85,86,91,92,93,94,
					99,100,103,110,113,114,115,116,123,126,127,134,135,136,137,140,144,145,147,
					151,152,153,156,157,158];
					var hairGreenArray = [8,9,10,11,12,13,16,17,18,19,20,22,23,28,29,30,33,34,44];
					var bodyGreenArray = [37,41,42,47,48,49,50,51,52,57,59,60,62,66,68,69,71,75,76,
					78,79,80,81,83,84];
					var blueArray = [];
					var transparentArray = [131];
					var len = $('#container > div > div > div').length;
					for( var i = 0;i < len; i++) {
						addColor(blackArray,'element-black');
						addColor(hairGreenArray,'element-hair-green');
						addColor(bodyGreenArray,'element-sample');
						addColor(blueArray,'element-blue');
						addColor(transparentArray,'element-transparent');
					}

				}, false );

				var button = document.getElementById( 'grid' );
				button.addEventListener( 'click', function ( event ) {

					transform( targets.grid, 2000 );

				}, false );

				transform( targets.captainamerica, 2000 );

				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function transform( targets, duration ) {

				TWEEN.removeAll();

				for ( var i = 0; i < objects.length; i ++ ) {

					var object = objects[ i ];
					var target = targets[ i ];

					new TWEEN.Tween( object.position )
						.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

					new TWEEN.Tween( object.rotation )
						.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

				}

				new TWEEN.Tween( this )
					.to( {}, duration * 2 )
					.onUpdate( render )
					.start();

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

				render();

			}

			function animate() {

				requestAnimationFrame( animate );

				TWEEN.update();

				controls.update();

			}

			function render() {

				renderer.render( scene, camera );

			}
