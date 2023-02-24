import { useState } from "react";
import Buttons from "./Buttons";
import Show from "./Show";

function Count() {
  const [addone, setAddOne] = useState(1);

  return (
    <div>
      <Show count={addone}></Show>
      <Buttons setAddOne={setAddOne}></Buttons>
    </div>
  );
}

export default Count;
