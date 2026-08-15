const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];
const App = () => {
  return (
    <>
      <ul>
        {products.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </>
  );
};
export default App;
