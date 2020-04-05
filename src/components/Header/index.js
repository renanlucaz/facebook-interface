import React from 'react';

import FaceLogo from '../../assets/logo.png';

import './styles.css';

function Header() {
  return (
    <header>
      <img src={FaceLogo} alt="Facebook logo" />
    </header>
  );
}

export default Header;
