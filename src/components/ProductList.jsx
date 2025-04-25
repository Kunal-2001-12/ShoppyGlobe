import React, { useState } from 'react';
import ProductItem from './ProductItem';
import useFetchProducts from '../hooks/useFetchProducts';
import SearchBar from './SearchBar';

function ProductList() {
  const { products, loading, error } = useFetchProducts();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="product-list">
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p>No products found matching your search.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default ProductList;
