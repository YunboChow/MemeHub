import { useState, useEffect } from 'react'
import { Box, Button, Flex, Stack, Spinner } from '@chakra-ui/react';
import { memeAPI } from './api/memeAPI';
import Meme from './Components/Meme';
import Navbar from './Components/Navbar';

function App() {
  const { getMeme } = memeAPI();
  const [memes, setMemes] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!memes) {
      retrieveMeme();
    }
  }, [memes]);

  const retrieveMeme = async () => {
    setLoading(false);
    const items = await getMeme();
    setMemes(items);
    setLoading(true);
    console.log(memes);
  }

  return (
    <>
      <Navbar/>
      <Box w='100vw' h='100vh' overflow='auto' background='radial-gradient(circle, #25273D, #010316)'>
        <Flex justifyContent='center' alignItems='center' h='100%'>
          { loading ? (
            <Stack spacing={4} align='center'>
              <Meme meme={memes}/>
              <Button colorScheme='teal' onClick={() => retrieveMeme()}>Get new meme</Button>
            </Stack>         
          ) : (
            <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            />
          )}
        </Flex>
      </Box>
    </>
  )
}

export default App
