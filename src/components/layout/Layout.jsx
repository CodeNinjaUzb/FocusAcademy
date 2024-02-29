import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../../styles/layout.scss'
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='layout d-flex flex-column justify-content-between'>
            <Header />
            <div className="main">
                  <Outlet />
            </div>
            <Footer />
    </div>
  );
}

export default Layout;