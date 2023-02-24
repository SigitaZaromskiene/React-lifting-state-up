import { v4 as uuidv4, v4 } from "uuid";

function AddBtnWithDel(props) {
  const delBtnHandler = () => {
    props.setSqDelete((prev) => [...prev, { index: uuidv4() }]);
  };
  return <button onClick={delBtnHandler}>Add button with del</button>;
}

export default AddBtnWithDel;
