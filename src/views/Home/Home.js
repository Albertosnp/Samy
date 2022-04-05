import ColumnsCards from 'containers/ColumnsCards/ColumnsCards';
import { useEffect, useState } from 'react';
import { getAllProducts } from 'services/getAllProducts';

function Home() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((products) => setAllProducts(products));
  }, []);

  return (
    <div className="Home">
      <ColumnsCards products={allProducts} />
    </div>
  );
}

export default Home;
