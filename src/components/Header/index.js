import React from 'react';

import FaceLogo from '../../assets/logo.png';

import './styles.css';

function Header() {
  const avatar = 'https://avatars1.githubusercontent.com/u/52937668?v=4';

  return (
    
    <header>
      <img src={FaceLogo} alt="Facebook logo" />

      <div className="profile">
        <p>Meu perfil</p>
        <img src={avatar} alt="User avatar"/>
      </div>
    </header>
    
  );
}

export default Header;
