import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProductSearched } from 'redux/actions';
import HeaderStyled from './Header.style';

export default function Header() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const searched = product.trim();
    if (searched.length <= 0) return;

    dispatch(setProductSearched(searched));
  };

  const handleChange = ({ target }) => {
    setProduct(target.value);
  };

  return (
    <HeaderStyled className='header'>
      <Link to="/">Home</Link>
      <form onSubmit={handleSubmit} className="header__form">
        <input
          className="header__form__input"
          placeholder="You´re looking for something?"
          type="text"
          value={product}
          onChange={handleChange}
        />
      </form>
    </HeaderStyled>
  );
}
