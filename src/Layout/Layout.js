import { Outlet } from 'react-router-dom';

import Header from 'containers/Header/Header';
import LayoutStyled from './Layout.styled';

function Layout() {
  return (
    <LayoutStyled>
      <Header />
      <Outlet />
    </LayoutStyled>
  );
}

export default Layout;
