function Filter(props) {
  const filterHandler = () => {
    props.setSq((a) =>
      a.map((a) =>
        a.number > 300 ? { ...a, show: true } : { ...a, show: false }
      )
    );
  };
  return (
    <div>
      <button onClick={filterHandler} className={props.classes}>
        Filter less than 300
      </button>
    </div>
  );
}

export default Filter;
