
import { Box, Center, Flex, Image, SimpleGrid, Square, Text } from '@chakra-ui/react'



import React from 'react'

const Middle = () => {
  return (
<Flex>
  {/* <Center w='100px' bg='green.500'>
  <Text>Box 1</Text>
</Center> */}
<Box boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'  mt='10' ml='10' p='10' borderRadius='10' textAlign='center'>
<h3 >Fully Managed</h3>
<h3> Communities By Tripvillas</h3>
<SimpleGrid columns={2} spacing={10} mt='15'>
<Square bg='blue.500' size='150px' display='f'>
<Image src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/housekeeper.svg" w='50' h='50'/>
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
<Box height='80px' mb='30' pos='relative' >
    <Image src='https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16724/photo_1024/3cfe907bf1a711e9924e0a8e1b1ce4da_photo_1024.jpeg' w='150px'  />
    <Text pos='absolute' top='40%' alignItems='center' color='white' >Kenisha Holiday Homes </Text>
  </Box>
<Box height='80px' mb='30' pos='relative' >
    <Image src='https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16724/photo_1024/3cfe907bf1a711e9924e0a8e1b1ce4da_photo_1024.jpeg' w='150px' />
    <Text pos='absolute' top='40%' alignItems='center' color='white' >Kenisha Holiday Homes </Text>
  </Box>
  <Box height='80px' mb='30' pos='relative' >
    <Image src='https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16724/photo_1024/3cfe907bf1a711e9924e0a8e1b1ce4da_photo_1024.jpeg' w='150px' />
    <Text pos='absolute' top='40%' alignItems='center' color='white' >Kenisha Holiday Homes </Text>
  </Box>
  <Box  height='80px' mb='30' pos='relative'>
    <Image src='https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16724/photo_1024/3cfe907bf1a711e9924e0a8e1b1ce4da_photo_1024.jpeg'  w='150px'/>
    <Text pos='absolute' top='40%' alignItems='center' color='white' >Kenisha Holiday Homes </Text>

  </Box>
  <Box  height='80px' mb='30' pos='relative'>
    <Image src='https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16724/photo_1024/3cfe907bf1a711e9924e0a8e1b1ce4da_photo_1024.jpeg'  w='150px'/>
    <Text pos='absolute' top='40%' alignItems='center' color='white' >Kenisha Holiday Homes </Text>

  </Box>
  <Box  height='80px' mb='30' pos='relative'>
    <Image src='https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16724/photo_1024/3cfe907bf1a711e9924e0a8e1b1ce4da_photo_1024.jpeg'  w='150px'/>
    <Text pos='absolute' top='40%' alignItems='center' color='white' >Kenisha Holiday Homes </Text>

  </Box>
  <Box  height='80px' mb='30' pos='relative'>
    <Image src='https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16724/photo_1024/3cfe907bf1a711e9924e0a8e1b1ce4da_photo_1024.jpeg'  w='150px'/>
    <Text pos='absolute' top='40%' alignItems='center' color='white' >Kenisha Holiday Homes </Text>

  </Box>

</SimpleGrid>
</Box>
</Flex>
  )
}

export default Middle



































// const Middle = () => {
//   return (
//     <div>
//         <div>
//             <h2>Fully Managed Communities By Tripvillas</h2>
//             <div>
//                 <div>
//                 <img src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/housekeeper.svg" alt="" />
//                 <h4>High Quality housekeeping</h4>
//                 </div>
//                 <div>
//                 <img src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/towel.svg" alt="" />
//                 <h4>Comfortable Linen and Toiletries</h4>
//                 </div>
             
//             </div>
//             <div>
//                 <div>
//                 <img src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/bed.svg" alt="" />
//                 <h4>Quality Furniture & Fittings</h4>
//                 </div>
//                 <div>
//                 <img src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/dinner.svg" alt="" />
//                 <h4>Food Delivery Or Central Restaurant</h4>
//                 </div>
             
//             </div>
//         </div>
//         <div>
//             <div>
//                 <img src="https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16724/photo_1024/3cfe907bf1a711e9924e0a8e1b1ce4da_photo_1024.jpeg" alt="" />
//                 <h4></h4>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Middle


// import React from 'react'

// const Middle = () => {
//   return (
//     <div>Middle</div>
//   )
// }

// export default Middle

















// const Middle = () => {
//   return (
//     <Box>
//     <h2>Fully Managed </h2>
//     <h2>Communities By Tripvillas</h2>
//     <Flex mt='20' ml='20'>

// <Square bg='blue.500' size='200px'>
// <SimpleGrid columns={2} spacingX='40px' spacingY='8px' w='40' border='1px solid red'>
//   {/* <Box bg='tomato' height='80px'></Box> */}
//   {/* <Image src='https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/housekeeper.svg'/>
//   <Image src='https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/housekeeper.svg'/> */}

//   <Box bg='white' height='100px' w='200px' border='1px solid blue'>
//   <Image src='https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/housekeeper.svg' w='80' h='50'/>
//     <h5>High Quality housekeeping</h5>
//   </Box>
//   <Box bg='white' height='100px' w='200px'>
//   <Image src='https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/towel.svg'  w='80' h='50'/>

//     <h5>Comfortable Linen and Toiletries</h5>
//   </Box>
//   <Box bg='white' height='100px' w='200px'>
//   <Image src='https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/bed.svg'  w='80' h='50'/>

//     <h5>Quality Furniture & Fittings</h5>
//   </Box>
//   <Box bg='white' height='100px' w='200px'>
//   <Image src='https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/dinner.svg'  w='80' h='50'/>

//     <h5>Food Delivery Or Central Restaurant</h5>
//   </Box>
//   {/* <Box bg='tomato' height='80px'></Box>
//   <Box bg='tomato' height='80px'></Box>
//   <Box bg='tomato' height='80px'></Box> */}
// </SimpleGrid>
//  </Square>


//         {/* <div>
//             <h2>Fully Managed Communities By Tripvillas</h2>
//             <div>
//             <div>
//                 <img src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/housekeeper.svg" alt="" />
//                 <h4>High Quality housekeeping</h4>
//             </div>
//             <div>
//                 <img src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/towel.svg" alt="" />
//                 <h4>Comfortable Linen and Toiletries</h4>
//             </div>
//             </div>
        
//             <div>
//             <div>
//                 <img src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/bed.svg" alt="" />
//                 <h4>High Quality housekeeping</h4>
//             </div>
//             <div>
//                 <img src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/dinner.svg" alt="" />
//                 <h4>Comfortable Linen and Toiletries</h4>
//             </div>
//             </div>
        

//         </div> */}
//     </Flex>


//     <Box  bg='pink'ml='150'>
//     <Text>Box 3</Text>
//   </Box>
//     </Box>
//   )
// }

// export default Middle