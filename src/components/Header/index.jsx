import { Box, Heading, Stack } from '@chakra-ui/layout';
import React from 'react';
import Navigation from '../Navigation';

export default function Header() {
  return (
        <Box className="w__header" h="30vh" pos="relative">
            <Navigation />
            <Box display="flex" justifyContent="center" alignItems="center">
                <Stack className="w__hero-title" alignItems="center" textAlign="center" spacing="5em">
                    <Heading fontSize="4rem" color="white" className="w__hero-title-text">Login</Heading>
                </Stack>
            </Box>
        </Box>
  );
}
