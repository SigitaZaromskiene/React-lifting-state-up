function SpinAll(props) {
  const stopSpinHandler = () => {
    props.setSq((a) => a.map((a) => ({ ...a, spin: false })));
  };
  return (
    <div>
      <button onClick={stopSpinHandler} className={props.classes}>
        Stop spin all
      </button>
    </div>
  );
}

export default SpinAll;
