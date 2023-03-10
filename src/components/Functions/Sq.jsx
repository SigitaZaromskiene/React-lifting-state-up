import DelBtn from "../Buttons/DelBtn";
import CloneBtn from "../Buttons/CloneBtn";
import SpinBtn from "../Buttons/SpinBtn";

function Sq(props) {
  return (
    <div>
      <div
        className={"sq " + (props.s.spin ? "spin" : " ")}
        style={{
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
        <SpinBtn
          className="sml-btn-green"
          sq={props.s}
          setSq={props.setSq}
          id={props.id}
        ></SpinBtn>{" "}
        <div>{props.s.number}</div>
      </div>
    </div>
  );
}

export default Sq;
