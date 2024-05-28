import { Box, Flex, Text } from '@chakra-ui/react';

function Navbar() {
    return (
        <>
            <Box bgColor={'#BEAFFC'} w={'100%'} minH={'40px'} h="5%" p={'10px'} bgGradient={'linear(to-r,#a5fecb, #20bdff, #5433ff)'}>
                <Flex flexDir={'row'} justifyContent={'end'} alignItems={'center'} h="100%">
                    <Text alignContent={'center'} h={'100%'} fontSize={'30px'} ml={'10px'} width={'100%'}>MemeHub</Text>
                </Flex>
            </Box>
        </>
    );

}

export default Navbar;