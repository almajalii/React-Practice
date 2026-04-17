import { useState } from 'react';
import ProductList from './ProductList';

const allProducts = [
  { id: 1, name: 'Laptop Pro', category: 'Electronics', price: 1299.99 },
  { id: 2, name: 'Wireless Headphones', category: 'Electronics', price: 199.99 },
  { id: 3, name: 'Running Shoes', category: 'Sports', price: 89.99 },
  { id: 4, name: 'Yoga Mat', category: 'Sports', price: 34.99 },
  { id: 5, name: 'Coffee Maker', category: 'Kitchen', price: 79.99 },
  { id: 6, name: 'Blender', category: 'Kitchen', price: 49.99 },
  { id: 7, name: 'Novel: The Great Escape', category: 'Books', price: 14.99 },
  { id: 8, name: 'React Cookbook', category: 'Books', price: 39.99 },
];

const categories = ['All', ...new Set(allProducts.map((p) => p.category))];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('none');
  const [search, setSearch] = useState('');

  const filtered = allProducts
    .filter((p) =>
      selectedCategory === 'All' ? true : p.category === selectedCategory
    )
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'asc') return a.price - b.price;
      if (sortOrder === 'desc') return b.price - a.price;
      return 0;
    });

  return (
    <div className="products-container">
      <h2>Products</h2>

      <div className="products-controls">
        <input
          className="search-bar"
          type="text"
          placeholder="Search products…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filter-sort-row">
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                className={selectedCategory === cat ? 'active' : ''}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="sort-buttons">
            <span>Sort by price:</span>
            <button
              className={sortOrder === 'asc' ? 'active' : ''}
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'none' : 'asc')}
            >
              ↑ Low → High
            </button>
            <button
              className={sortOrder === 'desc' ? 'active' : ''}
              onClick={() => setSortOrder(sortOrder === 'desc' ? 'none' : 'desc')}
            >
              ↓ High → Low
            </button>
          </div>
        </div>
      </div>

      <p className="products-count">{filtered.length} product(s) found</p>
      <ProductList products={filtered} />
    </div>
  );
}
