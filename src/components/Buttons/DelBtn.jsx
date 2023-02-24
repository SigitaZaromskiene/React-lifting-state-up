function DelBtn(props) {
  const deleteHandler = (id) => {
    props.setSq((s) => s.filter((s) => s.id !== props.square.id));
  };
  return (
    <button className={props.className} onClick={deleteHandler}>
      Del
    </button>
  );
}
export default DelBtn;
