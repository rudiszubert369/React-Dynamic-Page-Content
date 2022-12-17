function Button(props) {

  return (
    <button className='button-main' type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
