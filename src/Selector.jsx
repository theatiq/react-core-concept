import { useState } from "react";
export default function Selector() {
  const [select, setSelect] = useState(0);
  const selectedPlus = () => {
    const newSelect = select + 1;
    setSelect(newSelect);
  };
  const selectedMinus = () => {
    const newSelect = select - 1;
    setSelect(newSelect);
  };
  return (
    <div>
      <h1>Selected: {select}</h1>
      <button onClick={selectedPlus}>Select+</button>
      <button onClick={selectedMinus}>Select-</button>
    </div>
  );
}
