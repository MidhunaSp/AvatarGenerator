import React, { useRef, useEffect } from 'react';

const AvatarCanvas = ({ config }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background
    ctx.fillStyle = config.background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw face
    ctx.fillStyle = 'peachpuff';
    if (config.face === 'round') {
      ctx.beginPath();
      ctx.arc(150, 150, 100, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillRect(50, 50, 200, 200);
    }

    // Draw eyes
    ctx.fillStyle = 'black';
    if (config.eyes === 'happy') {
      ctx.beginPath();
      ctx.arc(110, 120, 10, 0, Math.PI * 2);
      ctx.arc(190, 120, 10, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillRect(100, 110, 20, 10);
      ctx.fillRect(180, 110, 20, 10);
    }

    // Draw hair
    ctx.fillStyle = 'brown';
    if (config.hair === 'short') {
      ctx.fillRect(80, 50, 140, 50);
    } else {
      ctx.fillRect(50, 50, 200, 70);
    }

    // Draw clothes
    ctx.fillStyle = 'blue';
    if (config.clothes === 'tshirt') {
      ctx.fillRect(80, 250, 140, 100);
    } else {
      ctx.fillRect(60, 250, 180, 120);
    }
  }, [config]);

  const downloadAvatar = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'avatar.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div>
      <canvas ref={canvasRef} width={300} height={400}></canvas>
      <button onClick={downloadAvatar}>Download Avatar</button>
    </div>
  );
};

export default AvatarCanvas;
