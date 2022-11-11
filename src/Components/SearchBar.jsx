import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Select, Stack } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from "react-icons/bs";


const SearchBar = () => {
  return (
    <Box bg="white" w="50"  display='flex'  alignItems='center'>
        <Stack spacing={4}>
  <InputGroup>
    <InputLeftElement
  
      pointerEvents='none'
      mt='10'
      children={<BsSearch color='gray.300'  />}
    />
    <Input type='text' p={10} placeholder='Location'ml={20}  border='none' />
    <Input type="date" placeholder='Check in'  border='none'/>
    <Input type="date" placeholder='Check out' border='none'/>
    <FormControl>

  <Select placeholder='Select country' mt='10' border='none'>
    <option>United Arab Emirates</option>
    <option>Nigeria</option>
  </Select>
</FormControl>
<Button bg='#0F7AE5' color='white'pl='25' pr='25' ml='5'border='none' >SEARCH</Button>

  </InputGroup>


</Stack>
    </Box>
  )
}

export default SearchBar