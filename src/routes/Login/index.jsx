import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import { Flex, Input, Button, Box, Stack, Text, Heading, FormControl, FormLabel, FormErrorMessage, FormHelperText, useColorModeValue } from '@chakra-ui/react';
import './style.scss';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }


  return (
    <>
      <Box bg={useColorModeValue('gray.700', 'gray.700')} h="7.5vh" pos="relative">
        <Navigation />
      </Box>

      <Flex minH={'92.5vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack>
          <Stack align={'center'}>
            <Heading mb='15px'>Sign In</Heading>
          </Stack>
          <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={10}>
            <Stack spacing={4}>

              <div className="w__login">
                <FormControl isRequired>
                  <FormLabel className="w__login-label" fontSize={20} htmlFor='email'>Email</FormLabel>
                  <Input w='300px' size='lg' id='email' type='email' />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel mt={5} className="w__login-label" fontSize={20} htmlFor='password'>Password</FormLabel>
                  <Input w='300px' size='lg' id='password' type='password' />
                </FormControl>

                <Stack spacing={10}>
                  <Button h='30px' mt={10} size='lg' colorScheme='teal' type='submit'>Sign in</Button>
                </Stack>

                <FormControl>
                  <Link to="/register">
                    <Text mt='5' fontSize={13} _hover={{ textDecoration: 'underline', color: 'blue' }}>Don't have an account? Click here to register.</Text>
                  </Link>
                </FormControl>

              </div>

            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
