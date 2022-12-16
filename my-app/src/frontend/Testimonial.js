
function Testimonial(props) {
  const { text, author } = props;

  return (
    <section className='testimonial' aria-label='Customer testimonials'>
      <img></img>
      <blockquote className='testimonial__quote'>{text}</blockquote>
      <figcaption className='testionial__figcaption'>{author}</figcaption>
    </section>
  );
}

export default Testimonial;
