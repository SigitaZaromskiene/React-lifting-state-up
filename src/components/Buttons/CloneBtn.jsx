import { v4 as uuidv4, v4 } from "uuid";

function CloneBtn(props) {
  const cloneHandler = (id) => {
    props.setSq((s) => [...s, { ...props.sq, id: uuidv4() }]);
  };
  return (
    <button className={props.className} onClick={cloneHandler}>
      Clone
    </button>
  );
}

export default CloneBtn;
