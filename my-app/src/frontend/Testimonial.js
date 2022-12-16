import quotationMark from '../assets/quotation-mark.svg';

function Testimonial(props) {
  const { text, author } = props;

  return (
    <section className='testimonial' aria-label='Customer testimonials'>
      <div className='container'>
        <img src={quotationMark} alt="Quotation marks"></img>
        <blockquote className='testimonial__quote'>{text}</blockquote>
        <figcaption className='testimonial__caption'>{author}</figcaption>
      </div>
    </section>
  );
}

export default Testimonial;
