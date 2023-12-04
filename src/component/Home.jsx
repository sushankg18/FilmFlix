import { Box, Button,  Flex, HStack, Heading, Image, Input, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Poster from '../Assets/BgPhoto.png'
import axios from 'axios'
const Home = () => {
    const URL = 'https://api.themoviedb.org/3/'
    const API_KEY = 'd681c01f015037ca82d79554a162039e'
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${URL}discover/movie?api_key=${API_KEY}`)
                setMovies(response.data.results)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])
    return (
        <VStack height={'fit-content'} py={'4'} gap={'4'}>

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

                    <HStack
                        width={'full'}
                        h={'8'}
                    >
                        <Input
                            placeholder={'Search for a Movie, Webseries, Tv shows'}
                            fontSize={'1.1rem'}
                            color={'#333'}
                            outline={'none'}
                            h={'8'}
                            w={'100%'}
                            background={'white'}
                            _placeholder={{ color: '#888' }}
                            variant='unstyled'
                            pl={'8'}
                        />
                        <Button
                            cursor={'pointer'}
                            color={'black'}
                            fontSize={'1rem'}
                            height={'100%'}
                            bgColor={'#fff'}
                            p={'2'}
                        >
                            Search
                        </Button>
                    </HStack>
                </Flex>
            </Flex>
            // MAIN HOME PAGE BG ---

            <HStack w={'80vw'} justifyContent={'space-between'} gap={'8'} flexWrap={'wrap'} >
                {
                    movies.map((i) => (
                            <Box cursor={'pointer'} w={'40'}>
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500${i.poster_path}`}
                                    alt={i.original_title}
                                    width={'full'}
                                    borderRadius={'10'}
                                />
                                <Text noOfLines={'1'} fontWeight={'bold'} fontSize={'1.1rem'}>{i.original_title}</Text>
                                <Text fontWeight={'semibold'}>{i.release_date}</Text>
                            </Box>
                    ))
                }
            </HStack>
        </VStack>
    )
}

export default Home

