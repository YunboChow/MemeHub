import { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react';
import { memeAPI } from './api/memeAPI';

function App() {
  const { getMeme } = memeAPI();

  useEffect(() => {
    getMeme();
  });
  
  return (
    <>
      <Box w='100vw' h='100vh' overflow='auto' background='radial-gradient(circle, #25273D, #010316)'>

      </Box>
    </>
  )
}

export default App
