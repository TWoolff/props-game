import './Answer.css'

const Answer = (props) => {
  return ( 
    <section className="answer-container">
      {props.data.answers.map((answers) => <button key={answers.text} className='btn'>{answers.text}</button>)}
    </section>
   );
}
 
export default Answer;