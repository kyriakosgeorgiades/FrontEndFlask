// import required librarys
import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Flex, Input, Button, Box, Stack, HStack, Heading, FormControl, FormLabel, FormHelperText, FormErrorMessage, useColorModeValue } from '@chakra-ui/react';

// import stylesheet
import './style.scss';

// import header file
import Header from '../../components/Header';

// imports user context functionality
import UserContext from '../../contexts/user';


export default function Register() {
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

  // login function
  function handleLogin() {
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
          alert(response.message);
        }
      }).catch(error => {
        console.error(error);
        alert("System error!");
      });
  };

  // form submission handler function
  const handleSubmit = event => {
    event.preventDefault();
    // form validation
    if (inputs.password === inputs.confirm_password) {
      // request parameters
      const options = {
        url: process.env.REACT_APP_REGISTER,
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        // request data
        data: {
          first_name: inputs.forename,
          last_name: inputs.surname,
          email: inputs.email,
          password: inputs.password
        }
      };

      // using axios to handle backend request
      axios(options)
        .then(response => {
          // if request succeeds
          if (response.data.status === 200) {
            handleLogin();
          } else {
            alert(response.data.message);
          }
        }).catch(error => {
          console.error(error);
          alert("System error!");
        });
    } else {
      alert('Passwords must match.');
    }
  };

  // displays error to user as validation
  function checkPassword(original, confirm) {
    if (!(original === confirm)) {
      return (
        <>
          <FormErrorMessage fontSize={14}>Passwords must match.</FormErrorMessage>
        </>
      )
    }
  }

  return (
    <>
      <Header />

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
                      <FormLabel className="w__login-label">First Name</FormLabel>
                      <Input type="text" name='forename' placeholder='Forename' onChange={e => handleForm(e)} />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName" isRequired>
                      <FormLabel className="w__login-label">Surname</FormLabel>
                      <Input type="text" name='surname' placeholder='Surname' onChange={e => handleForm(e)} />
                    </FormControl>
                  </Box>
                </HStack>

                <FormControl isRequired>
                  <FormLabel mt={5} className="w__login-label" htmlFor='email'>Email Address</FormLabel>
                  <Input w='300px' size='lg' name='email' placeholder='Email' type='email' onChange={e => handleForm(e)} />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel mt={5} className="w__login-label" htmlFor='password'>Password</FormLabel>
                  <Input w='300px' size='lg' name='password' placeholder='Password' type='password' onChange={e => handleForm(e)} />
                </FormControl>

                <FormControl isRequired isInvalid={!(inputs.password === inputs.confirm_password)}>
                  <FormLabel mt={5} className="w__login-label">Confirm Password</FormLabel>
                  <Input w='300px' size='lg' name='confirm_password' placeholder='Confirm Password' type='password' onChange={e => handleForm(e)} />
                  {checkPassword(inputs.password, inputs.confirm_password)}
                </FormControl>

                <Stack spacing={10}>
                  <Button h='30px' mt={10} size='lg' colorScheme='teal' type='submit'>Register</Button>
                </Stack>

                <FormControl>
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