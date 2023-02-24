import { v4 as uuidv4, v4 } from "uuid";
import RandomColor from "../Functions/RandomColor";

function AddBtn(props) {
  const addBtnHandler = () => {
    props.setSq((prev) => [...prev, { id: uuidv4(), color: RandomColor() }]);
  };
  return <button onClick={addBtnHandler}>Add one</button>;
}

export default AddBtn;
