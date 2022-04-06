import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProductSearched } from 'redux/actions';
import logo from 'assets/img/logo.jpg';
import HeaderStyled from './Header.styled';
import { Form } from 'components/Form/Form';

let timeout;
export default function Header() {
  const dispatch = useDispatch();
  const [wordSearched, setWordSearched] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const searched = wordSearched.trim();
    dispatch(setProductSearched(searched));
  };

  const handleChange = ({ target }) => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {

      const searched = target.value.trim();
      setWordSearched(target.value);
      dispatch(setProductSearched(searched));
    }, 1000);
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
