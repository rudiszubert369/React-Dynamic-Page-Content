import './App.css';

function Hero(props) {
  const { text, author } = props;

  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

export default Hero;
