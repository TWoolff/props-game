import { useContext } from 'react'
import DrawingsContext from '../store/drawings-context'
import classes from './Answer.module.css'

const Answer = () => {
  const ctx = useContext(DrawingsContext)
  
  const handleClick = (correct) => {
    if(correct) {
      ctx.setIsCorrect(true)
      ctx.setScore(ctx.score + 1) 
    } else {
      ctx.setIsFalse(true)
    }

    if (ctx.currentDrawing + 1 < ctx.drawings.length) {
      setTimeout(() => {
        ctx.setCurrentDrawing(ctx.currentDrawing + 1)
        ctx.setIsCorrect(false)
        ctx.setIsFalse(false)
      }, 10) 
    } else {
      setTimeout(() => {
        ctx.setIsCorrect(false)
        ctx.setIsFalse(false)
        ctx.setShowGameOver(true)
      }, 10)
    } 
  }

  const handleRestart = () => {
    ctx.setIsCorrect(false)
    ctx.setIsFalse(false)
    ctx.setCurrentDrawing(0)
    ctx.setScore(0)
    ctx.setShowGameOver(false)
  }

  return (
    <section className={classes['answer-container']}>
      {ctx.showGameOver ? 
        (<button className="btn center" onClick={handleRestart}>Restart</button>) 
        : (ctx.drawings[ctx.currentDrawing].answers.map(answers => 
        <button key={answers.text} className="btn" onClick={() => handleClick(answers.correct)}>{answers.text}</button>))
      }    
    </section>
  )
}
 
export default Answer