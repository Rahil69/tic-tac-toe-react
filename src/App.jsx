let loggedIn = false;
let content = <div>youre logged in </div>;

const App = () => {
  return (
    <>
      <div>{loggedIn && content}</div>
    </>
  );
};
export default App;
