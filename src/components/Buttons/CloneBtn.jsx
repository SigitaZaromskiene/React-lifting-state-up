import { v4 as uuidv4, v4 } from "uuid";

function CloneBtn(props) {
  const cloneHandler = (id) => {
    const clone = props.sq.find((s) => s.id === props.sq.id);
    props.setSq((s) => [...s, { ...clone, id: uuidv4() }]);
  };
  return (
    <button className={props.className} onClick={cloneHandler}>
      Clone
    </button>
  );
}

export default CloneBtn;
