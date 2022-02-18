import { useContext } from 'react';
import DrawingsContext from '../store/drawings-context';
import classes from './Drawing.module.css'

const Drawing = (props) => {
  const ctx = useContext(DrawingsContext)

  return ( 
    <section className={classes['drawing-container']}>
      {props.gameoverHandler ? ( <h2>GAME OVER</h2>) : (<img src={`/img/${ctx.drawings[props.currentDrawing].img}`} alt="drawing" />)}  
    </section>   
   );
}
 
export default Drawing;