import { useState } from "react";
import data from './assets/data';

function App() {
  const drawings = data

  const [currentDrawing, setCurrentDrawing] = useState(0)
  const [score, setScore] = useState(0)
  const [response, setResponse] = useState('')
  const [showGameOver, setShowGameOver] = useState(false)
  
  const handleClick = (correct) => {
    if (correct) {
      setResponse('Korrekt')
      setScore(score + 1) 
    } else {
      setResponse('Forkert')
    }

    if (currentDrawing + 1 < drawings.length) {
      setTimeout(() => {
        setCurrentDrawing(currentDrawing + 1)
        setResponse('')
      }, 500) 
    } else {
      setTimeout(() => {
        setResponse('')
        setShowGameOver(true)
      }, 1000)
    }  
  }

  const handleRestart = () => {
    setCurrentDrawing(0)
    setScore(0)
    setShowGameOver(false)
    setResponse('')
  }
  
  return (
    <main className="App">
      <header>
        <h1>Filmquizzen</h1>
      </header> 
      <section className="drawing-container">
        {showGameOver ? ( <h2>GAME OVER</h2>) : (<img src={`/img/${drawings[currentDrawing].img}`} alt="drawing"/>)}  
      </section>
      <section className="response-container">
        {response}
      </section>
      <section className="answer-container">
        {showGameOver ? ( <button className="btn center" onClick={handleRestart}>Restart</button> ) : (data[currentDrawing].answers.map(answers => <button key={answers.text} className='btn' onClick={() => handleClick(answers.correct)}>{answers.text}</button>))}    
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
