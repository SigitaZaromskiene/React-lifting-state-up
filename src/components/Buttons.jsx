function Buttons(props) {
  return (
    <div>
      <button onClick={() => props.setAddOne((a) => a + 1)}>Add one</button>
      <button onClick={() => props.setAddOne(1)}>Reset</button>
    </div>
  );
}

export default Buttons;
