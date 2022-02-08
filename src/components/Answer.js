import './Answer.css'

const Answer = (props) => {
  const handleClick = () => {
    console.log('click!')
  }
  return ( 
    <section className="answer-container">
      {props.data.map(answers => <button key={answers.text} className={`btn ${answers.correct.toString()}`} onClick={handleClick}>{answers.text}</button>)}
    </section>
   );
}
 
export default Answer;