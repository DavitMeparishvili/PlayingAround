const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff);
document.body.appendChild(renderer.domElement);

const loader = new THREE.GLTFLoader();
loader.load(
  "Rigged Glock.glb",
  function (gltf) {
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

camera.position.z = 5;

// Create a new OrbitControls object and pass the camera and the renderer.domElement as parameters
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Set the target point of the camera to the origin (0, 0, 0)
controls.target.set(0, 0, 0);

controls.addEventListener("change", () => {
  console.log(camera);
  // Render the scene whenever the camera changes
  renderer.render(scene, camera);
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}
animate();
