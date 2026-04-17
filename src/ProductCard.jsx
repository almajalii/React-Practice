export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-category-badge">{product.category}</div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
    </div>
  );
}
