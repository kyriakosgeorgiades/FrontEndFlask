import { Flex, Heading, HStack, Text } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default function Navigation() {
  return (
        <Flex w="100%" pos="absolute" color="white" px="4em" pt="2em" justifyContent="space-between">
            <Link to="/">
                <Heading fontSize="3rem">C-Rentals</Heading>
            </Link>
            <HStack spacing={20}>
                <Link to="/cars">
                    <Text fontSize="1.5rem" _hover={{ transform: 'translateY(-5px)', transition: 'all 300ms linear' }}>Cars</Text>
                </Link>
                <Link to="/check-price">
                    <Text fontSize="1.5rem" _hover={{ transform: 'translateY(-5px)', transition: 'all 300ms linear' }}>Check Price</Text>
                </Link>
                <Link to="/login">
                    <Text fontSize="1.5rem" _hover={{ transform: 'translateY(-5px)', transition: 'all 300ms linear' }}>Login</Text>
                </Link>
                <Link to="/register">
                    <Text fontSize="1.5rem" _hover={{ transform: 'translateY(-5px)', transition: 'all 300ms linear' }}>Register</Text>
                </Link>
            </HStack>
        </Flex>
    );
}
