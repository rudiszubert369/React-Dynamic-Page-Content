function Hero(props) {
  const { text, img } = props;

    return (
      <section className='hero' aria-label='Featured content'>
        <div className='hero__text__column'>
          <h3 className='hero__title'>{text}</h3>
        </div>
        <div className='hero__image__column'>
          <img src={img} alt='Hero image' className='hero__img'/>
        </div>
      </section>
    );
};

export default Hero;
