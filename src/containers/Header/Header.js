import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProductSearched } from 'redux/actions';
import logo from 'assets/img/logo.jpg';
import HeaderStyled from './Header.styled';
import { Form } from 'components/Form/Form';

export default function Header() {
  const dispatch = useDispatch();
  const [wordSearched, setWordSearched] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const searched = wordSearched.trim();
    dispatch(setProductSearched(searched));
  };

  const handleChange = ({ target }) => {
    setWordSearched(target.value);
  };

  return (
    <HeaderStyled className="header">
      <img
        className="header__logo"
        src={logo}
        alt="logo"
      />
      <Form handleSubmit={handleSubmit} handleChange={handleChange} wordSearched={wordSearched} />
    </HeaderStyled>
  );
}
