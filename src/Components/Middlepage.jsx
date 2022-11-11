import { Box, Flex, Image, SimpleGrid, Square, Text } from '@chakra-ui/react'
import '../styles/header.css'



import React from 'react'

const Middlepage = () => {
  return (
<Flex>
  {/* <Center w='100px' bg='green.500'>
  <Text>Box 1</Text>
</Center> */}
<Box boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px;'  mt='10' ml='40' p='10' borderRadius='10' textAlign='center'>
<h3 >Fully Managed</h3>
<h3> Communities By Tripvillas</h3>
<SimpleGrid columns={2} spacing={10} mt='15'>
<Square bg='blue.500' size='150px' display='f'>
<Image  src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/housekeeper.svg" w='50' h='50'/>
  <Text color='#737373'>High Quality housekeeping</Text>
</Square>
<Square bg='blue.500' size='150px'  display='f'>
<Image src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/towel.svg" w='50' h='50'/>
<Text color='#737373'>Comfortable Linen and Toiletries</Text>
</Square>
<Square bg='blue.500' size='150px' display='f'>
<Image src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/bed.svg" w='50' h='50'/>
  <Text color='#737373'>Quality Furniture & Fittings</Text>
</Square>
<Square bg='blue.500' size='150px'  display='f'>
<Image src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/dinner.svg" w='50' h='50'/>
<Text color='#737373'>Food Delivery Or Central Restaurant</Text>
</Square>
</SimpleGrid>
</Box>

<Box flex='1' ml='40' >


<SimpleGrid columns={[2, null, 4]} spacing='40px'>
<Box height='80px' mb='30' pos='relative' mt='10'>
    <Image className='imgg'  src='https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16724/photo_1024/3cfe907bf1a711e9924e0a8e1b1ce4da_photo_1024.jpeg' w='150px' h='150px'   />
  

    <Text pos='absolute' top='80%' alignItems='center' color='white' >Kenisha Holiday Homes </Text>
  </Box>
<Box height='80px' mb='30' pos='relative' mt='10' >
    <Image className='imgg' src='https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16720/photo_1024/3a17e0ebf71b11e992500a8e1b1ce4da_photo_1024.jpeg' w='150px' h='150px'    />
    <Text pos='absolute' top='80%' alignItems='center' color='white' >Kenisha Holiday Homes </Text>
  </Box>
  <Box height='80px' mb='30' pos='relative' mt='10' >
    <Image className='imgg' src='https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16722/photo_1024/d9d86936f1a311e9924e0a8e1b1ce4da_photo_1024.jpeg' w='150px' h='150px' />
    <Text pos='absolute' top='80%' alignItems='center' color='white' >Kenisha Holiday Homes </Text>
  </Box>
  <Box  height='80px' mb='30' pos='relative' mt='10'>
    <Image className='imgg' src='https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16723/photo_1024/14650812f1a811e9924e0a8e1b1ce4da_photo_1024.jpeg'  w='150px' h='150px'  />
    <Text pos='absolute' top='80%' alignItems='center' color='white' >Kenisha Holiday Homes </Text>

  </Box>
  <Box  height='80px' mb='30' pos='relative'>
    <Image className='imgg' src='https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16721/photo_1024/a85131caf1a511e9924e0a8e1b1ce4da_photo_1024.jpeg'  w='150px' h='150px' mt='10' mb='10'/>
    <Text pos='absolute' top='80%' alignItems='center' color='white' >Kenisha Holiday Homes </Text>

  </Box>
  <Box  height='80px' mb='30' pos='relative'>
    <Image className='imgg' src='https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16727/photo_1024/92a02d4af1a511e9924e0a8e1b1ce4da_photo_1024.jpeg'  w='150px' h='150px'  mt='10' mb='10'/>
    <Text pos='absolute' top='80%' alignItems='center' color='white' >Kenisha Holiday Homes </Text>

  </Box>
  <Box  height='80px' mb='30' pos='relative'>
    <Image className='imgg' src='https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16728/photo_1024/de6bc87af1a411e9924e0a8e1b1ce4da_photo_1024.jpeg'  w='150px' h='150px'  mt='10' mb='10'/>
    <Text pos='absolute' top='80%' alignItems='center' color='white' >Kenisha Holiday Homes </Text>

  </Box>

</SimpleGrid>
</Box>
</Flex>
  )
}

export default Middlepage



