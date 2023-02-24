function StopSpinBtn(props) {
  const stopSpinHandler = () => {
    props.setSq((s) => s.map((s) => ({ ...s, spin: false })));
  };
  return (
    <button onClick={stopSpinHandler} className={props.classes}>
      Stop spin
    </button>
  );
}

export default StopSpinBtn;
