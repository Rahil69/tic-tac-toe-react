const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];
const App = () => {
  return (
    <>
      <ul>
        {products.map((item) => {
          return (
            <li
              key={item.id}
              style={{ color: item.isFruit ? "magenta" : "blue" }}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default App;
