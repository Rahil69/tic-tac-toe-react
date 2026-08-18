import { use, useState } from "react";

const Button = () => {
  const [counter, setCounter] = useState(0);
  function handleClick() {
    setCounter((prev) => prev + 1);
  }
  return (
    <div>
      <button onClick={handleClick}>{`Press me: ${counter}`}</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Button />
      <Button />
      <Button />
    </div>
  );
};

export default App;
