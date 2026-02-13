import "./ProductCard.css";

function ProductCard({ name, price, stock }) {
  return (
    <div className="card">
      <div className="image-box"></div>

      <h2>{name}</h2>
      <p className="price">${price}</p>

      <span className={stock ? "badge in" : "badge out"}>
        {stock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}

export default ProductCard;
