import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for handling 3D interactions specific to luxury LRP cosmetics.
 * This hook sets up a 3D scene with interactive elements that reflect the luxury 
 * nature of the brand using orange and white color schemes.
 *
 * @returns {void}
 */
const use3D = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    
    // Set up lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(ambientLight);
    scene.add(directionalLight);

    // Create luxury LRP cosmetics 3D object (e.g., a product bottle)
    const geometry = new THREE.CylinderGeometry(1, 1, 3, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xffa500 }); // Orange color
    const cylinder = new THREE.Mesh(geometry, material);
    scene.add(cylinder);

    // Position camera
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cylinder.rotation.y += 0.01; // Rotate for elegant effect
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      const width = mountRef.current!.clientWidth;
      const height = mountRef.current!.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      // Cleanup
      mountRef.current?.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return mountRef;
};

export default use3D;