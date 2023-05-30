import React from 'react';
// import './App.css';
import Header from '../../Components/Header/Header';
import Carousel from './carousel';
import PopularSearch from './popularSerach';
import Categories from './categories';
import Destination from './destination';
import Footer from '../../Components/Header/footer';

function Typesoftravel() {
  return (
    <>
    <Header/>
    <Carousel/>
    <PopularSearch/>
    <Categories/>
    <Destination/>
    <Footer/>
    </>
  );
}

export default Typesoftravel;
