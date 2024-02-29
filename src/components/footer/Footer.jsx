import React from 'react';
const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className='footer'>
        (c) {year}
    </footer>
  );
};
export default Footer;  