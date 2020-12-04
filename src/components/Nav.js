import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/favorite', text: 'Favorites' },
];

const Nav = () => {
  return (
    <div>
      <ul>
        {LINKS.map(item => {
          return (
            <li key={item.to}>
              <Link to={item.to}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Nav;
