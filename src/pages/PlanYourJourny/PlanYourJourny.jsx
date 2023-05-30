import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Header/footer'
import styled from 'styled-components'
import TravelData from './TravelData'


function PlanYourJourny() {
  return (
    <Container>
     <Header />

     <Title>
       <h1>Plan Your <span style={{color: "#F35757"}}> Budget </span> <br/> <span style={{color: "#F35757"}} >Friendly</span> Journy</h1> 
     </Title>

     <TravelData />


     <Footer  />
    </Container>
  )
}

export default PlanYourJourny

const Container = styled.div`
padding-top: 12rem ;
`
const Title = styled.div`
top: 5.656 rem ;
text-align: center;
`


