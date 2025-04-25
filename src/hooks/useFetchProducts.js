import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        console.log('API Response:', response.data); // Log the API response
        setProducts(response.data.products); // Assuming the API returns a 'products' array
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err); // Log the error
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
}

export default useFetchProducts;
