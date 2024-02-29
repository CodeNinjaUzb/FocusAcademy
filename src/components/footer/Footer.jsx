import React from 'react';
import logo from '../../assets/foot-logo.png'
import '../../styles/footer.scss'

function Footer() {
  return (
      <div className="footer">
            <div className='foot-items d-flex align-items-center justify-content-around p-2'>
                  <div className="logo">
                        <img src={logo} alt="" />
                  </div>
                  <div className="contact">
                        <div className="item d-flex align-items-center gap-3">
                              <i className='fa-solid fa-phone'></i>
                              <p className='text-light m-0'>+998992293737</p>
                        </div>
                        <div className="item d-flex align-items-center gap-3">
                              <i className='fa-solid fa-phone'></i>
                              <p className='text-light m-0'>+998993164421</p>
                        </div>
                        <div className="item d-flex align-items-center gap-3">
                              <i className='fa-brands fa-telegram text-info'></i>
                              <a className='text-light text-decoration-none' href='https://t.me/focusacademy_admin'>Focus Academy</a>
                        </div>
                        <div className="item d-flex align-items-center gap-3">
                              <i className='fa-brands fa-instagram'></i>
                              <a className='text-light text-decoration-none' href='https://www.instagram.com/__focusacademy__'>Focus Academy</a>
                        </div>
                  </div>
            </div>
            <div className="cer d-flex align-items-center justify-content-center p-1">
                  <p className='text-light'>© Focus Academy, Inc. All rights reserved.</p>
            </div>
      </div>
  );
}

export default Footer;