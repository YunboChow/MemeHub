import { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react';
import { memeAPI } from './api/memeAPI';
import Meme from './Components/Meme';

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
    const items = await getMeme();
    setMemes(items);
    setLoading(true);
    console.log(memes);
  }

  return (
    <>
      <Box display='flex' alignItems='center' justifyContent='center' w='100vw' h='100vh' overflow='auto' background='radial-gradient(circle, #25273D, #010316)'>
        { loading && (
          <Meme meme={memes}/>
        )}
      </Box>
    </>
  )
}

export default App
