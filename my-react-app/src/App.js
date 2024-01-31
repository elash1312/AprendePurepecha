import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css'; // or your stylesheet
import Flashcard from './Flashcard'; // Import the Flashcard components
// App.js
// App.js
import { flashcardsData } from './FlashcardsData';


// App.js

function App() {
  const flashcardsData = {
    question: "Nombre de este color:",
    answer: 'Urápiti',
    imageName: '/images/Urápiti.jpg',
    choices: ['Turhípiti', 'Xunhaptsï', 'Urápiti', 'Uachásï'],
  };

  const [randomFlashcard, setRandomFlashcard] = useState({});

  useEffect(() => {
    // Select a random flashcard when the component mounts
    generateRandomFlashcard();
  }, []);

  const generateRandomFlashcard = () => {
    const randomIndex = Math.floor(Math.random() * flashcardsData.length);
    const selectedFlashcard = flashcardsData[randomIndex];
    setRandomFlashcard(selectedFlashcard);
  };
  
  

  return (
    <div className="App">
      <h1>Aprende Purépecha</h1>
      <Flashcard {...randomFlashcard} />
      <button onClick={generateRandomFlashcard}>Generate Random Flashcard</button>
    </div>
  );
}

export default App;




