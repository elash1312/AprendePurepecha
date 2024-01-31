import logo from './logo.svg';
import React from 'react';
import './App.css'; // or your stylesheet
import Flashcard from './Flashcard'; // Import the Flashcard components

// App.js

function App() {
  return (
    <div className="App">
      <h1>My Flashcard App</h1>
      <Flashcard question="What is the capital of France?" answer="Paris" />
    </div>
  );
}

export default App;



