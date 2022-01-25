import React from 'react';
import { Box, Flex, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CarBg from '../../assets/images/cars_bg.jpg';
import './style.scss';

export default function Home() {
  return (
    <Box className="w__header" h="100vh">
      <Flex w="100%" pos="absolute" color="white" px="4em" pt="2em" justifyContent="space-between">
        <Heading className="w__title" fontSize="3rem">C-Rentals</Heading>
        <HStack spacing={20}>
          <Link to="/">
            <Text fontSize="1.5rem" _hover={{ transform: 'translateY(-5px)', transition: 'all 300ms linear' }}>Shop</Text>
          </Link>
          <Link to="/">
            <Text fontSize="1.5rem" _hover={{ transform: 'translateY(-5px)', transition: 'all 300ms linear' }}>Login</Text>
          </Link>
          <Link to="/">
            <Text fontSize="1.5rem" _hover={{ transform: 'translateY(-5px)', transition: 'all 300ms linear' }}>Register</Text>
          </Link>
        </HStack>
      </Flex>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Stack>
          <Heading color="white" className="w__hero-title">Welcome to C-Rentals, get your dream car now!</Heading>
        </Stack>
      </Box>
    </Box>
  );
}
