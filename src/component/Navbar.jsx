import { Container, Image, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import logo from '../Assets/MainLogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const styles = {
        textDecoration: "none",
        cursor : "pointer",
        color : "black",
    };

    return (
        <Container bgColor={'#e5e5e5'} px={'12'}>
            <HStack justifyContent={'space-between'}>
                <Link to={'/'}>
                    <Image cursor={'pointer'} src={logo} w={'120px'} />
                </Link>
                <HStack fontSize={'large'} fontFamily={'Outfit'} >
                    <Link to={'/Bollywood'}style={{...styles , paddingLeft : '20px'}}>
                        <Text>
                            Bollywood
                        </Text>
                    </Link>
                    <Link to={'/Hollywood'} style={{...styles , paddingLeft : '20px'}} >Hollywood</Link>
                    <Link to={'/Category'} style={{...styles , paddingLeft : '20px'}}>Category</Link>
                    <Link to={'/topImdb'} style={{...styles , paddingLeft : '20px'}}>Top IMDB</Link>
                    <Link to={'/animeMovies'} style={{...styles , paddingLeft : '20px'}}>Anime</Link>
                </HStack>
            </HStack>
        </Container>
    )
}

export default Navbar
