import './Hero.css';

function Hero(props) {
  const { text, img } = props;
    return (
      <div>
        <h3>{text}</h3>
        <img src={img} alt="hero" />
      </div>
    );
};

export default Hero;
