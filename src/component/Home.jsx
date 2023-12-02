import { Box, Button, Container, Flex, HStack, Heading, Image, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Poster from '../Assets/BgPhoto.png'
const Home = () => {
    return (
        <VStack height={'89vh'} py={'10'}>

            // MAIN HOME PAGE BG ---
            <Flex w={'80vw'} height={'40vh'} position={'relative'}>
                <Image src={Poster} objectFit={'cover'} w={'100%'} height={'100%'} userSelect={'none'} />
                <Box w={'100%'} height={'100%'} position={'absolute'} zIndex={'9'} bgColor={'#000'} opacity={'.6'}>
                </Box>
                <Flex flexDirection={'column'} justifyContent={'center'} p={'20'} w={'100%'} height={'100%'} gap={'30'} position={'absolute'} zIndex={'10'}>
                    <Flex flexDirection={'column'} >
                        <Heading color={'white'} fontSize={'2.2rem'} opacity={'1'}>WELCOME.</Heading>
                        <Heading color={'white'} fontSize={'2rem'} opacity={'1'}>Millions of movies, TV shows and people to discover. Explore now.</Heading>
                    </Flex>
                    <HStack w={'100%'} gap={'0'} bgColor={'white'} border={'1px solid white'} borderRadius={'20'} height={'40'} >
                        <Input pl={'20'} fontSize={'1.1rem'} placeholder={'Search for a Movie, Webseries, Tv shows'} outline={'none'} border={'none'} height={'100%'} background={'transparent'} w={'100%'} />
                        <Button cursor={'pointer'} color={'white'} fontWeight={'bold'} fontSize={'1.1rem'} height={'100%'} bgColor={'teal'} variant={'ghost'} border={'none'} px={'30'} borderRadius={'20'}>Search</Button>
                    </HStack>
                </Flex>
            </Flex>
            // MAIN HOME PAGE BG ---


            {/* <Box >
                <Image borderRadius={'10'} w={'1'} src={'https://www.themoviedb.org/t/p/w220_and_h330_face/f2YbkFMN27uqAWqmWZmfj3CE1tF.jpg'} />
                <Text>The Shepherd</Text>
                <Text>21 Aug 2023</Text>
            </Box> */}

        </VStack>
    )
}

export default Home
