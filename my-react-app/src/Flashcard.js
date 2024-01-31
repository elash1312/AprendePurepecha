// Flashcard.js

import React from 'react';

const Flashcard = ({ question, answer }) => {
  return (
    <div className="flashcard">
      <h3>Question:</h3>
      <p>{question}</p>
      <h3>Answer:</h3>
      <p>{answer}</p>
    </div>
  );
};

export default Flashcard;
