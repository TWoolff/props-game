import { useContext } from 'react';
import DrawingsContext from '../store/drawings-context';
import classes from './Drawing.module.css'

const Drawing = () => {
  const ctx = useContext(DrawingsContext)

  return ( 
    <section className={classes['drawing-container']}>
      {ctx.showGameOver ? (<h2>GAME OVER</h2>) : (<img src={`/img/${ctx.drawings[ctx.currentDrawing].img}`} alt="drawing" />)}  
    </section>   
   );
}
 
export default Drawing;