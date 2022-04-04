import CardStyled from "./Card.style";

export const Card = ({ product }) => {
  console.log(product);
  const { author, price, liked, likes_count, main_attachment, title } = product;
  return (
    <CardStyled className="card">
      <img className="card__image" src={main_attachment.small} alt={title} />
      <div className="card__price">{price} €</div>
      <div className="card__titleBlock">
        <p className="card__titleBlock__title">{title}</p>
        <p className="card__titleBlock__author">by {author}</p>
      </div>
      <div className="card__likes">
        <span className="card__likes__count">{likes_count}</span>
      </div>
    </CardStyled>
  );
};
