import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { extendTheme } from "@chakra-ui/react";
import { breakpoints } from "./utils/chakra";
import { ChakraProvider } from '@chakra-ui/react'

const theme = extendTheme({
  breakpoints,
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App /> 
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
