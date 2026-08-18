import { use, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  function handleClick() {
    setCounter((prev) => prev + 1);
  }
  return (
    <div>
      <Button count={counter} onClick={handleClick} />
      <Button count={counter} onClick={handleClick} />
    </div>
  );
};

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{`Press me: ${props.count}`}</button>
    </div>
  );
};

export default App;
