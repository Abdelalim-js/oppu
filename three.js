import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

let canvas = document.getElementById("canvas")

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    canvas: canvas
    });
const texture = new THREE.TextureLoader();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const orbit = new OrbitControls(camera, renderer.domElement);

orbit.update();
camera.position.z = 3;

const map = texture.load('assets/2k_moon.jpg');

const cubegem = new THREE.SphereGeometry();
const cubemet = new THREE.MeshStandardMaterial({
    map: map,
    roughness: 0.2,
    metalness: 0.0,
    bumpMap: map,
    bumpScale: 8.0
});
const cube = new THREE.Mesh(cubegem,cubemet);
scene.add(cube);

const light = new THREE.DirectionalLight(0xffffff,5);
scene.add(light);
light.position.set(-6,4,3);



function lose() {
    
    cube.rotation.y += 0.01;
    renderer.render(scene,camera);
}
lose()
renderer.setAnimationLoop(lose);