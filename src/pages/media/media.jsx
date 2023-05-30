import React from 'react';
import Header from '../../Components/Header/Header';
import Carousel from './carousel';
import Search from './search';
import Arts from './arts';
import Footer from '../../Components/Header/footer';

function Media() {
  return (
    <>
    <Header/>
    <Carousel/>
    <Search />
    <Arts/>
    <Footer/>
    </>
  );
}

export default Media;
