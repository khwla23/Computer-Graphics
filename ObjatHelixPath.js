var scene = new THREE.Scene();
//scene.background = new THREE.Color(0xF5F5F5);
var camera = new THREE.PerspectiveCamera(
    55, window.innerWidth / window.innerHeight,
    0.5, 1000
);

camera.position.set(3,3,10);

// var material;
let loader = new THREE.TextureLoader();

loader.load("pic/b2.jpg", function(texture){
    scene.background = texture;
});

let renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

let texture0 = new THREE.TextureLoader().load("pic/tok.png");
let material0 = new THREE.MeshStandardMaterial({map: texture0, overdraw: 0.5});
let geometry0 = new THREE.PlaneGeometry(4, 4);
let mesh0 = new THREE.Mesh(geometry0, material0);
mesh0.scale.set(2,2,2);
mesh0.position.set(-2.7,2,2);
scene.add(mesh0);

let texture = new THREE.TextureLoader().load("pic/lok.png");

let material = new THREE.MeshStandardMaterial({map: texture});

let geometry = new THREE.PlaneGeometry(2, 1);

let mesh = new THREE.Mesh(geometry, material);
mesh.scale.set(2,2,2);
scene.add(mesh);
// let texture = new THREE.TextureLoader().load("pic/bird.png");
// texture.repeat.set(1/6, 1)
// texture.offset.x = 1/6
// let mat = new THREE.SpriteMaterial({map : texture});
// let sprite = new THREE.Sprite(mat);
// sprite.position.set(4.5,3,3)
// //sprite.scale.set(1,1,1)
// scene.add(sprite);

// let clock = new THREE.Clock();
// let au = 0;

// let count = 0;
// function F(){
//     au += clock.getDelta();
//     if (au > 0.5){
//         texture.offset.x = count / 6;
//         count++;
//         if (count > 5) {
//             count = 0;
//         }

//         au = 0;
//     }
// }

var light = new THREE.PointLight(0xffffff, 1, 0);

light.position.set(1, 1, 100);

scene.add(light);


var r = 2.5; 
var b = 0.6;
var objPerTurn = 30;
var angleStep = (Math.PI * 2) / objPerTurn;
let points = [];

for (let i = 10; i<180; i++){
  points.push(new THREE.Vector3(b*angleStep*i-3, r*Math.cos(angleStep*i)+4, r*Math.sin(angleStep*i)-4));
}


var k = 0;

mesh.position.x = points[k].x
mesh.position.y = points[k].y
mesh.position.z = points[k].z


renderer.render(scene, camera);
function move() {
    if (k < points.length) {
        mesh.position.x = points[k].x
        mesh.position.y = points[k].y
        mesh.position.z = points[k].z
        k++;
    }
}


let clock = new THREE.Clock();
let au = 0;

function myFunc(){
    au += clock.getDelta();
    if (au > 1.25){
        move();
        au = 1.2;
    }
    
}


function animate() {
    myFunc();
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);

}

animate()
