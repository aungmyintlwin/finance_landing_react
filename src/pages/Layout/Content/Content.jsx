// lib
import React from 'react';
//custom
import NavBar from '../Header/NavBar/NavBar.jsx'
import Footer from '../Footer/Footer.jsx';

export default function Content({ children }) {
    return (
      <>
        <NavBar/>
        {children}
        <Footer/>
      </>
    )
  }
  