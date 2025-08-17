import { useEffect } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { useAnimation } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  const animationControls = useAnimation();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const particles: THREE.Points[] = [];
    const particleCount = 500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i  3] = (Math.random() - 0.5)  10;
      positions[i  3 + 1] = (Math.random() - 0.5)  10;
      positions[i  3 + 2] = (Math.random() - 0.5)  10;

      colors[i * 3] = 1; // Red
      colors[i * 3 + 1] = 0.5; // Green
      colors[i * 3 + 2] = 0; // Blue
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({ size: 0.1, vertexColors: true });
    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.001;
      particlesMesh.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div className="flex items-center justify-center h-full z-10">
        <h1 className="text-6xl font-bold text-orange-500 relative">
          Luxury LRP Cosmetics
          <span className="block w-full h-1 bg-white mt-2 animate-pulse"></span>
        </h1>
        <p className="text-xl text-white mt-4 max-w-lg text-center">
          Discover the essence of elegance and beauty with Luxury LRP Cosmetics. Indulge in our exquisite range of high-end products designed to enhance your natural beauty.
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ParticleBackground;