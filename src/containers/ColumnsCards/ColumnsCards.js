import { Card } from "components/Card/Card";
import ColumnsCardsStyled from "./ColumnsCards.style";

export default function ColumnsCards({ products }) {
  return (
    <ColumnsCardsStyled className="columnsCards">
      {products?.map((product) => (
        <Card product={product} key={product.id}/>
      ))}
    </ColumnsCardsStyled>
  );
}

