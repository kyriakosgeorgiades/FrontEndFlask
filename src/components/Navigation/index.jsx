import { Flex, Heading, HStack, Text } from '@chakra-ui/layout';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.scss';

export default function Navigation() {
    const location = useLocation();
    console.log(location.pathname);
    
  return (
        <Flex w="100%" pos="absolute" color="white" px="4em" pt="2em" justifyContent="space-between">
            {
                (!location.pathname.includes('admin')) ?
                (
                    <>
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
                    </>
                ) : (
                    <>
                    <Link to="/admin">
                        <Heading fontSize="3rem">C-Rentals</Heading>  
                    </Link>
                    <HStack spacing={20}>
                        <Link to="/admin/manage-listings">
                            <Text fontSize="1.5rem" _hover={{ transform: 'translateY(-5px)', transition: 'all 300ms linear' }}>Manage Listings</Text>
                        </Link>
                        <Link to="/admin/sell-car">
                            <Text fontSize="1.5rem" _hover={{ transform: 'translateY(-5px)', transition: 'all 300ms linear' }}>Sell Car</Text>
                        </Link>
                        <Link to="/admin/profile">
                            <Text fontSize="1.5rem" _hover={{ transform: 'translateY(-5px)', transition: 'all 300ms linear' }}>Profile</Text>
                        </Link>
                        <Link to="/admin">
                            <Text fontSize="1.5rem" _hover={{ transform: 'translateY(-5px)', transition: 'all 300ms linear' }}>Sign Out</Text>
                        </Link>
                        <Text fontSize="1.8rem" _hover={{ transform: 'translateY(-5px)', transition: 'all 300ms linear' }}>Hi,  Admin</Text>
                    </HStack>
                    </>
                )
            }
            
        </Flex>
    );
}
