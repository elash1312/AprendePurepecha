// Flashcard.js

import React, { useState } from 'react';

const Flashcard = ({ question, answer, imageName, choices }) => {
  console.log({ question, answer, imageName, choices });
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (choice) => {
    setSelectedAnswer(choice);
  };

  return (
    <div className="flashcard">
      <h3>Pregunta:</h3>
      <p>{question}</p>

      {imageName && <img src={imageName} alt="Flashcard" style={{ maxWidth: '100%' }} />}

      <h3>Respuesta:</h3>
      <div className="choices">
        {choices.map((choice, index) => (
          <div
            key={index}
            className={`choice ${selectedAnswer === choice ? 'selected' : ''}`}
            onClick={() => handleAnswerClick(choice)}
          >
            {choice}
          </div>
        ))}
      </div>

      {selectedAnswer && (
        <p className={`feedback ${selectedAnswer === answer ? 'correct' : 'incorrect'}`}>
          {selectedAnswer === answer ? 'Correct!' : 'Incorrect!'}
        </p>
      )}
    </div>
  );
};

export default Flashcard;
