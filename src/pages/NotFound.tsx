import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import * as THREE from 'three';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // No need for font loading, we'll use regular HTML for the 404 text
    
    // Create particles for background
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000;
    
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: new THREE.Color('#4f46e5'),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Add large spheres
    const sphere1 = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color('#818cf8'),
        wireframe: true,
      })
    );
    sphere1.position.set(-3, 1, -2);
    scene.add(sphere1);
    
    const sphere2 = new THREE.Mesh(
      new THREE.SphereGeometry(1.5, 32, 32),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color('#60a5fa'),
        wireframe: true,
      })
    );
    sphere2.position.set(3, -1, -5);
    scene.add(sphere2);
    
    // Create cube with gradient wireframe effect
    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
    const cubeMaterials = [
      new THREE.MeshBasicMaterial({ color: 0x3b82f6, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x6366f1, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0xec4899, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x14b8a6, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x6366f1, wireframe: true }),
    ];
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterials);
    cube.position.set(0, 0, -3);
    scene.add(cube);
    
    // Add a torus knot for extra visual interest
    const torusKnotGeometry = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 16);
    const torusKnotMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x9333ea, 
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });
    const torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);
    torusKnot.position.set(-2.5, -1.5, -1);
    scene.add(torusKnot);
    
    // Add a dodecahedron
    const dodecahedronGeometry = new THREE.DodecahedronGeometry(0.7);
    const dodecahedronMaterial = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });
    const dodecahedron = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial);
    dodecahedron.position.set(2.5, 1.5, -2);
    scene.add(dodecahedron);
    
    camera.position.z = 5;
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Mouse move effect
    const mouse = {
      x: 0,
      y: 0,
    };
    
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;
      
      sphere1.rotation.y += 0.003;
      sphere2.rotation.y -= 0.002;
      
      cube.rotation.y += 0.01;
      cube.rotation.x += 0.005;
      
      // Animate the torus knot
      torusKnot.rotation.y += 0.02;
      torusKnot.rotation.z += 0.01;
      
      // Animate the dodecahedron
      dodecahedron.rotation.y -= 0.015;
      dodecahedron.rotation.x += 0.01;
      
      // Subtle movement based on mouse position
      camera.position.x += (mouse.x * 0.05 - camera.position.x) * 0.1;
      camera.position.y += (mouse.y * 0.05 - camera.position.y) * 0.1;
      camera.lookAt(scene.position);
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      scene.clear();
      
      if (renderer && renderer.dispose) {
        renderer.dispose();
      }
    };
  }, []);
  
  return (
    <>
      <SEO 
        title="404 - Page Not Found" 
        description="The page you're looking for doesn't exist or has been moved."
        url="/404"
      />
      
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 backdrop-blur-xl bg-white/20 dark:bg-slate-900/60 rounded-3xl border border-white/20 shadow-2xl max-w-xl w-full"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="mb-2 text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-700">404</h1>
            <div className="h-1 w-16 mx-auto bg-gradient-to-r from-blue-600 to-purple-700 rounded-full mb-6" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-white"
          >
            Oops! Page Not Found
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-slate-700 dark:text-slate-300 mb-8"
          >
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link 
              to="/" 
              className="flex items-center justify-center gap-2 px-6 py-3 text-white font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            
            <button 
              onClick={() => window.history.back()} 
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </motion.div>

          {/* Interactive tips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 pt-6 border-t border-slate-200/30 dark:border-slate-700/30"
          >
            <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Try one of these:</h3>
            <div className="flex flex-wrap gap-2 justify-center mt-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/" className="block px-3 py-1 bg-indigo-100/50 dark:bg-indigo-900/30 rounded-full text-sm text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200/50 dark:hover:bg-indigo-800/30 transition-colors">Home Page</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/projects" className="block px-3 py-1 bg-blue-100/50 dark:bg-blue-900/30 rounded-full text-sm text-blue-700 dark:text-blue-300 hover:bg-blue-200/50 dark:hover:bg-blue-800/30 transition-colors">Projects</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/about" className="block px-3 py-1 bg-purple-100/50 dark:bg-purple-900/30 rounded-full text-sm text-purple-700 dark:text-purple-300 hover:bg-purple-200/50 dark:hover:bg-purple-800/30 transition-colors">About Us</Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 md:mt-12 text-slate-600 dark:text-slate-400"
        >
          <p>Need help? <Link to="/about" className="text-blue-600 dark:text-blue-400 hover:underline">Contact Support</Link></p>
          <p className="text-xs mt-2 opacity-70">Error code: 404 - Page Not Found</p>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
