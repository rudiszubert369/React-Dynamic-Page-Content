function Hero (props) {
  const { text, img } = props;

    return (
      <section className='container' aria-label='Featured content'>
        <div className='hero'>
          <div className='hero__text__column'>
            <h3 className='hero__title'>{text}</h3>
          </div>
          <div className='hero__image__column'>
            <img src={img} alt='Hero' className='hero__img'/>
          </div>
        </div>
      </section>
    );
};

export default Hero;
