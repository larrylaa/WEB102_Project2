import React, { useState } from 'react';
import './App.css';
import Card from './components/card';

function App() {
  const [count, setCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [flipped, setFlipped] = useState(false); 

  const flashcards = [
    {
      question:"Who is this man?",
      image: "https://yt3.googleusercontent.com/AfqNfJy_kaReKMIHuB4-20TMgmCx9o8Zbn2_A_wJAul14H82Gy7q63oaC6KiEcootgepScJX8Yc=s900-c-k-c0x00ffffff-no-rj",
      answer: "THE GOAT - BLACKPENREDPEN",
      color: "lightyellow",
    },

    {
        question: "Integral of sin(x)",
        answer: "-cos(x) + C",
        color: "lightblue",
    },
    {
        question: "Derivative of cot(x)",
        answer: "-csc^2(x)",
        color: "white",
    },
    {
        question: "Derivative of sin(x)",
        answer: "cos(x)",
        color: "white",
    },
    {
        question: "sin(2x)",
        answer: "2sin(x)cos(x)",
        color: "lightgreen",
    },
    {
        question: "Derivative of ln(x)",
        answer: "1/x",
        color: "white",
    },
    {
        question: "Integral of tan(x)",
        answer: "-ln|cos(x)| + C",
        color: "lightblue",
    },
    {
        question: "Derivative of sec(x)",
        answer: "sec(x)tan(x)",
        color: "white",
    },
    {
        question: "Derivative of cos(x)",
        answer: "-sin(x)",
        color: "white",
    },
    {
        question: "Integral of cot(x)",
        answer: "ln|sin(x)| + C",
        color: "lightblue",
    },
    {
        question: "Integral of cos(x)",
        answer: "sin(x) + C",
        color: "lightblue",
    },
    {
        question: "tan(x)",
        answer: "sin(x) / cos(x)",
        color: "lightgreen",
    },
    {
        question: "Derivative of csc(x)",
        answer: "-csc(x)cot(x)",
        color: "white",
    },
    {
        question: "1 + cot^2(x)",
        answer: "csc^2(x)",
        color: "lightgreen",
    },
    {
        question: "Derivative of e^x",
        answer: "e^x",
        color: "white",
    },
    {
        question: "Integral of 1/x",
        answer: "ln|x| + C",
        color: "lightblue",
    },
    {
        question: "Integral of sec(x)",
        answer: "ln|sec(x) + tan(x)| + C",
        color: "lightblue",
    },
    {
        question: "cos(2x)",
        answer: "cos^2(x) - sin^2(x)",
        color: "lightgreen",
    },
    {
        question: "sec(x)",
        answer: "1 / cos(x)",
        color: "lightgreen",
    },
    {
        question: "csc(x)",
        answer: "1 / sin(x)",
        color: "lightgreen",
    },
    {
        question: "1 + tan^2(x)",
        answer: "sec^2(x)",
        color: "lightgreen",
    },
    {
        question: "sin^2(x) + cos^2(x)",
        answer: "1",
        color: "lightgreen",
    },
    {
        question: "Derivative of csc(x)",
        answer: "-csc(x)cot(x)",
        color: "white",
    },
    {
        question: "Derivative of cot(x)",
        answer: "-csc^2(x)",
        color: "white",
    },
    {
        question: "Derivative of e^x",
        answer: "e^x",
        color: "white",
    },
    {
        question: "Derivative of sec(x)",
        answer: "sec(x)tan(x)",
        color: "white",
    },
    {
        question: "Integral of sin(x)",
        answer: "-cos(x) + C",
        color: "lightblue",
    },
    {
        question: "1 + cot^2(x)",
        answer: "csc^2(x)",
        color: "lightgreen",
    },
    {
        question: "Integral of cos(x)",
        answer: "sin(x) + C",
        color: "lightblue",
    },
    {
        question: "Integral of tan(x)",
        answer: "-ln|cos(x)| + C",
        color: "lightblue",
    },
    {
        question: "1 + tan^2(x)",
        answer: "sec^2(x)",
        color: "lightgreen",
    },
    {
        question: "Derivative of cos(x)",
        answer: "-sin(x)",
        color: "white",
    },
    {
        question: "Integral of 1/x",
        answer: "ln|x| + C",
        color: "lightblue",
    },
    {
        question: "tan(x)",
        answer: "sin(x) / cos(x)",
        color: "lightgreen",
    },
    {
        question: "Integral of cot(x)",
        answer: "ln|sin(x)| + C",
        color: "lightblue",
    },
    {
        question: "cos(2x)",
        answer: "cos^2(x) - sin^2(x)",
        color: "lightgreen",
    },
    {
        question: "sec(x)",
        answer: "1 / cos(x)",
        color: "lightgreen",
    },
    {
        question: "Derivative of sin(x)",
        answer: "cos(x)",
        color: "white",
    },
    {
        question: "sin(2x)",
        answer: "2sin(x)cos(x)",
        color: "lightgreen",
    },
    {
        question: "Derivative of ln(x)",
        answer: "1/x",
        color: "white",
    },
    {
        question: "csc(x)",
        answer: "1 / sin(x)",
        color: "lightgreen",
    },
    {
        question: "Integral of sec(x)",
        answer: "ln|sec(x) + tan(x)| + C",
        color: "lightblue",
    },
    {
        question: "Derivative of cot(x)",
        answer: "-csc^2(x)",
        color: "white",
    },
    {
        question: "1 + cot^2(x)",
        answer: "csc^2(x)",
        color: "lightgreen",
    },
    {
        question: "Derivative of e^x",
        answer: "e^x",
        color: "white",
    },
    {
        question: "Integral of sin(x)",
        answer: "-cos(x) + C",
        color: "lightblue",
    },
    {
        question: "Derivative of sec(x)",
        answer: "sec(x)tan(x)",
        color: "white",
    },
    {
        question: "Derivative of csc(x)",
        answer: "-csc(x)cot(x)",
        color: "white",
    },
    {
        question: "Derivative of cos(x)",
        answer: "-sin(x)",
        color: "white",
    },
    {
        question: "Integral of tan(x)",
        answer: "-ln|cos(x)| + C",
        color: "lightblue",
    },
    {
        question: "cot(x)",
        answer: "1 / tan(x)",
        color: "lightgreen",
    },
];
  
  const handleNext = () => {
    setFlipped(false); 
    setCount(count + 1 >= flashcards.length ? 0 : count + 1);
    document.getElementById("guess").value = "";
    document.getElementById("guess").style.background = 'revert';
  };

  const handlePrev = () => {
    setFlipped(false); 
    setCount(count - 1 < 0 ? flashcards.length - 1 : count - 1);
    document.getElementById("guess").value = "";
    document.getElementById("guess").style.background = 'revert';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (flipped === false) {
        const userAnswer = document.getElementById("guess").value
        const correctAnswer = flashcards[count].answer;
        if (userAnswer === correctAnswer) {
            document.getElementById("guess").style.background = 'lightgreen';
            setStreak(streak+1);
        }
        else {
            document.getElementById("guess").style.background = 'pink';
            setStreak(0);
        }
    }
    else {
        document.getElementById("guess").value = "Flipped! Guessing Disabled!";
        document.getElementById("guess").style.background = 'red';
    }
  }

  return (
    <>
      <div>
        <h1>Trigonometry Essentials For Calculus!</h1>
        <p>How strong are your trigonometry fundamentals? Test or practice your knowledge here!</p>
        <h4>Cards Reviewed: {count}</h4>
        <h4>Guess Streak: {streak}</h4>
      </div>

      <div className="centercard">
        <Card
          question={flashcards[count].question}
          answer={flashcards[count].answer}
          color={flashcards[count].color}
          image={flashcards[count].image}
          flipped={flipped}
          setFlipped={setFlipped}
        />
      </div>

      <div>
        <form onSubmit={handleSubmit}>
            <label for="guess">Guess Answer: </label>
            <input type="text" id="guess"></input>
            <input type="submit" className="stylesubmit"></input>
        </form>
      </div>

      <div className="centerbutton">
        <button onClick={handlePrev}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
}

export default App;
