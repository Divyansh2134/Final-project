import React, { useState, useEffect } from 'react'
import ImageSection from './ImageSection'
import NewsSection from './NewsSection'
import Regions_of_India from './Regions_of_India'
import Strategies from './Strategies'
import Popular from './Popular'
import Explore from './Explore'
import styled from 'styled-components'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Header/footer'


function Home() {
  const [data, setData] = useState('not hiting');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/check');
      const textData = await response.text();
      setData(textData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };




  return (
    <Container >
      <Header />
      {/* <p>{data}</p> */}
      <ImageSection />
      {/* <NewsSection /> */}
      <Regions_of_India />
      <Strategies />
      <Popular />
      <Explore />
      <Footer />
    </Container>
  )
}

export default Home

const Container=styled.div`
padding-top: 8.5rem;
`