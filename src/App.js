import { useState } from "react";
import Drawing from "./components/Drawing";
import Answer from "./components/Answer";
import Score from "./components/Score";
import DrawingProvider from "./store/DrawingProvider";

function App() {
  const [currentDrawing, setCurrentDrawing] = useState(0)
  const [score, setScore] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [isFalse, setIsFalse] = useState(false)
  const [showGameOver, setShowGameOver] = useState(false)

  const handleClick = (correct) => {
    if(correct) {
      setIsCorrect(true)
      setScore(score + 1) 
    } else {
      setIsFalse(true)
    }

    if (currentDrawing + 1 < 33) {
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
      <DrawingProvider>
        <Drawing gameoverHandler={showGameOver} currentDrawing={currentDrawing}/>
        {isCorrect && (<section className="response-container correct">Korrekt</section>)}
        {isFalse && (<section className="response-container incorrect">Forkert</section>)}  
        <Answer currentDrawing={currentDrawing} answerHandler={handleClick} gameoverHandler={showGameOver} restartHandler={handleRestart} />
        <Score currentScore={score} />
      </DrawingProvider>
    </main>
  );
}

export default App;
