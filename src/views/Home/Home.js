import ColumnsCards from 'containers/ColumnsCards/ColumnsCards';
import { useFilterProducts } from 'hooks/useFilterProducts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllProducts } from 'redux/actions';
import { getAllProducts } from 'services/getAllProducts.service';

function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts);
  const wordSearched = useSelector((state) => state.products.product);
  const { productsToShow, isMatch } = useFilterProducts({
    wordSearched,
    allProducts,
  });

  useEffect(() => {
    getAllProducts()
      .then((products) => dispatch(setAllProducts(products)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <div className="Home" data-cy="Home">
      {productsToShow.length > 0 && <ColumnsCards products={productsToShow} />}
    </div>
  );
}

export default Home;
