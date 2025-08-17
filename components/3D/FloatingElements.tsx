import { useEffect, useRef } from 'react';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        const geometry = new THREE.SphereGeometry(0.5, 32, 32);
        const material = new THREE.MeshStandardMaterial({ color: 0xffA500 }); // Orange color
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        const light = new THREE.AmbientLight(0xffffff, 1);
        scene.add(light);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <motion.div
            ref={mountRef}
            className="relative h-screen flex items-center justify-center bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="absolute top-10 text-center">
                <h1 className="text-5xl font-bold text-orange-500 hover:text-orange-600 transition duration-300">
                    Welcome to luxury LRP cosmetics
                </h1>
                <p className="mt-4 text-xl text-gray-700">
                    Experience the elegance and sophistication of our luxury cosmetics collection, designed for the discerning individual.
                </p>
            </div>
        </motion.div>
    );
};

export default FloatingElements;