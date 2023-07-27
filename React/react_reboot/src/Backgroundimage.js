import React, { useState } from "react";
import { Link } from "react-router-dom";

const BackgroundImage = () => {
  const Image1 = 'https://picsum.photos/id/237/200/300';
  const Image2 = 'https://picsum.photos/id/1015/600/400';

  const [backgroundImage, setBackgroundImage] = useState(Image1);

  const handleImageChange = () => {
    setBackgroundImage(Image2);
  };

  const handleReset = () => {
    setBackgroundImage(Image1);
  };

  return (
    <div 
      className="container" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1>Testing Image Background</h1>
      <button onClick={handleImageChange}>Change Image</button>
      <button onClick={handleReset}>Reset</button>
      <Link to="/crud">Go to CRUD</Link>
    </div>
  );
};

export default BackgroundImage;
