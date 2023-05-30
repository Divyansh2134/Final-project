import React from 'react'
import styled from 'styled-components'

function Explore() {
  return (
    <Container>
        <Left></Left>
        <Mid>
           <h2>Explore some great places</h2>
           <div className='wrapper'>
            <div className='inside first'>
             <div className='imagediv'><img src='/images/Home/explore/img1.png'></img></div>
             <div className='imagediv'><img src='/images/Home/explore/img1.png'></img></div>
             <div className='imagediv'><img src='/images/Home/explore/img12.jpg'></img></div>
             <div className='imagediv'><img src='/images/Home/explore/img4.png'></img></div>
            </div> 
            <div className='inside'>
             <div className='imagediv'><img src='/images/Home/explore/img6.jpg'></img></div>
             <div className='imagediv'><img src='/images/Home/explore/img6.jpg'></img></div>
             <div className='imagediv'><img src='/images/Home/explore/img7.png'></img></div>
             <div className='imagediv'><img src='/images/Home/explore/img7.png'></img></div>
            </div>
            <div className='inside'> 
             <div className='imagediv'><img src='/images/Home/explore/img10.png'></img></div>
             <div className='imagediv'><img src='/images/Home/explore/img10.png'></img></div>
             <div className='imagediv'><img src='/images/Home/explore/img11.jpg'></img></div>
             <div className='imagediv'><img src='/images/Home/explore/img12.jpg'></img></div>
            </div> 
           </div>
        </Mid>
        <Right></Right>
    </Container>
  )
}

export default Explore

const Container=styled.div`
height:120vh;
width:100%;
display:flex;
`
const Left=styled.div`
width:9%;
`
const Right=styled.div`
width:9%;
`
const Mid=styled.div`
width:82%;
.wrapper{
  width:100%;
  height:110vh;
.inside{
  display:flex;
  margin-top:1rem;
  margin-bottom:1rem;
}
.first{
  margin-top:4rem;
}
.imagediv{
  width:25%;
    height:100%;
    padding:1rem;
}
.imagediv:hover{
  padding:0rem;
}
img {
    width:100%;
    height:100%;
    border-radius:10px;
 }
`