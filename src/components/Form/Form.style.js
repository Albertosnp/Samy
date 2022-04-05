import styled from 'styled-components';
import { $primary } from 'styles/_variables';

const FormStyled = styled.form`
  .form {
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
`;

export default FormStyled;
