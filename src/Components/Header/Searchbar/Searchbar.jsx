import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'

function Searchbar() {
  return (
    <Search>
      <form action='' className='Search-bar'>
      <input type='text' id='text' placeholder='Search'></input>
      <SearchI/>
      </form>
    </Search>
  )
}

export default Searchbar

const Search=styled.div`

.Search-bar{
width:100%;
border-width:1px;
border-style:solid;
border-color:#252525;
border-radius: 6px;
display:flex;
}
#text{
    width:80%;
    height:100%;
    border:0;
    border-radius: 6px;
    background:transparent;
    flex:1;
    outline:none;
    font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 100%;
line-height: 20px;

color: rgba(37, 49, 60, 0.49);
}
#button{
    width:20%
}
`

const SearchI=styled(SearchIcon)`
  cursor:pointer;
width:20%;
`
