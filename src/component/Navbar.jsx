import { Container, Image, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import logo from '../Assets/MainLogo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <Container bgColor={'#e5e5e5'} px={'12'}>
            <HStack justifyContent={'space-between'}>
                <Link to={'/'}>
                    <Image cursor={'pointer'} src={logo} w={'120px'} />
                </Link>
                <HStack fontSize={'large'} fontFamily={'Outfit'} >
                    <Link to={'/Bollywood'} px={'14'} cursor={'pointer'}>
                        <Text>
                            Bollywood
                        </Text>
                    </Link>
                    <Link to={'/Hollywood'} px={'14'} cursor={'pointer'} >Hollywood</Link>
                    <Link to={'/Category'} px={'14'} cursor={'pointer'}  >Category</Link>
                    <Link to={'/topImdb'} px={'14'} cursor={'pointer'} >Top IMDB</Link>
                    <Link to={'/animeMovies'} px={'14'} cursor={'pointer'} >Anime</Link>
                </HStack>
            </HStack>
        </Container>
    )
}

export default Navbar
