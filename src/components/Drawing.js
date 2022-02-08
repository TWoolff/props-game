import './Drawing.css'

const Drawing = (props) => {

  return ( 
    <section className="drawing-container">
      <img src={`/img/${props.data.img}`} alt="drawing"/>
    </section>
   );
}
 
export default Drawing;