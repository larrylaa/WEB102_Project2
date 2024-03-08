import React, { useState, useEffect } from 'react';
import './card.css';

const Card = ({ question, answer, flipped, setFlipped, color, image}) => {
  console.log(color);
  const [isFlipped, setIsFlipped] = useState(flipped);

  useEffect(() => {
    setIsFlipped(flipped);
  }, [flipped]);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    setFlipped(!isFlipped);
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div style={{ backgroundColor: color }} className="front">
        <h2>{question}</h2>
        {image && <img style={{width: 250, paddingLeft: '20px'}} src={image} alt="Image" />}
      </div>
      <div style={{ backgroundColor: color }} className="back">
        <h2>{answer}</h2>
      </div>
    </div>
  );
};

export default Card;
