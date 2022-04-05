import styled from 'styled-components';
import { $primary, $secondary } from 'styles/_variables';

const CardStyled = styled.article`
  display: inline-block;
  background-color: ${$secondary};
  color: #333;
  margin-bottom: 10px;
  height: 455px;
  width: 400px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  position: relative;
  .card {
    &__image {
      height: 355px;
      width: 100%;
      display: block;
      clip-path: polygon(34% 0, 100% 0, 100% 100%, 0 100%, 0 21%);
    }

    &__price {
      position: absolute;
      top: 20px;
      left: 15px;
      font-weight: bold;
    }

    &__titleBlock {
      min-height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &__title {
        font-size: 1.5em;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 5px;
      }

      &__author {
        font-size: 0.8em;
        font-style: italic;
      }
    }

    &__likes {
      position: absolute;
      top: 0px;
      right: 15px;

      font-size: 1.2rem;
      font-weight: bold;
      color: ${$secondary};

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      opacity: 0;
      transition: all 1s ease-in-out;

      &__button {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        outline: none;
        margin-bottom: 5px;

        background-color: ${$primary};

        &:hover {
          background-color: ${$secondary};
        }
      }
    }
  }

  :hover {
    filter: grayscale(0.7);

    .card__likes {
      opacity: 1;
      top: 35px;
    }
  }
`;

export default CardStyled;
