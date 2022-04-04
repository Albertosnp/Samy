import { Outlet } from 'react-router-dom';

import Menu from 'containers/Menu/Menu';

function Layout() {
  return (
    <div>
      <Menu />
      <hr />
      
      <Outlet />
    </div>
  );
}

export default Layout;
