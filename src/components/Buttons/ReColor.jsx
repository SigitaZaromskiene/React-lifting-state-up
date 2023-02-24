import randomColor from "../Functions/RandomColor";

function ReColor(props) {
  const reColorHandler = () => {
    props.setSq((prev) => prev.map((a) => ({ ...a, color: randomColor() })));
  };
  return (
    <button className={props.classes} onClick={reColorHandler}>
      Re-Color
    </button>
  );
}

export default ReColor;
