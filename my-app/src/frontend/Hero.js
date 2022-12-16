
function Hero(props) {
  const { text, img } = props;
    return (
      <section className='hero' aria-label='Featured content'>
        <h3 className='hero__title'>{text}</h3>
        <img src={img} alt='hero' className='hero__img'/>
      </section>
    );
};

export default Hero;
