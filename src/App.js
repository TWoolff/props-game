import { useState } from 'react'
import data from './assets/data'
import Drawing from './components/Drawing'
import Answer from './components/Answer'
import Score from './components/Score'
import DrawingsContext from './store/drawings-context'

function App() {
  const [drawings] = useState(data)
  const [currentDrawing, setCurrentDrawing] = useState(0)
  const [score, setScore] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [isFalse, setIsFalse] = useState(false)
  const [showGameOver, setShowGameOver] = useState(false)

  return (
    <main className="App">
      <header>
        <h1>Filmquizzen</h1>
      </header>
      <DrawingsContext.Provider value={{drawings, currentDrawing, setCurrentDrawing, score, setScore, isCorrect, setIsCorrect, isFalse, setIsFalse, showGameOver, setShowGameOver}}>
        <Drawing />
        {isCorrect && (<section className="response-container correct">Korrekt</section>)}
        {isFalse && (<section className="response-container incorrect">Forkert</section>)}  
        <Answer />
        <Score />
      </DrawingsContext.Provider>
    </main>
  )
}

export default App
