import React from 'react';
import '../../styles/header.scss'
import logo from '../../assets/nav-logo.png'
import { Link } from 'react-router-dom';

function Header() {

  

  return (
    <div className='nav nav-light shadow-sm d-flex align-items-center justify-content-around p-2 pt-0 pb-0'>
            <div className="logo">
                  <img src={logo} alt="" />
            </div>
            <div className="menu d-flex align-items-center gap-5">
                  <Link to='home' className='text-decoration-none text-light'>Asosiy</Link>
                  <Link to='courses' className='text-decoration-none text-light'>Kurslar</Link>
                  <Link to='about' className='text-decoration-none text-light'>Biz haqimizda</Link>
                  <Link to='contact' className='text-decoration-none text-light'>Bog'lanish</Link>
            </div>
    </div>
  );
}

export default Header;