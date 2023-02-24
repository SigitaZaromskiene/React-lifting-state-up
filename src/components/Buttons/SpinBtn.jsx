function SpinBtn(props) {
  const spinHandler = () => {
    props.setSq((prev) =>
      prev.map((s) =>
        s.id === props.sq.id ? { ...s, spin: !s.spin } : { ...s }
      )
    );
  };
  return (
    <button className={props.className} onClick={spinHandler}>
      Spin
    </button>
  );
}

export default SpinBtn;
