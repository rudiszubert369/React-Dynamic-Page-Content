import './Testimonial.css';

function Testimonial(props) {
  const { text, author } = props;

  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

export default Testimonial;
