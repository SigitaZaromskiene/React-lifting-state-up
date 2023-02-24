function AddBtnWithNum(props) {
  const addOneHandler = () => {
    props.setSq((prev) => [...prev, 1]);
  };

  return <button onClick={addOneHandler}>Add button with num</button>;
}
export default AddBtnWithNum;
