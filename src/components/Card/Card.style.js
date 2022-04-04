import styled from 'styled-components';
import { $secondary } from 'styles/_variables';

const CardStyled = styled.article`
  display: inline-block;
  background-color: ${$secondary};
  color: #333;
  margin-bottom: 10px;
  height: 455px;
  width: 400px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  position: relative;
  .card{

    &__image{
      height: 355px;
      width: 100%;
      display: block;
      clip-path: polygon(34% 0, 100% 0, 100% 100%, 0 100%, 0 21%);
    }

    &__price{
      position: absolute;
      top: 12px;
      left: 15px;
      font-weight: bold;
    }

    &__titleBlock{
      height: 40px;
    }

  }

`;

export default CardStyled;