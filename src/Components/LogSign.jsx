import React from 'react'

import { Box, Button,  Icon,  useDisclosure } from '@chakra-ui/react'
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


const LogSign = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
   <>
  <Icon as={BsPerson} w={26} h={26} onClick={onOpen} />



{/* <Button onClick={onOpen}>Open Modal</Button> */}

<Modal isOpen={isOpen} onClose={onClose} size="2xl">
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
   </>
  )
}

export default LogSign