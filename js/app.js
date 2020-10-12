//3 THINGS THAT WE NEED: SCENE, CAMERA, AND RENDER

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
    75, //Field of View
    window.innerWidth / window.innerHeight, //Aspect Ratio
    0.1, //Near
    1000 //Far
);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let geometry = new THREE.CircleGeometry(2, 78); //Geometry = Shape
let material = new THREE.MeshBasicMaterial();
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
