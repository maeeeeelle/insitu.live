import gsap from "gsap";
import * as THREE from "three";
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner l'élément et obtenir ses dimensions
  const element = document.querySelector(".element");
  const width = element.clientWidth;
  const height = element.clientHeight;

  // Créer la scène
  const scene = new THREE.Scene();
  // La scène est maintenant transparente, pas de couleur de fond

  // Configurer la caméra
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 5;

  // Configurer le renderer avec la transparence activée
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true, // Activer la transparence du fond
  });
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000, 0); // Fond transparent
  element.appendChild(renderer.domElement);

  // Créer une texture de gradient pour la sphère
  function createGradientTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;

    const context = canvas.getContext("2d");

    // Créer un gradient radial
    const gradient = context.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      canvas.width / 2
    );

    // Définir les couleurs du gradient
    gradient.addColorStop(0, "#FF493D"); //orange
    gradient.addColorStop(0.25, "#f8ca59"); //jaune
    gradient.addColorStop(0.5, "#3C96EF"); //bleu
    gradient.addColorStop(1, "#EB2262"); //rose

    // Appliquer le gradient
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    return new THREE.CanvasTexture(canvas);
  }

  // Créer une sphère avec un matériau utilisant le gradient
  const geometry = new THREE.SphereGeometry(3, 64, 64); // Sphère au lieu de cube
  const texture = createGradientTexture();
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
  });

  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  // Ajouter un peu de lumière ambiante
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // Animation
  function animate() {
    sphere.rotation.x += 0.005;
    sphere.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  // Démarrer la boucle d'animation
  renderer.setAnimationLoop(animate);

  // Ajuster la taille lors du redimensionnement de la fenêtre
  window.addEventListener("resize", function () {
    const newWidth = element.clientWidth;
    const newHeight = element.clientHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("Animation de fond chargée");

  // Contrôle de la vitesse d'animation si nécessaire
  function setAnimationSpeed(seconds) {
    const gradient2 = document.querySelector(".gradient-2");
    gradient2.style.animationDuration = seconds + "s";
  }

  // Exemple pour ralentir ou accélérer l'animation
  // setAnimationSpeed(15); // Plus lent
  // setAnimationSpeed(5);  // Plus rapide
});

var tl = gsap.timeline({ repeat: -1 });
tl.to(".screen", { opacity: 1, duration: 1 });
const hand = document.querySelector(".hand");
const easeType = "power1.inOut";

tl.to(".hand", {
  scale: 1.5,
  x: -500,
  rotate: -90,
  duration: 1,
  ease: easeType,
});

tl.to(".hand", {
  x: -800,
  y: 50,
  rotate: -50,
  duration: 1,
  ease: easeType,
});

tl.to(".hand", {
  x: -1000,
  y: -190,
  rotate: 30,
  duration: 1,
  ease: easeType,
});

tl.to(".hand", {
  x: -750,
  y: -500,
  rotate: -10,
  duration: 1,
  ease: easeType,
});

tl.to(".hand", {
  y: -630,
  rotate: -30,
  duration: 1,
  ease: easeType,
});
tl.to(".hand", { scale: 1, duration: 0.1, ease: "power2.inOut" });
tl.to(".hand", { scale: 1.5, duration: 0.1, ease: "power2.inOut" });

tl.to(".element, .sphere-blue, .sphere-white", { scale: 0.95, duration: 0.1 });
tl.to(".hand", { scale: 1.5, duration: 0.1 });
tl.to(".element, .sphere-blue, .sphere-white", { scale: 3, duration: 0.5 });
tl.to(".screen", { opacity: 0, duration: 1 });
tl.to(".card-left", { y: -1000, duration: 2 });
tl.to(".card-right", { y: 1000, duration: 2 });
tl.to(".hand", { opacity: 0, duration: 0.1 });
tl.to(".element, .sphere-blue, .sphere-white", { scale: 3, duration: 0.5 });
tl.to(".screen", { opacity: 1, duration: 1 });
tl.to(".element, .sphere-blue, .sphere-white", { scale: 1, duration: 0.2 });
