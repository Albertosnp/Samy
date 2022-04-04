import styled from 'styled-components';
import { $primary, $secondary } from 'styles/_variables';

const HeaderStyled = styled.nav`
  width: 100%;
  height: 100px;
  background-color: ${$secondary};
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .header {
    &__form {
      &__wrapper {
        position: relative;
        display: flex;
        min-width: 100px;

        &__input {
          border: none;
          outline: none;
          width: 100%;
          min-width: 268px;
          height: 30px;
          border-radius: 0.5em;
          background-color: ${$primary};
          padding: 2px 23px 2px 30px;
        }

        &__input:focus {
          border: none;
          outline: none;
        }

        &__icon {
          position: absolute;
          top: 8px;
          left: 8px;
          width: 14px;
        }
      }
    }
  }
`;

export default HeaderStyled;
