function Filter(props) {
  const filterHandler = () => {
    props.setSq((a) => a.filter((a) => a.number > 300));
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
