function DefaultSort(props) {
  const defaultSortHandler = () => {
    props.setSq((prev) => [...prev].sort((a, b) => a.row - b.row));
  };
  return (
    <div>
      <button onClick={defaultSortHandler}>Default sort</button>
    </div>
  );
}

export default DefaultSort;
