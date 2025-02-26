import { NavLink } from 'react-router-dom';
// import {
//   InstagramFilled,
//   MailOutlined,
//   MenuOutlined,
//   MobileOutlined,
//   TwitterSquareFilled,
//   UserOutlined,
// } from '@ant-design/icons';
// import { Button } from 'antd';
// import { useState } from 'react';

const AppHeader = () => {
  return (
    <div className='container'>
      <div className='header separator'>
        <div className='logo'>S.O.S Grocery </div>
        <div className='mobileVisibility'></div>
        <nav className='mobileHidden'>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
              Home
            </li>
            <li>
              <NavLink to='/About'>About</NavLink>
              About
            </li>
            <li>
              <NavLink to='/Shop'>Shop</NavLink>
              Shop
            </li>
            <li>
              <NavLink to='/Faq'>Faq</NavLink>
              Faq
            </li>
            <li>
              <NavLink to='/Contact'>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AppHeader;
