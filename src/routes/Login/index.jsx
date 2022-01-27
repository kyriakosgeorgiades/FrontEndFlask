import React, { useState } from "react";
import Header from '../../components/Header';
import { Flex, Input, Button, Box, Stack, FormControl, FormLabel, FormErrorMessage, FormHelperText, useColorModeValue } from '@chakra-ui/react';
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
      <Header title="Login" />

      <Flex minH={'50vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
          <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={10}>
            <Stack spacing={4}>

              <div className="w__login">
                <FormControl isRequired>
                  <FormLabel className="w__login-label" fontSize={24} htmlFor='email'>Email</FormLabel>
                  <Input w='300px' size='lg' id='email' type='email' />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel mt={5} className="w__login-label" fontSize={24} htmlFor='password'>Password</FormLabel>
                  <Input w='300px' size='lg' id='password' type='password' />
                </FormControl>

                <Stack spacing={10}>
                  <Button h='30px' mt={10} size='lg' colorScheme='teal' type='submit'>Sign in</Button>
                </Stack>
              </div>

            </Stack>
          </Box>
      </Flex>
      <Flex minH={'20vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}/>
    </>
  );
}
