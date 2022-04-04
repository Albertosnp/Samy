import styled from 'styled-components';
import { $primary, $secondary } from 'styles/_variables';

const HeaderStyled = styled.nav`
  width: 100vw;
  height: 100px;
  background-color: ${$secondary};
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .header {
    &__form {
      &__input {
        border: none;
        outline: none;
        width: 100%;
        min-width: 268px;
        height: 30px;
        border-radius: 0.5em;
        background-color: ${$primary};
      }

      &__input:focus {
        border: none;
        outline: none;
      }
    }
  }
`;

export default HeaderStyled;
