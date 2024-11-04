import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo1.png';

const SplashScreen = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 2500); // Splash screen duration
    return () => clearTimeout(timer);
  }, [onFinish]);

  const fadeInOut = {
    initial: { opacity: 0, scale: 1.5 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeInOut' } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  return (
    <div
      style={{
        display: isVisible ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url(/image.png)', // Path to the background image
        backgroundSize: 'cover', // Ensures the image covers the screen
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
      }}
    >
      <div className="flex flex-col items-center text-center text-yellow-700">
        <motion.img
          src={logo}
          alt="Logo"
          className="mb-4 w-48 h-48"
          variants={fadeInOut}
          initial="initial"
          animate="animate"
          exit="exit"
        />
        <motion.h1
          className="text-4xl font-bold"
          variants={fadeInOut}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          Historical Capitals of India
        </motion.h1>
      </div>
    </div>
  );
};

export default SplashScreen;
