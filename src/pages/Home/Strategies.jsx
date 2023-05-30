import React from 'react'
import styled from 'styled-components'

function Strategies() {
  return (
    <Container>
      <Left></Left>
      <Mid>
      <h2>Strategies & policies</h2>
       <div className='gallery'>
         <img src='images/Home/image4.jpg'></img>
         <img src='images/Home/image2.png'></img>
         <img src='images/Home/image3.jpg'></img>
       </div> 
       <div className='gallery'>
         <img src='images/Home/image1.jpg'></img>
         <img src='images/Home/image2.png'></img>
         <img src='images/Home/image4.jpg'></img>
       </div> 
      </Mid>
      <Right></Right>
    </Container>
  )
}

export default Strategies

const Container=styled.div`
height:90vh;
max-width:100%; 
display:flex;
margin-bottom:4rem;
h2{
  margin-bottom:2rem;
}
`
const Left=styled.div`
width:9%;
`
const Right=styled.div`
width:9%;
`
const Mid=styled.div`
width:82%;
.gallery{
 display:flex;
 margin-bottom:2rem;
}
img{
  width:29.5%;
  border-radius:20px;
  margin-top:1rem;
  margin-bottom:1rem;
  margin-left:0.5px;
  margin-right:3.56rem;
}

`
