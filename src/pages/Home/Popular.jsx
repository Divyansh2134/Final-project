import React from 'react'
import styled from 'styled-components'


function Popular() {
  return (
    <Container>
       <Left></Left>
      <Mid>
      <h2>Popular Places</h2>
       <div className='main'>
          <div className='top'>
            <div className='topleft'><img src='images/Home/popular/img1.png'></img></div>
            <div className='toprightparent'>
              <div className='toprightchild'>
                    <div className='right' ><img src='images/Home/popular/img2.png'></img></div>
                    <div className='right'><img src='images/Home/popular/img4.png'></img></div>
              </div>
              <div className='toprightchild'>
                    <div className='right'><img src='images/Home/popular/img2.png'></img></div>
                    <div className='right'><img src='images/Home/popular/img4.png'></img></div>
              </div>  
            </div>
          </div>
          <div className='bottom'>
            <div className='bottomleftparent'>
            <div className='bottomleftchild'>
                    <div className='left' ><img src='images/Home/popular/img2.png'></img></div>
                    <div className='left'><img src='images/Home/popular/img4.png'></img></div>
              </div>
              <div  className='bottomleftchild'>
                    <div  className='left'><img src='images/Home/popular/img2.png'></img></div>
                    <div className='left'><img src='images/Home/popular/img4.png'></img></div>
              </div>  
            </div>
            <div className='bottomright'><img src='images/Home/popular/img5.png'></img></div>
          </div>
       </div> 
      </Mid>
      <Right></Right>
    </Container>
  )
}

export default Popular

const Container=styled.div`
height:140vh;
max-width:100%;
display:flex;
margin-bottom:4rem;
`
const Left=styled.div`
width:9%;
`
const Right=styled.div`
width:9%;
`
const Mid=styled.div`
width:82%;
height:140vh;
h2{
  height:10%;
}
img {
    width:100%;
    height:100%;
    border-radius:10px;
    object-fit: fill;
 }
.main{
  height:100%;
  width:100%;
}
// top css start
.top{
    display:flex;
    height:45%;
    width:100%;
}
.topleft{
  width:50%;
  height:100%;
  padding:10px;
}
.topleft:hover{
  padding:0px;
}
.toprightparent{
  display:block;
  width:50%;
}
.toprightchild{
  height:50%;
  width:100%;
  display:flex;
}
.right{
  height:100%;
  padding:10px;
  width:50%;
}
.right:hover{
  padding:0px;
}

// bottom css start
.bottom{
    display:flex;
    height:45%;
    width:100%;
}
.bottomright{
  width:50%;
  height:100%;
  padding:10px;
}
.bottomright:hover{
  padding:0px;
}
.bottomleftparent{
  display:block;
  width:50%;
}
.bottomleftchild{
  height:50%;
  width:100%;
  display:flex;
}
.left{
  height:100%;
  padding:10px;
  width:50%;
}
.left:hover{
  padding:0px;
}
`