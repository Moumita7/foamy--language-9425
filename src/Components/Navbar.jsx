import React from 'react'
import { Box, Button, ButtonGroup, Container, Flex, Heading, Icon, Image, Spacer, Text, useDisclosure } from '@chakra-ui/react'
import { BsPerson,BsFillCaretDownFill,BsBorderWidth } from "react-icons/bs";
// import ff from "../Logo/tour.png"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    // Container
  } from '@chakra-ui/react'


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box bg='#262626' w='100%' m={0}  p={15} color='white'>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
  
    {/* <Image src={ff} w={150} h={30}/> */}

    <Image src='https://d2v8elt324ukrb.cloudfront.net/static/riotuikit/images/logo.c72056a22f91.png' w={150} h={30}/>
  </Box>
  <Spacer />
  <ButtonGroup gap='10' pr={40}>
  {/* <Container m={auto}> */}
  <Icon as={BsPerson} w={26} h={26} onClick={onOpen} />



{/* <Button onClick={onOpen}>Open Modal</Button> */}

<Modal isOpen={isOpen} onClose={onClose}>
  {/* <ModalOverlay /> */}
  <ModalContent >
    {/* <ModalHeader>Modal Title</ModalHeader> */}
    <ModalCloseButton />
    <ModalBody  bg="white">
      {/* <Lorem count={2} /> */}
     <h4>login</h4>
     <h4>signup</h4>

    </ModalBody>

  <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
      {/* <Button variant='ghost'>Secondary Action</Button> */}
    </ModalFooter> 
  </ModalContent>
</Modal>
 

    <Text as="h4">INR<Icon as={BsFillCaretDownFill}  w={14} h={14}/></Text>
    <Icon as={BsBorderWidth}/>

  </ButtonGroup>
  {/* </Container> */}
  
</Flex>
    </Box>
  )
}

export default Navbar