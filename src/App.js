import ProductCard from "./ProductCard";

function App() {
  return (
    <div className="container">
      <ProductCard name="Wireless Headphones" price="129.99" stock={true} />
      <ProductCard name="Mechanical Keyboard" price="89.99" stock={false} />
      <ProductCard name="Smart Watch" price="199.99" stock={true} />
    </div>
  );
}

export default App;
