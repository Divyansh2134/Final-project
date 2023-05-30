import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


function TravelData() {


        const [departureText, setDepartureText] = useState('New Delhi');
        const [destinationText, setDestinationText] = useState('Manali');

        const handledepartureChange = (e) => {
            setDepartureText(e.target.value);
          };
        const handledestinationChange = (e) =>{
            setDestinationText(e.target.value);
        };

        const [departureDate, setDepartureDate] = useState("13-05-2023");
        const [returnDate, setReturnDate] = useState("20-05-2023");

        const handledeparturedateChange = (e) => {
            setDepartureDate(e.target.value);
          };
        const handlereturndateChange = (e) =>{
            setReturnDate(e.target.value);
        };

  return (
    <BigContainer>
    <Container>
    <Left></Left>
     <Mid>
        <Place>
         <div className='from'>
         <p>From</p>
            <form>
                <input type="text" id='textboxid' value={departureText} onChange={handledepartureChange}  size="10"></input>
            </form>
         </div>
         <div className='to'>
         <p>To</p>
            <form>
                <input type="text" id='textboxid' value={destinationText} onChange={handledestinationChange}  size="10"></input>
            </form>
         </div>
        </Place>
        <JournyDate>
        <div className='Departure'>
         <p>From</p>
            <form>
                <input type="date" id='textboxid' value={departureDate} onChange={handledeparturedateChange}  size="6" style={{ width: '120px' }} ></input>
            </form>
         </div>
         <div className='Return'>
         <p>To</p>
            <form>
                <input type="date" id='textboxid' value={returnDate} onChange={handlereturndateChange}  size="6" style={{ width: '120px' }}></input>
            </form>
         </div>
        </JournyDate>
        <Budget>
           <div className='budget'>
           <p>Budget</p>
           <form>
           <span>₹</span><input type="number" id='textboxid' size="10"></input>
            </form>
           </div>
        </Budget>
    </Mid>
    <Right></Right>
     

    </Container>
    <Search>
    <button  style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '15px 45px', borderRadius: '4px' }  }>Search</button>
    </Search>
    </BigContainer>
  )
}

export default TravelData

const BigContainer=styled.div`
height : 20rem;
`

const Container=styled.div`
margin-top:10rem;
height: 8rem;
display:flex;
`

const Place=styled.div`
height:6.25rem;
width:17.5rem;
background-color:#F9E8E8;
display:flex;
justify-content:space-between;

input{
    border-width:0px;
    background-color:#F9E8E8;
}

#textboxid{
    height:2rem;
    font-size:20px;
}
`
const JournyDate=styled.div`
height:6.25rem;
width:20rem;
background-color:#F9E8E8;
display:flex;
justify-content:space-between;

input{
    border-width:0px;
    background-color:#F9E8E8;
}

#textboxid{
    height:2rem;
    font-size:20px;
}
`
const  Budget=styled.div`
height:6.25rem;
width:15rem;
background-color:#F9E8E8;
span{
    fontSize: 30px;
}
input{
    border-width:0px;
    background-color:#F9E8E8;
}

#textboxid{
    height:2rem;
    font-size:20px;
}
`

const Search=styled.div`
margin-top:15px;
display:flex;
justify-content:center;
`

const Left=styled.div`
width:9%;
`
const Right=styled.div`
width:9%;
`
const Mid=styled.div`
width:82%;
display:flex;
justify-content:space-around;
align-items: center; 
`


