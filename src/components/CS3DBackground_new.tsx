import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { useTheme } from '../contexts/ThemeContext';

const CS3DBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const { theme } = useTheme();

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);

    // Theme-based colors
    const isDark = theme === 'dark';
    const primaryColor = isDark ? 0x3b82f6 : 0x1e40af;
    const secondaryColor = isDark ? 0x10b981 : 0x059669;
    const accentColor = isDark ? 0x8b5cf6 : 0x7c3aed;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    // Binary sprites
    const binarySprites: THREE.Sprite[] = [];
    
    function createBinaryTexture(digit: string, color: number) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d')!;
      canvas.width = 64;
      canvas.height = 64;
      context.font = 'bold 64px monospace';
      context.fillStyle = `#${color.toString(16).padStart(6, '0')}`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(digit, 32, 32);
      return new THREE.CanvasTexture(canvas);
    }

    for (let i = 0; i < 500; i++) {
      const digit = Math.random() > 0.5 ? '1' : '0';
      const colorChoice = i % 3 === 0 ? primaryColor : i % 3 === 1 ? secondaryColor : accentColor;
      const texture = createBinaryTexture(digit, colorChoice);
      const material = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.7 });
      const sprite = new THREE.Sprite(material);

      sprite.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60 - 30
      );
      sprite.scale.setScalar(Math.random() * 0.7 + 0.3);
      sprite.userData = {
        speed: Math.random() * 0.08 + 0.03,
        flickerCounter: 0,
        flickerInterval: Math.floor(Math.random() * 100) + 50
      };

      scene.add(sprite);
      binarySprites.push(sprite);
    }

    // Code snippets
    const codeSnippets: THREE.Sprite[] = [];
    const words = ['function', 'class', 'const', 'let', 'return', 'async', 'await', 'React', 'Node', 'Python'];
    
    function createCodeTexture(word: string) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d')!;
      canvas.width = word.length * 30;
      canvas.height = 48;
      context.font = '48px monospace';
      context.fillStyle = isDark ? '#64748b' : '#475569';
      context.textBaseline = 'middle';
      context.fillText(word, 0, 24);
      return new THREE.CanvasTexture(canvas);
    }

    for (let i = 0; i < 40; i++) {
      const word = words[Math.floor(Math.random() * words.length)];
      const texture = createCodeTexture(word);
      const material = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.4 });
      const sprite = new THREE.Sprite(material);

      sprite.position.set(
        (Math.random() - 0.5) * 45,
        (Math.random() - 0.5) * 45,
        (Math.random() - 0.5) * 45 - 25
      );
      sprite.scale.set(0.8, 0.4, 1);
      sprite.userData = {
        speedX: (Math.random() - 0.5) * 0.012,
        speedY: (Math.random() - 0.5) * 0.012,
        speedZ: (Math.random() - 0.5) * 0.012
      };

      scene.add(sprite);
      codeSnippets.push(sprite);
    }

    // Network nodes
    const networkNodes: THREE.Vector3[] = [];
    const nodeMeshes: THREE.Mesh[] = [];
    
    for (let i = 0; i < 20; i++) {
      const node = new THREE.Vector3(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30 - 15
      );
      networkNodes.push(node);

      const nodeGeometry = new THREE.SphereGeometry(0.1, 8, 8);
      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: primaryColor
      });
      const nodeMesh = new THREE.Mesh(nodeGeometry, nodeMaterial);
      nodeMesh.position.copy(node);
      nodeMesh.userData.pulseOffset = Math.random() * Math.PI * 2;
      nodeMeshes.push(nodeMesh);
      scene.add(nodeMesh);
    }

    // Connect nodes
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: primaryColor, 
      transparent: true, 
      opacity: 0.15 
    });
    
    for (let i = 0; i < networkNodes.length; i++) {
      for (let j = i + 1; j < networkNodes.length; j++) {
        if (networkNodes[i].distanceTo(networkNodes[j]) < 9) {
          const points = [networkNodes[i], networkNodes[j]];
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(geometry, lineMaterial);
          scene.add(line);
        }
      }
    }

    // Particles
    const particleGeometry = new THREE.BufferGeometry();
    const numParticles = 500;
    const positions = new Float32Array(numParticles * 3);
    const velocities = new Float32Array(numParticles * 3);

    for (let i = 0; i < numParticles; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 70;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 70;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 70 - 35;

      velocities[i * 3] = (Math.random() - 0.5) * 0.07;
      velocities[i * 3 + 1] = -(Math.random() * 0.12 + 0.06);
      velocities[i * 3 + 2] = Math.random() * 0.07 + 0.015;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: primaryColor,
      size: 0.1,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      // Camera movement
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Animate binary sprites
      binarySprites.forEach(sprite => {
        sprite.position.y -= sprite.userData.speed;
        sprite.position.z += sprite.userData.speed * 0.2;

        sprite.userData.flickerCounter++;
        if (sprite.userData.flickerCounter >= sprite.userData.flickerInterval) {
          const newDigit = Math.random() > 0.5 ? '1' : '0';
          const colors = [primaryColor, secondaryColor, accentColor];
          const color = colors[Math.floor(Math.random() * colors.length)];
          sprite.material.map = createBinaryTexture(newDigit, color);
          sprite.material.map.needsUpdate = true;
          sprite.userData.flickerCounter = 0;
          sprite.userData.flickerInterval = Math.floor(Math.random() * 100) + 50;
        }

        if (sprite.position.y < -30 || sprite.position.z > 25) {
          sprite.position.y = 30;
          sprite.position.x = (Math.random() - 0.5) * 60;
          sprite.position.z = (Math.random() - 0.5) * 60 - 30;
        }
      });

      // Animate code snippets
      codeSnippets.forEach(sprite => {
        sprite.position.x += sprite.userData.speedX;
        sprite.position.y += sprite.userData.speedY;
        sprite.position.z += sprite.userData.speedZ;

        if (Math.abs(sprite.position.x) > 30) sprite.position.x *= -1;
        if (Math.abs(sprite.position.y) > 30) sprite.position.y *= -1;
        if (sprite.position.z > 25 || sprite.position.z < -30) sprite.position.z *= -1;
      });

      // Animate particles
      const particlePositions = particleSystem.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < numParticles; i++) {
        particlePositions[i * 3] += velocities[i * 3];
        particlePositions[i * 3 + 1] += velocities[i * 3 + 1];
        particlePositions[i * 3 + 2] += velocities[i * 3 + 2];

        if (particlePositions[i * 3 + 1] < -35 || particlePositions[i * 3 + 2] > 25) {
          particlePositions[i * 3] = (Math.random() - 0.5) * 70;
          particlePositions[i * 3 + 1] = 35;
          particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 70 - 35;
        }
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;

      // Animate network nodes
      nodeMeshes.forEach(mesh => {
        const scale = 1 + Math.sin(Date.now() * 0.002 + mesh.userData.pulseOffset) * 0.2;
        mesh.scale.setScalar(scale);
      });

      renderer.render(scene, camera);
    };

    animate();

    // GSAP animations
    gsap.from(binarySprites.map(s => s.material), {
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.5,
      stagger: 0.001
    });

    gsap.from(particleMaterial, {
      opacity: 0,
      duration: 3,
      ease: "power2.out",
      delay: 0.5
    });

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      scene.clear();
      renderer.dispose();
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="cs-3d-background" />;
};

export default CS3DBackground;
