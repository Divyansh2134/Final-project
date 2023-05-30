import React from 'react';
import styled from "styled-components";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LanguageIcon from '@mui/icons-material/Language';

function Header1(){
  return(
    <Container>
      <div className='header'>
         <div className='space1'></div>
         <div className='Topleft'>
           <div ><a href='!#'>Schemes & Guidelines</a></div>
           <div><a href='!#'>Parliament Questions</a></div>
           <div><a href='!#'>RTI</a></div>
           <div><a href='!#'>Tenders</a></div>
           <div><a href='!#'>Public Grievences</a></div>
         </div>
         <div className='mid'></div>
         <div className='Topright'>
           <div className='sz Hover'>AA+</div>
           <div className='perm Hover'><PermIdentity/><div className='login '>Login</div></div>
           <div className='lang Hover'><Languages/><div className='hindi '>Hindi</div></div>
         </div>
         <div className='space1'></div>
      </div>
  

    </Container> 
  );
}

export default Header1;


const Container=styled.div`
position: absolute;
a{
  font-family: 'Mulish';
font-style: regular;
font-weight: 600;
font-size: 17px;
text-decoration:none;
color: #25313C;
}
${'' /* position:fixed; */}

Top:0rem;
width:100%;
background: white;
.header{
  align-items: center;
  height:2.625rem;
  display:flex;
  text-align:center;
}
.space1{
  width:10%;
  height:2.625rem;
}
.mid{
  width:17%;
  height:2.625rem;
}
.Topleft{
  width:54%;
  display:flex;
 justify-content:space-between;
 height:2.625rem;
 align-items: center;
 div{
  font-family: 'Mulish';
font-style: regular;
font-weight: 600;
font-size: 17px;
line-height: 21px;
color: #25313C;

 }
}
.Topright{
  width:20%;
  display:flex;
 justify-content:space-around;
 height:2.625rem;
 align-items: center;
 .div{
font-family: 'Mulish';
font-style: regular;
font-weight: 600;
font-size: 16.5385px;
line-height: 21px;
color: #25313C;
}
.sz{
font-size: 19.457px;
line-height: 24px;
letter-spacing: 0.02em;
}
.perm{
  display:flex;
  justify-conent:space-around;
}
.login{
  display:flex;
  justify-content: center;
    align-items: center;
    font-family: 'Mulish';
font-style: regular;
}
.lang{
  display:flex;
  justify-conent:space-around;
}
.hindi{
  display:flex;
  justify-content: center;
    align-items: center;
    font-family: 'Mulish';
font-style: regular;
}
.Hover{
    cursor:pointer;
}
}
`



const PermIdentity =styled(PermIdentityIcon)`
`
const Languages= styled(LanguageIcon)`
`
