import { Box } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header';

export default function FindCar() {
  return (
    <>
      <Header title="Login"/>
      <Box>
        <input type="text" className="text" />
        <button>Submit</button>
      </Box>
    </>
  );
}
