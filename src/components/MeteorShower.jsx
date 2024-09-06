import React, { useEffect } from 'react';

const MeteorShower = ({ count }) => {
  useEffect(() => {
    const container = document.querySelector('.meteor-shower-container');

    const createMeteor = () => {
      const meteor = document.createElement('div');
      meteor.className = 'meteor absolute top-0 w-1 h-24 bg-gradient-to-b from-white to-transparent';
      meteor.style.left = `${Math.random() * 100}%`;
      meteor.style.animationDuration = `${Math.random() * 3 + 2}s`;
      container.appendChild(meteor);

      setTimeout(() => {
        meteor.remove();
      }, 5000);
    };

    for (let i = 0; i < count; i++) {
      setTimeout(createMeteor, i * 200);
    }
  }, [count]);

  return <div className="meteor-shower-container absolute inset-0 overflow-hidden pointer-events-none"></div>;
};

export default MeteorShower;
