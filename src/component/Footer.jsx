import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <Box bgColor={'#232323'} w={'full'} height={'30vh'}>
            <HStack color={'#fff'}>
                <VStack alignItems={'flex-start'}>
                    <Text>FilmFLix Copyright © 2023.</Text>
                    <Text>Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties.</Text>
                </VStack>
            </HStack>
        </Box>
    )
}

export default Footer
