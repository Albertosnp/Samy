import classNames from 'classnames';
import { GrDislike, GrLike } from 'react-icons/gr';
import CardStyled from './Card.styled';

export const Card = ({ product, handleLike }) => {
  const { author, price, liked, likes_count, main_attachment, title } = product;

  const handleClick = () => {
    handleLike && handleLike({ id: product.id });
  };

  const classLikeButon = classNames({
    'card__likes__button': true,
    'card__likes__button--liked': liked,
    });
  
  const Icon = liked ? GrLike : GrDislike;

  return (
    <CardStyled className="card">
      <img className="card__image" src={main_attachment.small} alt={title} />
      <div className="card__price">{price} €</div>
      <div className="card__titleBlock">
        <p className="card__titleBlock__title">{title}</p>
        <p className="card__titleBlock__author">by {author}</p>
      </div>
      <div className="card__likes">
        <button className={classLikeButon} onClick={handleClick}>
          <Icon/>
        </button>
        <span className="card__likes__count">{likes_count}</span>
      </div>
    </CardStyled>
  );
};
