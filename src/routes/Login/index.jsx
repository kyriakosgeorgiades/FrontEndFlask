// import required librarys
import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Flex, Input, Button, Box, Stack, Text, Heading, FormControl, FormLabel, useColorModeValue } from '@chakra-ui/react';

// import stylesheet
import './style.scss';

// import header file
import Header from '../../components/Header';

// imports user context functionality
import UserContext from '../../contexts/user';

export default function Login() {
  // defines required variables 
  const { dispatchUserEvent } = useContext(UserContext);
  const [inputs, setInputs] = React.useState({});
  const navigate = useNavigate();

  // adds form inputs to state variable
  function handleForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  // handles login on form submission
  const handleSubmit = event => {
    event.preventDefault();
    // request parameters
    const options = {
      url: process.env.REACT_APP_LOGIN,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      // request data
      data: {
        email: inputs.email,
        password: inputs.password
      }
    };

    // using axios to handle backend request
    axios(options)
      .then(response => {
        // if request succeeds
        if (response.data.status === 200) {
          // log user into context
          dispatchUserEvent('LOGIN', { User: response.data });
          // if admin logs in navigate to admin panel
          if (response.data.is_admin === 1) {
            navigate('/admin');
          } else {
            navigate('/');
          }
        } else {
          alert(response.data.message);
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