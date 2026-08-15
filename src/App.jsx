import { use, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  function myFunction() {
    setCounter((prev) => prev + 1);
  }
  return (
    <div>
      <button
        onClick={myFunction}
      >{`Click me to increment: ${counter}`}</button>
    </div>
  );
};

export default App;
