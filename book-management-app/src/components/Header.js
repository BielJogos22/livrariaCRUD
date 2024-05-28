import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Zapp App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Lista de Contatos
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Contato
        </NavLink>
      </div>
    </header>
  );
};

export default Header;