import { Box, Heading, Stack } from '@chakra-ui/layout';
import React from 'react';
import Navigation from '../Navigation';

export default function Header({ title }) {
  return (
        <Box className="w__header" h="7.5vh" pos="relative">
            <Navigation />
            <Box display="flex" justifyContent="center" alignItems="center">
                <Stack className="w__hero-title" alignItems="center" textAlign="center" spacing="5em">
                    <Heading fontSize="4rem" color="white" className="w__hero-title-text">{title}</Heading>
                </Stack>
            </Box>
        </Box>
  );
}
