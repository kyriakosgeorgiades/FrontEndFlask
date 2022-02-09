import { Box, HStack, SimpleGrid, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import Header from '../../../components/Header';

export default function AdminDashboard() {
  return (
    <>
        <Header title="Overview" />
        <Box py="5em" m="0 auto" maxWidth="80%" h="100vh">
            <SimpleGrid columns={3} spacing={10} py="5em" px="5em">
                <Box boxShadow="0 10px 20px rgb(0 0 0 / 41%)" bg="#35495F" borderRadius="10" p="4em 2em" _hover={{ transform: 'scale(1.05)', transition: 'all 300ms ease-in-out' }}>
                    <HStack>
                        <Text fontSize="2rem" fontWeight="bold" color="#FFFFFF">Lisitings</Text>
                        <Spacer />
                        <Text fontSize="1.8rem" color="#FFFFFF">45</Text>
                    </HStack>
                </Box>
                <Box boxShadow="0 10px 20px rgb(0 0 0 / 41%)" bg="#16A184" borderRadius="10" p="4em 2em" _hover={{ transform: 'scale(1.05)', transition: 'all 300ms ease-in-out' }}>
                    <HStack>
                        <Text fontSize="2rem" fontWeight="bold" color="#FFFFFF">Profit</Text>
                        <Spacer />
                        <Text fontSize="1.8rem" color="#FFFFFF">£4,500</Text>
                    </HStack>
                </Box>
                <Box boxShadow="0 10px 20px rgb(0 0 0 / 41%)" bg="#2980B9" borderRadius="10" p="4em 2em" _hover={{ transform: 'scale(1.05)', transition: 'all 300ms ease-in-out' }}>
                    <HStack>
                        <Text fontSize="2rem" fontWeight="bold" color="#FFFFFF">Revenue</Text>
                        <Spacer />
                        <Text fontSize="1.8rem" color="#FFFFFF">£3,500</Text>
                    </HStack>
                </Box>
                <Box boxShadow="0 10px 20px rgb(0 0 0 / 41%)" bg="#8F43AD" borderRadius="10" p="4em 2em" _hover={{ transform: 'scale(1.05)', transition: 'all 300ms ease-in-out' }}>
                    <HStack>
                        <Text fontSize="2rem" fontWeight="bold" color="#FFFFFF">Transactions</Text>
                        <Spacer />
                        <Text fontSize="1.8rem" color="#FFFFFF">1,500</Text>
                    </HStack>
                </Box>
                <Box boxShadow="0 10px 20px rgb(0 0 0 / 41%)" bg="#F49C12" borderRadius="10" p="4em 2em" _hover={{ transform: 'scale(1.05)', transition: 'all 300ms ease-in-out' }}>
                    <HStack>
                        <Text fontSize="2rem" fontWeight="bold" color="#FFFFFF">Users</Text>
                        <Spacer />
                        <Text fontSize="1.8rem" color="#FFFFFF">3</Text>
                    </HStack>
                </Box>
                <Box boxShadow="0 10px 20px rgb(0 0 0 / 41%)" bg="#E84C3D" borderRadius="10" p="4em 2em" _hover={{ transform: 'scale(1.05)', transition: 'all 300ms ease-in-out' }}>
                    <HStack>
                        <Text fontSize="2rem" fontWeight="bold" color="#FFFFFF">Queries</Text>
                        <Spacer />
                        <Text fontSize="1.8rem" color="#FFFFFF">100</Text>
                    </HStack>
                </Box>
            </SimpleGrid>
        </Box>
    </>
  );
}
