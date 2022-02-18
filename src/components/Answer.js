import { useContext } from 'react';
import DrawingsContext from '../store/drawings-context';
import classes from './Answer.module.css';

const Answer = (props) => {
  const ctx = useContext(DrawingsContext)

  return (
    <section className={classes['answer-container']}>
      {props.gameoverHandler ? 
        (<button className="btn center" onClick={props.restartHandler}>Restart</button>) 
        : (ctx.drawings[props.currentDrawing].answers.map(answers => 
        <button key={answers.text} className="btn" onClick={() => props.answerHandler(answers.correct)}>{answers.text}</button>))
      }    
    </section>
  );
}
 
export default Answer;