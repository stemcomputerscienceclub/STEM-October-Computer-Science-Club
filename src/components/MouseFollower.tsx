import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MousePosition {
  x: number;
  y: number;
}

const MouseFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [scaleX, setScaleX] = useState(1);
  const [yOffset, setYOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      
      setMousePosition(prevPos => {
        // Calculate rotation based on movement direction
        const deltaX = newPosition.x - prevPos.x;
        const deltaY = newPosition.y - prevPos.y;
        
        // Only update rotation if there's significant movement
        if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
          // Handle horizontal direction with scaleX instead of rotation
          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            setScaleX(deltaX > 0 ? 1 : -1);
            setRotation(0); // Keep upright when moving horizontally
          } else {
            // Only rotate for vertical movement
            const angle = deltaY > 0 ? 15 : -15; // Slight tilt up/down
            setRotation(angle);
          }
          
          // Add Y-axis movement based on horizontal mouse movement
          const horizontalMovement = deltaX;
          const yMovement = Math.sin(Date.now() * 0.01) * Math.abs(horizontalMovement) * 0.3;
          setYOffset(yMovement);
        }
        
        return newPosition;
      });
      
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        left: mousePosition.x - 30, // Offset to center the character
        top: mousePosition.y - 30 + yOffset,
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        opacity: { duration: 0.2 },
      }}
    >
      {/* Codey Character Image */}
      <motion.img
        src="/pages/Stickers/codeyride.png"
        alt="Codey"
        width="70"
        height="70"
        className="drop-shadow-lg"
        style={{ 
            objectFit: 'contain', 
            backgroundColor: 'transparent'
          }}
        animate={{
          rotate: rotation,
          scaleX: scaleX
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      />
    </motion.div>
  );
};

export default MouseFollower;