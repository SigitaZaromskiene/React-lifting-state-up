function ClearBtn(props) {
  const clearHandler = () => {
    props.setSq([]);
  };
  return (
    <button className={props.classes} onClick={clearHandler}>
      Clear
    </button>
  );
}

export default ClearBtn;
