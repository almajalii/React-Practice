import ProductCard from './ProductCard';

export default function ProductList({ products }) {
  if (products.length === 0) {
    return <p className="no-products">No products match your criteria.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
