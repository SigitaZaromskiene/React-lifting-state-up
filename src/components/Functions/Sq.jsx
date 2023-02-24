import DelBtn from "../Buttons/DelBtn";
import CloneBtn from "../Buttons/CloneBtn";

function Sq(props) {
  return (
    <div
      className="sq"
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: props.s.color,
      }}
    >
      <DelBtn
        className="sml-btn-red"
        sq={props.s}
        square={props.s}
        setSq={props.setSq}
      ></DelBtn>
      <CloneBtn
        className="sml-btn-yellow"
        setSq={props.setSq}
        sq={props.s}
      ></CloneBtn>
    </div>
  );
}

export default Sq;
