import ColumnsCards from 'containers/ColumnsCards/ColumnsCards';
import { useFilterProducts } from 'hooks/useFilterProducts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllProducts } from 'redux/modules/products/action';
import { getAllProducts } from 'services/getAllProducts';

function Home() {
  const dispatch = useDispatch();
  const wordSearched = useSelector((state) => state.products.product);
  const { productsToShow, isMatch } = useFilterProducts({ wordSearched }); 

  useEffect(() => {
    getAllProducts().then((products) => dispatch(setAllProducts(products)));
  }, [dispatch]);


  return (
    <div className="Home">
      <ColumnsCards
        products={productsToShow}
      />
    </div>
  );
}

export default Home;
