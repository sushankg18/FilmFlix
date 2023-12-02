import { Container, Image, Text, HStack, Input } from '@chakra-ui/react'
import React from 'react'
import logo from '../Assets/MainLogo.png'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";


const Navbar = () => {
    const styles = {
        textDecoration: "none",
        cursor: "pointer",
        color: "white",
    };

    return (
        <Container bgColor={'#232323'} px={'20'} py={'20'}>
            <HStack justifyContent={'space-between'}>
                <Link to={'/'}>
                    <Image cursor={'pointer'} src={logo} w={'120px'} />
                </Link>
                <HStack fontSize={'large'} fontFamily={'Outfit'} >
                    <Link to={'/Bollywood'} style={{ ...styles, paddingLeft: '20px' }}>
                        <Text>
                            Bollywood
                        </Text>
                    </Link>
                    <Link to={'/Hollywood'} style={{ ...styles, paddingLeft: '20px' }} >Hollywood</Link>
                    <Link to={'/Category'} style={{ ...styles, paddingLeft: '20px' }}>Category</Link>
                    <Link to={'/topImdb'} style={{ ...styles, paddingLeft: '20px' }}>Top IMDB</Link>
                    <Link to={'/animeMovies'} style={{ ...styles, paddingLeft: '20px' }}>Anime</Link>
                </HStack>
                <HStack background={'#444444'} width={'15rem'} p={'8'}>
                    <Input placeholder='Search...' border={'none'} w={'100%'} background={'transparent'} />
                    <IoIosSearch color='white' fontSize={'1.3rem'}/>
                </HStack>
            </HStack>
        </Container>
    )
}

export default Navbar
