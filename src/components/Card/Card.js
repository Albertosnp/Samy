import { GrDislike, GrLike } from 'react-icons/gr';
import CardStyled from './Card.style';

export const Card = ({ product, handleLike }) => {
  const { author, price, liked, likes_count, main_attachment, title } = product;

  const handleClick = () => {
    handleLike && handleLike({ id: product.id });
  };

  return (
    <CardStyled className="card">
      <img className="card__image" src={main_attachment.small} alt={title} />
      <div className="card__price">{price} €</div>
      <div className="card__titleBlock">
        <p className="card__titleBlock__title">{title}</p>
        <p className="card__titleBlock__author">by {author}</p>
      </div>
      <div className="card__likes">
        <button className="card__likes__button" onClick={handleClick}>
          {liked ? <GrDislike /> : <GrLike />}
        </button>
        <span className="card__likes__count">{likes_count}</span>
      </div>
    </CardStyled>
  );
};
