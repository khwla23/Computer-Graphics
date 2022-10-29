const scene = new THREE.Scene();
//scene.background = new THREE.Color(0x000a5a);
let camera = new THREE.PerspectiveCamera(
    45, 
    window.innerWidth / window.innerHeight, 
    0.1,
    1000 );
// const windowSize = 20;
// const aspect = window.innerWidth / window.innerHeight;
// let camera = new THREE.OrthographicCamera(window.width / - 2, 
// window.width / 2, window.height / 2, window.height / - 2, 1, 1000 );
const loader =  new THREE.TextureLoader();
loader.load("pic/bg.png", function(texture){
    scene.background = texture;
});

let renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.set(3,3,5);

// let grid = new THREE.GridHelper(100, 20, 0xfafafa, 0xfafafa);
// grid.position.z = 4;
// scene.add(grid);

//let controls = new THREE.OrbitControls(camera, renderer.domElement);
let texture = new THREE.TextureLoader().load("pic/sprite.png");
texture.repeat.set(1/6, 1)
//texture.offset.x = 3/6
let mat = new THREE.SpriteMaterial({map : texture});
let sprite = new THREE.Sprite(mat);
sprite.position.set(4.5,3,3)
//sprite.scale.set(1,1,1)
scene.add(sprite);

// let t = new THREE.TextureLoader().load("butter.jpg");
// t.repeat.set(1/5, 1)
// let m = new THREE.SpriteMaterial({map : t});
// let s = new THREE.Sprite(m);
// s.position.set(2,3,3)
// //sprite.scale.set(1,1,1)
// scene.add(s);

let clock = new THREE.Clock();
let au = 0;

let cFrame = 0;
function F(){
    au += clock.getDelta();
    if (au > 0.5){
        cFrame += 1;
        if(cFrame > 5){
            cFrame = 0
        }
        texture.offset.x = cFrame / 6;
        au = 0;
    }
    
}

function animate() {
    F();
    sprite.position.x += -0.001
	requestAnimationFrame( animate );
    renderer.render( scene, camera );
    
}
animate();