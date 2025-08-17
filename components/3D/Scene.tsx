import { useEffect, useRef } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';

interface SceneProps {
  title: string;
}

const Scene: React.FC<SceneProps> = ({ title }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (meshRef.current) {
        meshRef.current.rotation.y = (event.clientX / window.innerWidth) * Math.PI;
        meshRef.current.rotation.x = (event.clientY / window.innerHeight) * Math.PI;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <motion.div
          ref={meshRef}
          scale={1.5}
          whileHover={{ scale: 1.6 }}
          whileTap={{ scale: 1.4 }}
          className="transition-transform duration-300"
        >
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#FFA500" />
        </motion.mesh>
        <OrbitControls />
      </Canvas>
      <motion.div
        className="absolute text-orange-500 text-5xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to luxury LRP cosmetics
      </motion.h1>
      <motion.div
        className="absolute text-orange-300 text-xl mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Discover our exquisite range of high-end cosmetics designed for the modern luxury consumer.
      </motion.p>
    </div>
  );
};

export default Scene;