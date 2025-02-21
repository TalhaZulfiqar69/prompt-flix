import {
    Box,
    Flex,
    Text,
    Button,
    Stack,
    Container,
    // useColorModeValue
} from '@chakra-ui/react'

import { BrandName } from '../constants'
import ThemeToggle from '../components/ThemeToggle'

export default function Navbar () {
    return (
        <Box 
            as="nav"
            bg={('white', 'gray.800')}
            color={('gray.600', 'white')}
            minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={('gray.200', 'gray.900')}
            
        >
            <Container maxW='7xl'>
                <Flex align={'center'}>
                    <Flex flex={{ base: 1 }}>
                        <Text
                            fontFamily={'heading'}
                            fontSize="xl"
                            fontWeight="medium"
                            color={('gray.800', 'white')}>
                            {BrandName}
                        </Text>
                    </Flex>

                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}
                    >
                        <ThemeToggle />
                        <Button
                            variant="outline"
                            fontSize={'lg'}
                            fontWeight={400}
                            px="8"
                            py="6"
                        >
                            Live Preview
                        </Button>
                    </Stack>
                </Flex>
            </Container>
        </Box>
    )
}
