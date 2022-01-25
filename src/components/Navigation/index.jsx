import { Box, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default function Navigation({ title }) {
  return (
        <Box className="w__header" h="30vh">
            <Flex w="100%" pos="absolute" color="white" px="4em" pt="2em" justifyContent="space-between">
            <Heading fontSize="3rem">C-Rentals</Heading>
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
            <Box display="flex" justifyContent="start" alignItems="center">
                <Stack className="w__hero-title" alignItems="center" textAlign="center" spacing="5em">
                    <Heading fontSize="4rem" color="white">{title}</Heading>
                </Stack>
            </Box>
        </Box>
    );
}
