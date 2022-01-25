import React from 'react';
import { Box, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './style.scss';

export default function Home() {
  return (
    <Box className="w__header" h="100vh">
      <Flex w="100%" pos="absolute" color="white" px="4em" pt="2em" justifyContent="space-between">
        <Heading className="w__title" fontSize="3rem">C-Rentals</Heading>
        <HStack spacing={20}>
          <Link to="/">
            <Text fontSize="1.5rem" _hover={{ transform: 'translateY(-5px)', transition: 'all 300ms linear' }}>Cars</Text>
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
        <Stack className="w__hero-title" alignItems="center" textAlign="center" spacing="5em">
          <Heading fontSize="4rem" color="white">Welcome to C-Rentals, get your dream car now!</Heading>
          <HStack spacing={10}>
            <Link to="/">
              <Box py={5} px={20} border="1px solid white" borderRadius="30">
                <Text color="white" fontWeight="bold">VIEW LISTINGS</Text>
              </Box>
            </Link>
            <Link to="/">
              <Box py={5} px={20} bg="white" border="1px solid white" borderRadius="30">
                <Text color="black" fontWeight="bold">FIND A CAR</Text>
              </Box>
            </Link>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}
