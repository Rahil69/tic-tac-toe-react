const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://react.dev/images/docs/scientists/yXOvdOSs.jpg",
  imageSize: 90,
};

const App = () => {
  return (
    <>
      <div>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={user.name}
          style={{ width: user.imageSize, height: user.imageSize }}
        />
      </div>
    </>
  );
};
export default App;
