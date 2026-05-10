import * as THREE from "three";
import { SVGLoader } from "SVGLoader";

const scene = new THREE.Scene();
scene.background = new THREE.Color("#020204");

const camera = new THREE.PerspectiveCamera(
  42,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 20;

const renderer = new THREE.WebGLRenderer({
  antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(1);

document.body.appendChild(renderer.domElement);

scene.add(new THREE.AmbientLight(0xffffff, 0.35));

const keyLight = new THREE.PointLight(0xffffff, 10);
keyLight.position.set(4, 5, 12);
scene.add(keyLight);

const redLight = new THREE.PointLight(0x7a0012, 5);
redLight.position.set(-6, -3, 8);
scene.add(redLight);

const blueLight = new THREE.PointLight(0x0b1c3d, 4);
blueLight.position.set(6, -2, 8);
scene.add(blueLight);

const envMap = new THREE.CubeTextureLoader().load([
  "https://threejs.org/examples/textures/cube/Bridge2/posx.jpg",
  "https://threejs.org/examples/textures/cube/Bridge2/negx.jpg",
  "https://threejs.org/examples/textures/cube/Bridge2/posy.jpg",
  "https://threejs.org/examples/textures/cube/Bridge2/negy.jpg",
  "https://threejs.org/examples/textures/cube/Bridge2/posz.jpg",
  "https://threejs.org/examples/textures/cube/Bridge2/negz.jpg"
]);

scene.environment = envMap;

const chrome = new THREE.MeshPhysicalMaterial({
  color: 0xf0f2f4,
  metalness: 1,
  roughness: 0.015,
  clearcoat: 1,
  clearcoatRoughness: 0,
  envMapIntensity: 4
});

let group;
let baseY = 0;

let mouseX = 0;
let mouseY = 0;

const loader = new SVGLoader();

loader.load("img/testafhund.svg", (data) => {

  group = new THREE.Group();

  data.paths.forEach((path) => {

    const shapes = SVGLoader.createShapes(path);

    shapes.forEach((shape) => {

      const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: 2.4,
        bevelEnabled: true,
        bevelThickness: 0.35,
        bevelSize: 0.16,
        bevelSegments: 4,
        curveSegments: 12
      });

      geometry.computeVertexNormals();

      const mesh = new THREE.Mesh(geometry, chrome);

      group.add(mesh);

    });

  });

  // CENTER SVG
  const box = new THREE.Box3().setFromObject(group);

  const center = new THREE.Vector3();

  box.getCenter(center);

  group.position.set(
    -center.x,
    -center.y,
    0
  );

  // SCALE
  group.scale.set(
    0.03,
    -0.03,
    0.03
  );

  group.rotation.x = 0.15;

  baseY = group.position.y;

  scene.add(group);

});

window.addEventListener("mousemove", (e) => {

  mouseX = (e.clientX / window.innerWidth) * 2 - 1;

  mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

});

function animate(time = 0) {

  requestAnimationFrame(animate);

  const t = time * 0.001;

  if (group) {

    group.rotation.y =
      mouseX * 0.55 +
      Math.sin(t * 0.7) * 0.25;

    group.rotation.x =
      0.15 +
      mouseY * 0.25 +
      Math.sin(t * 0.9) * 0.06;

    group.rotation.z =
      Math.sin(t * 0.5) * 0.04;

    group.position.y =
      baseY +
      Math.sin(t * 1.2) * 0.22;

  }

  keyLight.position.x = mouseX * 8;

  keyLight.position.y = mouseY * 5 + 3;

  redLight.intensity =
    3.5 + Math.sin(t * 1.8) * 1.8;

  blueLight.intensity =
    3 + Math.cos(t * 1.5) * 1.6;

  renderer.render(scene, camera);

}

animate();

window.addEventListener("resize", () => {

  camera.aspect =
    window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );

});