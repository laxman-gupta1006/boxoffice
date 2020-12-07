import React from 'react';
import { useLocation } from 'react-router-dom';
import { LinkStyled, NavList } from './Nav.styled';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/favorite', text: 'Favorites'},
];

const Nav = () => {
  const location = useLocation();
  return (
    <div>
      <NavList>
        {LINKS.map(item => {
          return (
            <li key={item.to}>
              <LinkStyled to={item.to} className={item.to===location.pathname ? 'active':''}>{item.text}</LinkStyled>
            </li>
          );
        })}
      </NavList>
    </div>
  );
};
export default Nav;
