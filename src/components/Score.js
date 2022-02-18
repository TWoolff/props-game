import { useContext } from 'react';
import DrawingsContext from '../store/drawings-context';
import classes from './Score.module.css';

const Score = (props) => {
  const ctx = useContext(DrawingsContext)

  return ( 
    <section className={classes['score-container']}>
      <aside className={classes.circle}>
        <h3>{props.currentScore}/{ctx.drawings.length}</h3>
      </aside>
    </section>
  );
}
 
export default Score;