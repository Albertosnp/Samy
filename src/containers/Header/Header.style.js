import styled from 'styled-components';
import { $secondary } from 'styles/_variables';

const HeaderStyled = styled.nav`
  width: 100%;
  height: 170px;
  background-color: ${$secondary};
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .header {
    &__logo {
      width: 100px;
      height: 100px;
    }
  }
`;

export default HeaderStyled;
