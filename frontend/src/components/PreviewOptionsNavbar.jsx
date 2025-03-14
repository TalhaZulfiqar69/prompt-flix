import { Box, Container, Flex, Stack, Link, useColorModeValue } from "@chakra-ui/react"
import { Link as LinkRouter } from 'react-router-dom'

import { BrandName } from "../constants"
import { ThemeToggle } from "."

const PreviewOptionsNavbar = () => {
    return (
        <Box 
            as="nav"
            bg='black'
            color={useColorModeValue('gray.600', 'white')}
            py="2"
            w="100%" 
            position="relative"
            zIndex={999}          
        >
            <Container maxW='7xl'>
                <Flex align={'center'}>
                    <Flex flex={{ base: 1 }}>
                        <Link
                            as={LinkRouter}
                            to="/"
                            fontSize="xl"
                            fontWeight="medium"
                            color="white"
                        >
                            {BrandName}
                        </Link>
                    </Flex>

                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}
                    >
                        <ThemeToggle />
                    </Stack>
                </Flex>
            </Container>
        </Box>
    )
}

export default PreviewOptionsNavbar;