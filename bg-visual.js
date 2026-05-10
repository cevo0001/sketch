import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color("#010104");

const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 5.2;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
document.body.appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();
const bg1 = loader.load("img/bg1.jpg");
const bg2 = loader.load("img/bg2.jpg");

bg1.colorSpace = THREE.SRGBColorSpace;
bg2.colorSpace = THREE.SRGBColorSpace;

scene.add(new THREE.AmbientLight(0xffffff, 0.45));

const keyLight = new THREE.PointLight(0xffffff, 5);
keyLight.position.set(0, 2.8, 4);
scene.add(keyLight);

const redLight = new THREE.PointLight(0x8b0015, 4);
redLight.position.set(-3, -1.5, 3);
scene.add(redLight);

const blueLight = new THREE.PointLight(0x0b1c3d, 4);
blueLight.position.set(3, 1, 3);
scene.add(blueLight);

const chrome = new THREE.MeshPhysicalMaterial({
  color: 0xd9dcde,
  metalness: 1,
  roughness: 0.035,
  clearcoat: 1,
  clearcoatRoughness: 0.01
});

const glass = new THREE.MeshPhysicalMaterial({
  color: 0x9faabd,
  metalness: 0.2,
  roughness: 0.02,
  transparent: true,
  opacity: 0.38,
  clearcoat: 1
});

const red = new THREE.MeshPhysicalMaterial({
  color: 0x4a050c,
  metalness: 0.8,
  roughness: 0.1,
  clearcoat: 1
});

// MOSAIC WALL
const mosaic = new THREE.Group();
scene.add(mosaic);

const tileGeo = new THREE.PlaneGeometry(0.42, 0.42);
const cols = 16;
const rows = 9;

for (let y = 0; y < rows; y++) {
  for (let x = 0; x < cols; x++) {
    const mat = new THREE.MeshBasicMaterial({
      map: Math.random() > 0.5 ? bg1 : bg2,
      transparent: true,
      opacity: Math.random() * 0.28 + 0.22
    });

    const tile = new THREE.Mesh(tileGeo, mat);

    tile.position.set(
      (x - cols / 2) * 0.45,
      (y - rows / 2) * 0.45,
      -1.8
    );

    tile.rotation.z = (Math.random() - 0.5) * 0.06;
    tile.userData.offset = Math.random() * 1000;
    tile.userData.baseOpacity = mat.opacity;

    mosaic.add(tile);
  }
}

// 3D ABSTRACT FORMS
const forms = new THREE.Group();
scene.add(forms);

// big chrome ribbons
for (let i = 0; i < 7; i++) {
  const geo = new THREE.TorusKnotGeometry(
    Math.random() * 0.45 + 0.42,
    Math.random() * 0.035 + 0.018,
    180,
    14
  );

  const obj = new THREE.Mesh(geo, Math.random() > 0.75 ? red : chrome);

  obj.position.set(
    (Math.random() - 0.5) * 5.2,
    (Math.random() - 0.5) * 2.8,
    Math.random() * 1.8 - 0.2
  );

  obj.scale.setScalar(Math.random() * 0.75 + 0.75);
  obj.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
  obj.userData.speed = Math.random() * 0.006 + 0.002;

  forms.add(obj);
}

// glass bubbles
for (let i = 0; i < 18; i++) {
  const geo = new THREE.SphereGeometry(Math.random() * 0.18 + 0.05, 40, 40);
  const obj = new THREE.Mesh(geo, Math.random() > 0.35 ? glass : chrome);

  obj.position.set(
    (Math.random() - 0.5) * 6,
    (Math.random() - 0.5) * 3.4,
    Math.random() * 2.4
  );

  obj.userData.speed = Math.random() * 0.008 + 0.002;
  obj.userData.float = Math.random() * 1000;

  forms.add(obj);
}

// metallic shards/lines
for (let i = 0; i < 22; i++) {
  const geo = new THREE.ConeGeometry(
    Math.random() * 0.055 + 0.018,
    Math.random() * 0.85 + 0.3,
    5
  );

  const obj = new THREE.Mesh(geo, Math.random() > 0.78 ? red : chrome);

  obj.position.set(
    (Math.random() - 0.5) * 6.4,
    (Math.random() - 0.5) * 3.5,
    Math.random() * 2.5
  );

  obj.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
  obj.userData.speed = Math.random() * 0.012 + 0.003;

  forms.add(obj);
}

// LIGHT BEAMS
const beams = new THREE.Group();
scene.add(beams);

for (let i = 0; i < 9; i++) {
  const beamGeo = new THREE.PlaneGeometry(0.08, 5.8);
  const beamMat = new THREE.MeshBasicMaterial({
    color: Math.random() > 0.5 ? 0xdde6ff : 0x7a0012,
    transparent: true,
    opacity: Math.random() * 0.08 + 0.035,
    side: THREE.DoubleSide
  });

  const beam = new THREE.Mesh(beamGeo, beamMat);
  beam.position.set((Math.random() - 0.5) * 6, 0, 0.7);
  beam.rotation.z = Math.random() * Math.PI;
  beam.userData.speed = Math.random() * 0.004 + 0.001;
  beams.add(beam);
}

let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

function animate(time = 0) {
  requestAnimationFrame(animate);

  const t = time * 0.001;

  mosaic.rotation.y = mouseX * 0.08 + Math.sin(t * 0.2) * 0.04;
  mosaic.rotation.x = -mouseY * 0.04;

  mosaic.children.forEach((tile, i) => {
    tile.material.opacity =
      tile.userData.baseOpacity + Math.sin(t * 1.2 + tile.userData.offset) * 0.08;

    tile.position.z = -1.8 + Math.sin(t * 0.8 + tile.userData.offset) * 0.035;
  });

  forms.rotation.y = mouseX * 0.42 + Math.sin(t * 0.35) * 0.25;
  forms.rotation.x = mouseY * 0.18 + Math.cos(t * 0.28) * 0.08;

  forms.children.forEach((obj, index) => {
    obj.rotation.x += obj.userData.speed || 0.004;
    obj.rotation.y += (obj.userData.speed || 0.004) * 0.75;
    obj.position.y += Math.sin(t * 1.3 + index) * 0.002;
    obj.position.z += Math.cos(t * 1.1 + index) * 0.002;
  });

  beams.children.forEach((beam, i) => {
    beam.rotation.z += beam.userData.speed;
    beam.material.opacity = 0.035 + Math.sin(t * 1.5 + i) * 0.03;
  });

  keyLight.position.x = mouseX * 3.5;
  keyLight.position.y = mouseY * 2.5 + 1.5;

  redLight.intensity = 2.5 + Math.sin(t * 1.8) * 1.5;
  blueLight.intensity = 2.2 + Math.cos(t * 1.4) * 1.3;

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});