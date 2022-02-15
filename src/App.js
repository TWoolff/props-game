import { useState, useEffect } from "react";
import data from './assets/data';

function App() {
  const [drawings] = useState(data)
  const [currentDrawing, setCurrentDrawing] = useState(0)
  const [score, setScore] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [isFalse, setIsFalse] = useState(false)
  const [showGameOver, setShowGameOver] = useState(false)

  const handleClick = (correct) => {
    if (correct) {
      setIsCorrect(true)
      setScore(score + 1) 
    } else {
      setIsFalse(true)
    }

    if (currentDrawing + 1 < drawings.length) {
      setTimeout(() => {
        setCurrentDrawing(currentDrawing + 1)
        setIsCorrect(false)
        setIsFalse(false)
      }, 1000) 
    } else {
      setTimeout(() => {
        setIsCorrect(false)
        setIsFalse(false)
        setShowGameOver(true)
      }, 1000)
    }  
  }

  const handleRestart = () => {
    setIsCorrect(false)
    setIsFalse(false)
    setCurrentDrawing(0)
    setScore(0)
    setShowGameOver(false)
  }
  
  return (
    <main className="App">
      <header>
        <h1>Filmquizzen</h1>
      </header> 
      <section className="drawing-container">
        {showGameOver ? ( <h2>GAME OVER</h2>) : (<img src={`/img/${drawings[currentDrawing].img}`} alt="drawing"/>)}  
      </section>
      {isCorrect && (<section className="response-container correct">Korrekt</section>)}
      {isFalse && (<section className="response-container incorrect">Forkert</section>)}
      <section className="answer-container">
        {showGameOver ? ( <button className="btn center" onClick={handleRestart}>Restart</button> ) : (drawings[currentDrawing].answers.map(answers => <button key={answers.text} className='btn' onClick={() => handleClick(answers.correct)}>{answers.text}</button>))}    
      </section>
      <section className="score-container">
        <aside className="circle">
          <h3>{score}/{data.length}</h3>
        </aside>
      </section>
    </main>
  );
}

export default App;
