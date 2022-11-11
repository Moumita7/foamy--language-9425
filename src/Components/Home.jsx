// import { Container } from '@chakra-ui/react'
import React from 'react'
import { Carasol } from './Carasol'
import Header from './Header'
import HomeFooter from './HomeFooter'
import Maintwo from './Maintwo'
import Middlepage from './Middlepage'
import Navbar from './Navbar'
import Sliderr from './Sliderr'
import Slidertwo from './Slidertwo'


const Home = () => {
  return (

<>
<Navbar/>
<Header/>
<Sliderr/>
{/* <Carasol/> */}
<Middlepage/>
<Maintwo/>
<Slidertwo/>
<HomeFooter/>



</>


  )
}

export default Home