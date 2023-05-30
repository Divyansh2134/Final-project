import React from 'react'
import styled from 'styled-components'

function NewsSection() {
  return (
    <Container>
     <Newssection>
     <div className='text'>NEWS<br />
      & 
      <br />
      UPDATES</div>
      <div className='news'>

      </div>
     </Newssection>
    </Container>
  )
}

export default NewsSection

const Container=styled.div`
height:13rem;
width:100%;
display: flex;
align-items: center;
justify-content: center;
`
const Newssection=styled.div`
height:5rem;
width:76%;
display:flex;
.text{
width:10%;
height:100%;
display: flex;
    align-items: center;
    justify-content: center; 
font-family: 'Mulish';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 21px;
color: #000000;
margin-bottom: 4px;
}
.news{
    width:90%;
}
`