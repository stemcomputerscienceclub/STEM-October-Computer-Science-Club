import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { useTheme } from '../contexts/ThemeContext';

const CS3DBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animationRef = useRef<number>();
  const { theme } = useTheme();

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 30);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    rendererRef.current = renderer;

    // Set theme-based background
    const isDark = theme === 'dark';
    scene.background = new THREE.Color(isDark ? 0x0a0a0a : 0xf8fafc);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(
      isDark ? 0x404040 : 0x606060,
      isDark ? 0.4 : 0.6
    );
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(
      isDark ? 0x4a90e2 : 0x3b82f6,
      isDark ? 0.8 : 0.5
    );
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(
      isDark ? 0x00d4aa : 0x10b981,
      isDark ? 0.6 : 0.3,
      50
    );
    pointLight.position.set(-10, 10, 10);
    scene.add(pointLight);

    // Materials
    const primaryColor = isDark ? 0x3b82f6 : 0x1e40af;
    const secondaryColor = isDark ? 0x10b981 : 0x059669;
    const accentColor = isDark ? 0x8b5cf6 : 0x7c3aed;

    // Create network nodes and connections
    const networkNodes: THREE.Mesh[] = [];
    const networkConnections: THREE.Line[] = [];
    const nodePositions: THREE.Vector3[] = [];

    // Generate network nodes
    for (let i = 0; i < 20; i++) {
      const nodeGeometry = new THREE.SphereGeometry(0.3, 16, 16);
      const nodeMaterial = new THREE.MeshPhongMaterial({
        color: i % 3 === 0 ? primaryColor : i % 3 === 1 ? secondaryColor : accentColor,
        emissive: isDark ? 0x111111 : 0x000000,
        transparent: true,
        opacity: isDark ? 0.9 : 0.8
      });
      
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      node.position.copy(position);
      nodePositions.push(position);
      networkNodes.push(node);
      scene.add(node);
    }

    // Create connections between nearby nodes
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const distance = nodePositions[i].distanceTo(nodePositions[j]);
        if (distance < 15) {
          const points = [nodePositions[i], nodePositions[j]];
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const material = new THREE.LineBasicMaterial({
            color: isDark ? 0x334155 : 0x64748b,
            transparent: true,
            opacity: isDark ? 0.4 : 0.3
          });
          const line = new THREE.Line(geometry, material);
          networkConnections.push(line);
          scene.add(line);
        }
      }
    }

    // Create floating code blocks
    const codeBlocks: THREE.Mesh[] = [];
    const codeSnippets = [
      'function()', 'const x =', 'if (true)', 'return;', 'async/await', 
      'class {}', 'import', 'export', 'useState', 'useEffect'
    ];

    for (let i = 0; i < 15; i++) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d')!;
      canvas.width = 256;
      canvas.height = 64;
      
      context.fillStyle = isDark ? '#1e293b' : '#f1f5f9';
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      context.font = '16px monospace';
      context.fillStyle = isDark ? '#64748b' : '#475569';
      context.fillText(codeSnippets[i % codeSnippets.length], 10, 35);
      
      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: isDark ? 0.8 : 0.6
      });
      
      const geometry = new THREE.PlaneGeometry(4, 1);
      const codeBlock = new THREE.Mesh(geometry, material);
      
      codeBlock.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      );
      codeBlock.rotation.set(
        Math.random() * 0.5,
        Math.random() * Math.PI,
        Math.random() * 0.5
      );
      
      codeBlocks.push(codeBlock);
      scene.add(codeBlock);
    }

    // Create CPU/Chip representations
    const cpuChips: THREE.Mesh[] = [];
    for (let i = 0; i < 8; i++) {
      const chipGeometry = new THREE.BoxGeometry(2, 0.2, 2);
      const chipMaterial = new THREE.MeshPhongMaterial({
        color: isDark ? 0x374151 : 0x6b7280,
        emissive: isDark ? 0x111111 : 0x000000,
        transparent: true,
        opacity: isDark ? 0.9 : 0.7
      });
      
      const chip = new THREE.Mesh(chipGeometry, chipMaterial);
      chip.position.set(
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25
      );
      chip.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      cpuChips.push(chip);
      scene.add(chip);
    }

    // Create data flow particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 60;
      positions[i3 + 1] = (Math.random() - 0.5) * 40;
      positions[i3 + 2] = (Math.random() - 0.5) * 40;
      
      const color = new THREE.Color();
      color.setHex(i % 3 === 0 ? primaryColor : i % 3 === 1 ? secondaryColor : accentColor);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
      
      sizes[i] = Math.random() * 3 + 1;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      transparent: true,
      opacity: isDark ? 0.8 : 0.6,
      vertexColors: true,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Create binary rain effect
    const binaryRain: THREE.Mesh[] = [];
    for (let i = 0; i < 30; i++) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d')!;
      canvas.width = 32;
      canvas.height = 128;
      
      context.fillStyle = isDark ? '#000' : '#fff';
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      context.font = '12px monospace';
      context.fillStyle = isDark ? '#00ff00' : '#22c55e';
      
      for (let j = 0; j < 10; j++) {
        const bit = Math.random() > 0.5 ? '1' : '0';
        context.fillText(bit, 8, 15 + j * 12);
      }
      
      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: isDark ? 0.6 : 0.4
      });
      
      const geometry = new THREE.PlaneGeometry(1, 4);
      const rain = new THREE.Mesh(geometry, material);
      
      rain.position.set(
        (Math.random() - 0.5) * 60,
        Math.random() * 40 + 20,
        (Math.random() - 0.5) * 30
      );
      
      binaryRain.push(rain);
      scene.add(rain);
    }

    // Animation setup
    const clock = new THREE.Clock();
    
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Animate network nodes
      networkNodes.forEach((node, index) => {
        node.rotation.x = elapsedTime * 0.3 + index * 0.1;
        node.rotation.y = elapsedTime * 0.2 + index * 0.05;
        node.position.y += Math.sin(elapsedTime + index) * 0.001;
      });

      // Animate code blocks
      codeBlocks.forEach((block, index) => {
        block.rotation.x = elapsedTime * 0.1 + index * 0.02;
        block.rotation.y = elapsedTime * 0.15 + index * 0.03;
        block.position.x += Math.sin(elapsedTime + index) * 0.005;
      });

      // Animate CPU chips
      cpuChips.forEach((chip, index) => {
        chip.rotation.x = elapsedTime * 0.2 + index * 0.1;
        chip.rotation.z = elapsedTime * 0.1 + index * 0.05;
      });

      // Animate particles
      const particlePositions = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        particlePositions[i3] += Math.sin(elapsedTime + i) * 0.01;
        particlePositions[i3 + 1] += Math.cos(elapsedTime + i) * 0.01;
        particlePositions[i3 + 2] += Math.sin(elapsedTime * 0.5 + i) * 0.005;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Animate binary rain
      binaryRain.forEach((rain, index) => {
        rain.position.y -= 0.1;
        if (rain.position.y < -30) {
          rain.position.y = 30;
          rain.position.x = (Math.random() - 0.5) * 60;
        }
      });

      // Subtle camera movement
      camera.position.x = Math.sin(elapsedTime * 0.1) * 2;
      camera.position.y = Math.cos(elapsedTime * 0.08) * 1;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      
      // Clean up Three.js objects
      scene.clear();
      renderer.dispose();
      
      // Clean up geometries and materials
      [...networkNodes, ...codeBlocks, ...cpuChips, ...binaryRain].forEach(mesh => {
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) {
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach(material => material.dispose());
          } else {
            mesh.material.dispose();
          }
        }
      });
      
      networkConnections.forEach(line => {
        if (line.geometry) line.geometry.dispose();
        if (line.material) {
          if (Array.isArray(line.material)) {
            line.material.forEach(material => material.dispose());
          } else {
            line.material.dispose();
          }
        }
      });
      
      if (particles) {
        particles.geometry.dispose();
        particles.material.dispose();
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="cs-3d-background"
    />
  );
};

export default CS3DBackground;
