import React from 'react'
// import styled from 'styled-components'
import SVGComponent from './India2'
function Regions_of_India() {
  const ROIstyles ={
    display : "block",
    maxHeight:"100vh",
    maxWidth:"100vw",
    marginTop:'8.188rem',
    marginBottom:"1rem",
    position:"relative",
    boxSizing:"border-box"
  }
  const ROItext={
    margin: '1% 12% -8vh 12%',
    width: '76%',
    height: '4%',
    fontFamily: 'Mulish',
    fontWeight: '800',
    fontSize: '40px',
    fontStyle: 'normal',
    lineHeight: '80px',
    color: '#737373',
    textAlign:"center"
  }
  return (
    <div style={ROIstyles}>
      
        <h2 style={ROItext}>Regions of India</h2>
        <SVGComponent/>
     
      
    </div>
  )
}

export default Regions_of_India


