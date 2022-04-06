import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GrDislike, GrLike } from 'react-icons/gr';
import CardStyled from './Card.styled';

export const Card = ({ product, handleLike }) => {
  const { author, price, liked, likes_count, main_attachment, title } = product;

  const handleClick = () => {
    handleLike && handleLike({ id: product.id });
  };

  const classLikeButton = classNames({
    'card__likes__button': true,
    'card__likes__button--liked': liked,
    'card__likes__button--unliked': !liked,
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
        <button className={classLikeButton} onClick={handleClick} type="button">
          <Icon/>
        </button>
        <span className="card__likes__count">{likes_count}</span>
      </div>
    </CardStyled>
  );
};

Card.propTypes = {
  product: PropTypes.shape({ 
    author: PropTypes.string, 
    price: PropTypes.number, 
    liked: PropTypes.bool, 
    likes_count: PropTypes.number, 
    main_attachment: PropTypes.shape({
      small: PropTypes.string,
    }), 
    title: PropTypes.string }).isRequired,
  handleLike: PropTypes.func,
};