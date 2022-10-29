const scene = new THREE.Scene();
//scene.background = new THREE.Color(0x87ceeb);
//const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 500 );
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 70;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry(10,10,10)
const material = new THREE.MeshNormalMaterial({wireframe : true})
const sphere = new THREE.Mesh(geometry, material)

const geometry2 = new THREE.SphereGeometry(10,10,10)
const material2 = new THREE.MeshNormalMaterial({wireframe : true})
const sphere2 = new THREE.Mesh(geometry2, material2)
sphere2.position.x = 40;

const geometry3 = new THREE.SphereGeometry(10,10,10)
const material3 = new THREE.MeshNormalMaterial({wireframe : true})
const sphere3 = new THREE.Mesh(geometry3, material3)
sphere3.position.x = -40;

scene.add(sphere)
scene.add(sphere2)
scene.add(sphere3)
//-------------------EVENT LISTENER --------------------
const domEvents = new THREEx.DomEvents(camera, renderer.domElement)
////// clicked to change wireframe
let sphereClicked = false
domEvents.addEventListener(sphere, 'click', event => {
    if (!sphereClicked){
        material.wireframe = false
        sphereClicked = true
    } else{
        material.wireframe = true
        sphereClicked = false
    }
})
domEvents.addEventListener(sphere2, 'click', event => {
    if (!sphereClicked){
        material2.wireframe = false
        sphereClicked = true
    } else{
        material2.wireframe = true
        sphereClicked = false
    }
})
domEvents.addEventListener(sphere3, 'click', event => {
    if (!sphereClicked){
        material3.wireframe = false
        sphereClicked = true
    } else{
        material3.wireframe = true
        sphereClicked = false
    }
})
////// change scale when mouse is on the sphere and reset when its not
domEvents.addEventListener(sphere2, 'mouseover', event => {
    sphere2.scale.set(3,3,3)
})
domEvents.addEventListener(sphere2, 'mouseout', event => {
    sphere2.scale.set(1,1,1)
})

domEvents.addEventListener(sphere3, 'mouseover', event => {
    sphere3.scale.set(3,3,3)
})
domEvents.addEventListener(sphere3, 'mouseout', event => {
    sphere3.scale.set(1,1,1)
})
document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(e) {
    var keyCode = e.which;
    if(keyCode === 38 ){ //up
        sphere.position.y +=1;
    } else if(keyCode === 40){ //down
        sphere.position.y -=1;
    }
    else if(keyCode === 37){//left (increase)
        sphere.position.z +=2;
    }
    else if (keyCode === 39){//right (decrease)
        sphere.position.z -=2;
    }
}
// ctrl+/ for multiline comment
function animate() {
	requestAnimationFrame( animate );
    // sphere.rotation.x +=0.01
    // sphere2.rotation.x +=0.01
    // sphere3.rotation.x +=0.01
    renderer.render( scene, camera );
}
animate();
