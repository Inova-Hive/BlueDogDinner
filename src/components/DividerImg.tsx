import React, { useState, useEffect } from 'react';

const DividerImg: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
      <img src="https://i.imgur.com/bZOGUn8.jpg" alt="Divider" />
    </div>
  );
};

export default DividerImg;
