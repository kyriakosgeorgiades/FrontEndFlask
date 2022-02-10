import { Avatar, Box, Center, HStack, Input, Select, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Header from '../../../components/Header';

export default function Profile() {

  return (
      <>
        <Header title="Profile" />
        <Box boxShadow="0 10px 20px rgb(0 0 0 / 41%)" py="5em" m="0 auto" borderRadius="10" p="4em 2em" my="3em"  maxWidth="50%">
            <Stack spacing="10">
                <Center>
                    <Avatar size='2xl' name='John Doe' src='https://bit.ly/code-beast' />
                </Center>
                <HStack spacing="10">
                    <Input placeholder='firstName' name="firstName" value="John" size='lg' />
                    <Input placeholder='lastName' name="lastName" value="Doe" size='lg' />
                </HStack>
                <HStack spacing="10">
                    <Input placeholder='gender' name="gender" value="Male" size='lg' />
                    <Input placeholder='Level' name="lastName" value="Admin" size='lg' />
                </HStack>
                <Box py={3} px={20} border="1px solid black" textAlign="center" m="0 auto" mb="5em">
                    <Text color="black" fontWeight="bold">Save</Text>
                </Box>
            </Stack>
        </Box>
      </>
    );
}
