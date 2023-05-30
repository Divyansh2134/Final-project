import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Header/footer'
import Part_1 from './Part_1'
import Timeline from'./Timeline'
import Cards from './cards'
import 'bootstrap/dist/css/bootstrap.css';
import More_Cards from './More_Cards'
import './cards.css'
// import {useState} from 'react';
const About_Us = () => {
  const [more, setMore]=useState(false);
  function scrollWin(x, y) {
    window.scrollBy(x, y);
  }
  function changeMore(){
  (more==true) ? setMore(false) : setMore(true);}
  function showMore(){
      return(
         <div>{(more==false)? <div className="container mt-5 text-center">
         <button type="button" onClick={()=>{changeMore();scrollWin(0,500)}} className="btn btn-outline-dark effectButton">View All Destination</button>
         
     </div>:
          <div><More_Cards/>
           <div className="container mt-5 text-center">
                <button type="button" onClick={changeMore} className="btn btn-outline-dark effectButton">View Less</button>
                {/* <div>{window.scrollBy(0, +5000)}</div> */}
            </div>
          </div> }
          </div>
          )
  }
  return (
    <div style={{maxWidth:'100vw'}}>
      <Header/>
      <Part_1/>
      <Timeline/>
      <Cards/>
      <div>{showMore()}</div>
      <Footer/>
    </div>
  )
}

export default About_Us
