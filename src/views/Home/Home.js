import { useEffect, useState } from 'react';
import { getAllProducts } from 'services/getAllProducts';

function Home() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((products) => setAllProducts(products));
  }, []);

  return (
    <div className="Home">
      <p>Home</p>
      
    </div>
  );
}

export default Home;
