import React, { useState,useEffect } from 'react'
import styled from 'styled-components';
import Searchbar from './Searchbar/Searchbar';
import './header2.css'
import { NavLink } from "react-router-dom";



function Header2 () {
  

  return (
    <Container  >
    <div className='flex'>
      <Left></Left>
      <Mid>
        <div className='left'>
        <img src='/images/Home/emblem.jpg' alt='img'></img>
        </div>
        <div className='leftspace'></div>
        <div className='mid'>
          <div className='Hover'><NavLink className='textcolor'  to='/'>Home</NavLink></div>
          <div className='Hover'><NavLink className='textcolor' to='/about'>About Us</NavLink></div>
          <div className='Hover'><NavLink className='textcolor' to='/plan'>Plan your journy</NavLink></div>
          <div className='Hover'><NavLink className='textcolor' to='/media'>Media</NavLink></div>
          <div className='Hover'><NavLink className='textcolor' to='/types'>Travel</NavLink></div>
        </div>
        <div className='rightspace'></div>
        <div className='right'>
         <Searchbar />
        </div>
      </Mid>
      <Right></Right>
      </div>
      
      <Bottomline/>
    </Container>
  )
}

export default Header2;

const Container=styled.div`
background-color:white;
width:100%;
height:5.563rem;
Top:2.625rem;
position: absolute;
${'' /* position:fixed; */}
.flex{
  display:flex;
}

`
const Left=styled.div`
width:9%;
height:5.563rem;
`
const Mid=styled.div`
width:82%;
height:5.563rem;
display:flex;
justify-content:space-between;
div{
    display:flex;
  justify-content: center;
    align-items: center;
    font-family: 'Mulish';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 25px;

color: rgba(37, 49, 60, 0.95);
}
img{
    width:100%;
    height:100%;
    object-fit: contain;
}
.left{
    width:13%;
}
.leftspace{
    width:7%;
}
.mid{
    width:60%;
    display:flex;
    justify-content:space-around;
}
.rightspace{
    width:7%;
    
}
.right{
    width:13%;
}
.Hover{
    cursor:pointer;
    
}

.textcolor{
  color:rgba(37,49,60,0.95) !important;
}

`
const Right=styled.div`
width:9%;
height:5.563rem;
`

const Bottomline=styled.div`
width: 100%;
height: 1px;
left: 0px;
top: 8.188rem;
background: #D9D9D9;
`



