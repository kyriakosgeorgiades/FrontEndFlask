import React, { useState } from "react";
import Navigation from '../../components/Navigation';
import { Flex, Input, Button, Box, Stack, HStack, Heading, FormControl, FormLabel, FormHelperText, useColorModeValue, FormErrorMessage } from '@chakra-ui/react';
import './style.scss';

export default function Register() {
  const [forename, setForename] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (password === confirm_password) {
      alert(`Forename: ${forename} & Surname: ${surname} & Email: ${email} & Password: ${password} & Confirm: ${confirm_password}`);
    } else {
      alert('Passwords must match.');
    }
  };

  function displayError() {
    if (!(password === confirm_password)) {
      return (
        <FormErrorMessage fontSize={14}>Passwords must match.</FormErrorMessage>
      )
    } else {
      return <br/>
    }
  }

  return (
    <>
      <Box bg={useColorModeValue('gray.700', 'gray.700')} h="7.5vh" pos="relative">
        <Navigation />
      </Box>

      <Flex minH={'92.5vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack>
          <Stack align={'center'}>
            <Heading mb='15px'>Register a new account</Heading>
          </Stack>
          <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={10}>
            <Stack spacing={4}>

              <form className="w__login" onSubmit={handleSubmit}>

                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel className="w__login-label" fontSize={20}>First Name</FormLabel>
                      <Input type="text" onChange={event => setForename(event.currentTarget.value)} />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel className="w__login-label" fontSize={20}>Surname</FormLabel>
                      <Input type="text" onChange={event => setSurname(event.currentTarget.value)} />
                    </FormControl>
                  </Box>
                </HStack>

                <FormControl isRequired>
                  <FormLabel mt={5} className="w__login-label" fontSize={20} htmlFor='email'>Email Address</FormLabel>
                  <Input w='300px' size='lg' id='email' type='email' onChange={event => setEmail(event.currentTarget.value)} />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel mt={5} className="w__login-label" fontSize={20} htmlFor='password'>Password</FormLabel>
                  <Input w='300px' size='lg' id='password' type='password' onChange={event => setPassword(event.currentTarget.value)} />
                </FormControl>

                <FormControl isRequired isInvalid={!(password === confirm_password)}>
                  <FormLabel mt={5} className="w__login-label" fontSize={20} htmlFor='confirm_password'>Confirm Password</FormLabel>
                  <Input w='300px' size='lg' id='confirm_password' type='password' onChange={event => setConfirmPassword(event.currentTarget.value)} />
                  {displayError()}
                </FormControl>

                <Stack spacing={10}>
                  <Button h='30px' mt={10} size='lg' colorScheme='teal' type='submit'>Register</Button>
                </Stack>

                <FormControl isRequired>
                  <FormHelperText>By registering you accept our user terms of service agreement.</FormHelperText>
                </FormControl>
              </form>

            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
