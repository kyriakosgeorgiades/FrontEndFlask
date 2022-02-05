import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Flex, Input, Button, Box, Stack, Text, Heading, FormControl, FormLabel, useColorModeValue } from '@chakra-ui/react';
import './style.scss';

import Header from '../../components/Header';

import UserContext from '../../contexts/user';

export default function Login() {
  const { dispatchUserEvent } = useContext(UserContext);
  const [inputs, setInputs] = React.useState({});
  const navigate = useNavigate();

  function handleForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = event => {
    event.preventDefault();

    /*
    alert(`Email: ${inputs.email} & Password: ${inputs.password}`);
    let user = JSON.parse(`{ "email":"${inputs.email}" , "password":"${inputs.password}" }`);
    dispatchUserEvent('LOGIN', { User: user });
    navigate('/');
    */

    const options = {
      url: process.env.REACT_APP_LOGIN,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: {
        email: inputs.email,
        password: inputs.password
      }
    };

    axios(options)
      .then(response => {
        if (response.status === 200) {
          console.log(response)
          dispatchUserEvent('LOGIN', { User: response.user_id });
          navigate('/');
        } else {
          alert(response.message);
        }
      }).catch(error => {
        console.error(error);
        alert("System error!");
      });
  };

  return (
    <>
      <Header />

      <Flex minH={'92.5vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack>
          <Stack align={'center'}>
            <Heading mb='15px'>Sign In</Heading>
          </Stack>
          <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={10}>
            <Stack spacing={4}>

              <form className="w__login" onSubmit={handleSubmit}>
                <FormControl isRequired>
                  <FormLabel className="w__login-label" htmlFor='email'>Email</FormLabel>
                  <Input w='300px' size='lg' name='email' placeholder='Email' type='email' onChange={e => handleForm(e)} />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel mt={5} className="w__login-label" htmlFor='password'>Password</FormLabel>
                  <Input w='300px' size='lg' name='password' placeholder='Password' type='password' onChange={e => handleForm(e)} />
                </FormControl>

                <Stack spacing={10}>
                  <Button h='30px' mt={10} size='lg' colorScheme='teal' type='submit'>Sign in</Button>
                </Stack>

                <FormControl>
                  <Link to="/register">
                    <Text mt='5' fontSize={13} _hover={{ textDecoration: 'underline', color: 'blue' }}>Don't have an account? Click here to register.</Text>
                  </Link>
                </FormControl>
              </form>

            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}