import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.scss';

function Header() {
  return (
    <h1>
      {' '}
      Generate a random quote!
      <FontAwesomeIcon icon="bolt-lightning" size="2x" />
    </h1>
  );
}

export default Header;
