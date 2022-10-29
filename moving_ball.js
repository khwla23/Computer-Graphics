const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 70;

const renderer = new THREE.WebGLRenderer({alpha: true}
    );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//const geometry = new THREE.SphereGeometry(10,10,10)
//const material = new THREE.MeshNormalMaterial({wireframe : true})
const loader =  new THREE.TextureLoader();
loader.load("pic/football.jpg", function(texture){
    scene.background = texture;
});
const geometry = new THREE.CircleGeometry( 15, 32 );
const material = new THREE.MeshBasicMaterial( 
    { map: loader.load("pic/ball.png") },
    opacity = 0.5,
    transparent = true ); 
const sphere = new THREE.Mesh(geometry, material)
sphere.position.set(-5,0,0)
scene.add(sphere)
//when a key is press down
//space = 32, left = 37, right = 39, forward =38 , backward =40, backspace = 8
// document.onkeydown = function(e){
//     if(e.keyCode === 37 ){ //left
//         sphere.position.x -=1
//     } else if(e.keyCode === 39 ){ //right
//         sphere.position.x +=1
//     } else if(e.keyCode === 38 ){//up
//         sphere.position.y +=1
//     } else if(e.keyCode === 40 ){// down
//         sphere.position.y -=1
//     } else if (e.keyCode === 32){ //increase
//         sphere.position.z +=1
//     }else if (e.keyCode === 8){ // decrease
//         sphere.position.z -=1
//     }

// }

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if(keyCode === 37 ){ //left
        sphere.position.x -=1
    } else if(keyCode === 39 ){ //right
        sphere.position.x +=1
    } else if(keyCode === 38 ){//up
        sphere.position.y +=1
    } else if(keyCode === 40 ){// down
        sphere.position.y -=1
    } else if (keyCode === 32){ //increase
        sphere.position.z +=1
    }else if (keyCode === 8){ // decrease
        sphere.position.z -=1
    }
}


function animate() {
	requestAnimationFrame( animate );
    sphere.rotation.z +=0.01;
    
    renderer.render( scene, camera );
}
animate();