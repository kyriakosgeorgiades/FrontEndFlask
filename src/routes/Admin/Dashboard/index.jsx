import { Box, HStack, SimpleGrid, Spacer, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Header from '../../../components/Header';
import Lottie from 'react-lottie';
import userProfileMan from '../../../lotties/user-profile-man.json';
import profitRevenue from '../../../lotties/profit-revenue.json';
import revenue from '../../../lotties/revenue.json';
import moneyTransaction from '../../../lotties/money-transaction.json';
import attention from '../../../lotties/attention.json';
import listings from '../../../lotties/listings.json';

export default function AdminDashboard() {
    const userDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: userProfileMan,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    const profitRevenueDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: profitRevenue,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    const revenueDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: revenue,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    const moneyTransactionDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: moneyTransaction,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    const attentionDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: attention,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    const listingsDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: listings,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

  return (
    <>
        <Header title="Overview" />
        <Box py="2em" m="0 auto" maxWidth="80%" h="100vh">
            <SimpleGrid columns={3} spacing={10} py="5em" px="5em">
                <Box boxShadow="0 10px 20px rgb(0 0 0 / 41%)" bg="#35495F" borderRadius="10" p="4em 2em" _hover={{ transform: 'scale(1.05)', transition: 'all 300ms ease-in-out' }}>
                    <Stack>
                        <Lottie 
                            options={listingsDefaultOptions}
                            height={100}
                            width={100}
                        />
                        <HStack>
                            <Text fontSize="2rem" fontWeight="bold" color="#FFFFFF">Lisitings</Text>
                            <Spacer />
                            <Text fontSize="1.8rem" color="#FFFFFF">45</Text>
                        </HStack>
                    </Stack>
                </Box>
                <Box boxShadow="0 10px 20px rgb(0 0 0 / 41%)" bg="#16A184" borderRadius="10" p="4em 2em" _hover={{ transform: 'scale(1.05)', transition: 'all 300ms ease-in-out' }}>
                    <Stack>
                        <Lottie 
                            options={profitRevenueDefaultOptions}
                            height={100}
                            width={100}
                        />
                        <HStack>
                            <Text fontSize="2rem" fontWeight="bold" color="#FFFFFF">Profit</Text>
                            <Spacer />
                            <Text fontSize="1.8rem" color="#FFFFFF">£4,500</Text>
                        </HStack>
                    </Stack>
                </Box>
                <Box boxShadow="0 10px 20px rgb(0 0 0 / 41%)" bg="#2980B9" borderRadius="10" p="4em 2em" _hover={{ transform: 'scale(1.05)', transition: 'all 300ms ease-in-out' }}>
                    <Stack>
                        <Lottie 
                            options={revenueDefaultOptions}
                            height={100}
                            width={100}
                        />
                        <HStack>
                            <Text fontSize="2rem" fontWeight="bold" color="#FFFFFF">Revenue</Text>
                            <Spacer />
                            <Text fontSize="1.8rem" color="#FFFFFF">£3,500</Text>
                        </HStack>
                    </Stack>
                </Box>
                <Box boxShadow="0 10px 20px rgb(0 0 0 / 41%)" bg="#8F43AD" borderRadius="10" p="4em 2em" _hover={{ transform: 'scale(1.05)', transition: 'all 300ms ease-in-out' }}>
                    <Stack>
                        <Lottie 
                            options={moneyTransactionDefaultOptions}
                            height={100}
                            width={100}
                        />
                        <HStack>
                            <Text fontSize="2rem" fontWeight="bold" color="#FFFFFF">Transactions</Text>
                            <Spacer />
                            <Text fontSize="1.8rem" color="#FFFFFF">1,500</Text>
                        </HStack>
                    </Stack>
                </Box>
                <Box boxShadow="0 10px 20px rgb(0 0 0 / 41%)" bg="#F49C12" borderRadius="10" p="4em 2em" _hover={{ transform: 'scale(1.05)', transition: 'all 300ms ease-in-out' }}>
                    <Stack>
                        <Lottie 
                            options={userDefaultOptions}
                            height={100}
                            width={100}
                        />
                        <HStack>
                            <Text fontSize="2rem" fontWeight="bold" color="#FFFFFF">Users</Text>
                            <Spacer />
                            <Text fontSize="1.8rem" color="#FFFFFF">3</Text>
                        </HStack>
                    </Stack>
                </Box>
                <Box boxShadow="0 10px 20px rgb(0 0 0 / 41%)" bg="#E84C3D" borderRadius="10" p="4em 2em" _hover={{ transform: 'scale(1.05)', transition: 'all 300ms ease-in-out' }}>
                    <Stack>
                        <Lottie 
                            options={attentionDefaultOptions}
                            height={100}
                            width={100}
                        />
                        <HStack>
                            <Text fontSize="2rem" fontWeight="bold" color="#FFFFFF">Queries</Text>
                            <Spacer />
                            <Text fontSize="1.8rem" color="#FFFFFF">100</Text>
                        </HStack>
                    </Stack>
                </Box>
            </SimpleGrid>
        </Box>
    </>
  );
}
