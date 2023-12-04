import {  Image, Text, HStack, Input } from '@chakra-ui/react'
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
            <HStack justifyContent={'space-between'} p={'4'} w={'full'} bgColor={'#232323'}>
                <Link to={'/'}>
                    <Image cursor={'pointer'} src={logo} w={'120px'} />
                </Link>
                <HStack fontSize={'large'} gap={'8'} >
                    <Link to={'/Bollywood'} style={styles}>
                        <Text>
                            Bollywood
                        </Text>
                    </Link>
                    <Link to={'/Hollywood'} style={styles} >Hollywood</Link>
                    <Link to={'/Category'} style={styles}>Category</Link>
                    <Link to={'/topImdb'} style={styles}>Top IMDB</Link>
                    <Link to={'/animeMovies'} style={styles}>Anime</Link>
                </HStack>
                <HStack background={'#444444'} width={'15rem'} p={'2'}>
                    <Input placeholder={'Search...'} fontSize={'1.1rem'} variant={'unstyled'} color={'white'} outline={'none'} border={'none'} h={'100%'} w={'100%'} background={'transparent'} />
                    <IoIosSearch color='white' fontSize={'1.3rem'} cursor={'pointer'} />
                </HStack>
            </HStack>
    )
}

export default Navbar
