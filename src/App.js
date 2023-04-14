import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

import './components/customstyle.css';

import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';

function App() {
  const helmetContext = {};
  
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Little Lemon Restaurant</title>
          <meta name="description" content="Little Lemon Restaurant web application" />
          <meta name="og:title" content="Little Lemon Restaurant" />
          <meta name="og:description" content="Little Lemon Restaurant web application" />
          <meta name="og:image" content="./images/logo.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
        </Helmet>
      </HelmetProvider>

      <Nav />
      <Header />
      <Footer />

    </>
  );
}

export default App;
