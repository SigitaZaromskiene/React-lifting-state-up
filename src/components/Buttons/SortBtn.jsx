function SortBtn(props) {
  const sortHandler = () => {
    props.setSq((a) => [...a].sort((a, b) => a.number - b.number));
  };
  return (
    <div>
      <button onClick={sortHandler} className={props.classes}>
        Sort
      </button>
    </div>
  );
}

export default SortBtn;
