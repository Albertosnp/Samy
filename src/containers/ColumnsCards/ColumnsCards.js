import { Card } from 'components/Card/Card';
import { useDispatch } from 'react-redux';
import { setLikeProduct } from 'redux/actions';
import ColumnsCardsStyled from './ColumnsCards.styled';

export default function ColumnsCards({ products }) {
  const dispatch = useDispatch();

  const handleLike = ({ id }) => {
    dispatch(setLikeProduct({ id }));
  };

  return (
    <ColumnsCardsStyled className="columnsCards">
      {products?.map((product) => (
        <Card product={product} key={product.id} handleLike={handleLike} />
      ))}
    </ColumnsCardsStyled>
  );
}
