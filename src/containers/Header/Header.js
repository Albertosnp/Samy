import { Link } from 'react-router-dom';
import HeaderStyled from './Header.style';

export default function Menu() {
  return (
    <HeaderStyled>
      <Link to="/">Home</Link>
      <input type="text" />

      {/* <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/about`}>About</Link>
        </li>
      </ul> */}
    </HeaderStyled>
  );
}
