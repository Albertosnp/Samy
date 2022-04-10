import { Pagination } from 'components/Pagination/Pagination';
import ColumnsCards from 'containers/ColumnsCards/ColumnsCards';
import { useFilterProducts } from 'hooks/useFilterProducts';
import { usePagination } from 'hooks/usePagination';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllProducts } from 'redux/actions';
import { getAllProducts } from 'services/getAllProducts.service';

function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts);
  const wordSearched = useSelector((state) => state.products.product);
  const { productsToShow } = useFilterProducts({
    wordSearched,
    allProducts,
  });
  const { page, setPageTo, totalPages, productsToShowPaginated } = usePagination({ productsToShow });

  useEffect(() => {
    getAllProducts()
      .then((products) => dispatch(setAllProducts(products)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  console.log(productsToShowPaginated);

  return (
    <div className="Home" data-cy="Home">
      {productsToShowPaginated.length > 0 && <ColumnsCards products={productsToShowPaginated} />}
      <Pagination page={page} setPageTo={setPageTo} totalPages={totalPages} />
    </div>
  );
}

export default Home;
