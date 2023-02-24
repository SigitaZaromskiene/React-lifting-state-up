import "./App.scss";

import Sq from "./components/Functions/Sq";
import { useState } from "react";
import AddBtn from "./components/Buttons/AddBtn";

function App() {
  const [sq, setSq] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="sq-bin">
          {sq.map((s, i) => (
            <Sq key={i} s={s} id={s.id} color={s.color} setSq={setSq}></Sq>
          ))}
        </div>

        <div className="sq-bin">
          <AddBtn setSq={setSq}></AddBtn>
        </div>
      </header>
    </div>
  );
}

export default App;
