const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];
const App = () => {
  return (
    <>
      {products.map((item) => {
        return (
          <div key={item.id}>
            PRODUCT NAME: {item.title} PRODUCT ID: {item.id}
          </div>
        );
      })}
    </>
  );
};
export default App;
