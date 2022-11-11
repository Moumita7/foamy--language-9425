import { Center, Container, Text } from '@chakra-ui/react'
import React from 'react'
import "../styles/header.css"
import SearchBar from './SearchBar'


const Header = () => {
  return (
    <>
    <div className='header'>


        
    </div>
    <div className='text_pos'>

    <h1>Book Hotels Vacation Rentals</h1>
    <h1>Top Holiday Homes - Villas, Apartments & Homestays</h1>
    <div>
    <div>
    <SearchBar/>
    </div>
 
    </div>
   

 
    </div>

    </>

  )
}

export default Header