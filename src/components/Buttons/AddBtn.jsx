import { v4 as uuidv4, v4 } from "uuid";
import RandomColor from "../Functions/RandomColor";
import RandomNum from "../Functions/RandomNum";

function AddBtn(props) {
  const addBtnHandler = () => {
    props.setSq((prev) => [
      ...prev,
      {
        id: uuidv4(),
        color: RandomColor(),
        spin: false,
        number: (" " + RandomNum(0, 999)).padStart(3, "0"),
      },
    ]);
  };
  return <button onClick={addBtnHandler}>Add one</button>;
}

export default AddBtn;
