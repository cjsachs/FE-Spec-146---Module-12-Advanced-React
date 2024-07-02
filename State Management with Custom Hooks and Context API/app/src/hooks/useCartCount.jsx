import { useEffect, useState } from 'react';

const useCartCount = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetchCartCount();
  }, []);

  const fetchCartCount = async () => {
    const response = await fetch('https://fakestoreapi.com/carts/1');
    const data = await response.json();
    setCartCount(data.products.length);
  };

  return cartCount;
};

export default useCartCount;
