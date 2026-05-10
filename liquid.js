import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { ImprovedNoise } from "three/addons/math/ImprovedNoise.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color("#030406");

const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 4.2;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = false;

scene.add(new THREE.AmbientLight(0xffffff, 0.55));

const keyLight = new THREE.PointLight(0xffffff, 4.8);
keyLight.position.set(3, 4, 5);
scene.add(keyLight);

const sideLight = new THREE.PointLight(0xdde8ff, 2.4);
sideLight.position.set(-4, -2, 3);
scene.add(sideLight);

const softLight = new THREE.PointLight(0xffffff, 1.4);
softLight.position.set(4, -3, 2);
scene.add(softLight);

const envMap = new THREE.CubeTextureLoader().load([
  "https://threejs.org/examples/textures/cube/Bridge2/posx.jpg",
  "https://threejs.org/examples/textures/cube/Bridge2/negx.jpg",
  "https://threejs.org/examples/textures/cube/Bridge2/posy.jpg",
  "https://threejs.org/examples/textures/cube/Bridge2/negy.jpg",
  "https://threejs.org/examples/textures/cube/Bridge2/posz.jpg",
  "https://threejs.org/examples/textures/cube/Bridge2/negz.jpg"
]);

scene.environment = envMap;

const geometry = new THREE.SphereGeometry(1.25, 170, 170);
const originalPositions = geometry.attributes.position.array.slice();

const material = new THREE.MeshPhysicalMaterial({
  color: 0xcfd2d4,
  metalness: 1,
  roughness: 0.035,
  clearcoat: 1,
  clearcoatRoughness: 0.01,
  envMapIntensity: 2.5
});

const blob = new THREE.Mesh(geometry, material);
scene.add(blob);

const noise = new ImprovedNoise();

let mouse = new THREE.Vector2(0, 0);
let mouseTarget = new THREE.Vector2(0, 0);
let dents = [];
let liquidDrops = [];
let clickPulse = 0;
let clickPoint = new THREE.Vector2(0, 0);

let lastMoveTime = 0;

window.addEventListener("mousemove", (e) => {
  mouseTarget.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouseTarget.y = -(e.clientY / window.innerHeight) * 2 + 1;

  const speed = Math.hypot(e.movementX, e.movementY);
  const now = performance.now();

  if (speed > 8 && now - lastMoveTime > 18) {
    lastMoveTime = now;
    const amount = Math.min(5, Math.floor(speed / 10));

    for (let i = 0; i < amount; i++) {
      liquidDrops.push(createLiquidDrop(mouseTarget.x, mouseTarget.y, speed));
    }
  }
});

window.addEventListener("click", (e) => {
  const x = (e.clientX / window.innerWidth) * 2 - 1;
  const y = -(e.clientY / window.innerHeight) * 2 + 1;

  clickPoint.set(x, y);
  clickPulse = 1.0;

  dents.push({
    x,
    y,
    strength: 1.2,
    life: 1,
    stretch: 1.05
  });

  for (let i = 0; i < 12; i++) {
    liquidDrops.push(createLiquidDrop(x, y, 22));
  }
});

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function createLiquidDrop(x, y, speed) {
  const radius = randomBetween(0.018, 0.065);
  const geo = new THREE.SphereGeometry(radius, 20, 20);

  const dropMat = new THREE.MeshPhysicalMaterial({
    color: 0xd7d9da,
    metalness: 1,
    roughness: 0.025,
    clearcoat: 1,
    clearcoatRoughness: 0.01,
    envMapIntensity: 2.6
  });

  const drop = new THREE.Mesh(geo, dropMat);

  drop.position.set(
    x * 2.15 + randomBetween(-0.09, 0.09),
    y * 1.35 + randomBetween(-0.09, 0.09),
    randomBetween(-0.35, 0.75)
  );

  scene.add(drop);

  return {
    mesh: drop,
    geo,
    mat: dropMat,
    vx: randomBetween(-0.035, 0.035) * speed * 0.12,
    vy: randomBetween(-0.035, 0.035) * speed * 0.12,
    vz: randomBetween(-0.008, 0.035),
    life: 1,
    spin: randomBetween(-0.04, 0.04)
  };
}

function animate(time = 0) {
  requestAnimationFrame(animate);

  const t = time * 0.00065;
  mouse.lerp(mouseTarget, 0.08);

  const pos = geometry.attributes.position;

  for (let i = 0; i < pos.count; i++) {
    const ix = i * 3;

    const ox = originalPositions[ix];
    const oy = originalPositions[ix + 1];
    const oz = originalPositions[ix + 2];

    const vertex = new THREE.Vector3(ox, oy, oz).normalize();

    const liquid =
      noise.noise(ox * 1.5 + t, oy * 1.5, oz * 1.5) * 0.22 +
      noise.noise(ox * 3.1, oy * 3.1 + t, oz * 3.1) * 0.09;

    const mouseInfluence =
      Math.max(0, 1 - Math.hypot(ox - mouse.x * 1.45, oy - mouse.y * 1.45)) *
      0.22;

    const clickInfluence =
      Math.max(0, 1 - Math.hypot(ox - clickPoint.x * 1.45, oy - clickPoint.y * 1.45)) *
      clickPulse *
      0.22;

    let dentInfluence = 0;
    let stretchX = 0;
    let stretchY = 0;

    for (const dent of dents) {
      const dx = ox - dent.x * 1.45;
      const dy = oy - dent.y * 1.45;
      const d = Math.hypot(dx, dy);

      const dentArea = Math.max(0, 1 - d * 1.35);

      dentInfluence -= dentArea * dent.strength * dent.life;
      stretchX += dx * dentArea * dent.stretch * dent.life * 0.45;
      stretchY += dy * dentArea * dent.stretch * dent.life * 0.45;
    }

    const radius = 1 + liquid + mouseInfluence + clickInfluence + dentInfluence;

    pos.array[ix] = vertex.x * radius + stretchX;
    pos.array[ix + 1] = vertex.y * radius + stretchY;
    pos.array[ix + 2] = vertex.z * radius;
  }

  pos.needsUpdate = true;
  geometry.computeVertexNormals();

  for (let i = dents.length - 1; i >= 0; i--) {
    dents[i].life *= 0.952;
    if (dents[i].life < 0.03) dents.splice(i, 1);
  }

  updateLiquidDrops();

  blob.rotation.y += 0.0045 + mouse.x * 0.006;
  blob.rotation.x += 0.002 + mouse.y * 0.004;

  keyLight.position.x = mouse.x * 3.2;
  keyLight.position.y = mouse.y * 3.2 + 2;

  clickPulse *= 0.9;

  controls.update();
  renderer.render(scene, camera);
}

function updateLiquidDrops() {
  for (let i = liquidDrops.length - 1; i >= 0; i--) {
    const d = liquidDrops[i];

    d.mesh.position.x += d.vx;
    d.mesh.position.y += d.vy;
    d.mesh.position.z += d.vz;

    d.mesh.rotation.x += d.spin;
    d.mesh.rotation.y += d.spin * 0.7;

    d.vx *= 0.968;
    d.vy *= 0.968;
    d.vz *= 0.96;

    d.life *= 0.982;
    d.mesh.scale.setScalar(d.life);

    if (d.life < 0.04) {
      scene.remove(d.mesh);
      d.geo.dispose();
      d.mat.dispose();
      liquidDrops.splice(i, 1);
    }
  }
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});