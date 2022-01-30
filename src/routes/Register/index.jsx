import React from "react";
import { Navigate } from 'react-router-dom';
import { Flex, Input, Button, Box, Stack, HStack, Heading, FormControl, FormLabel, FormHelperText, FormErrorMessage } from '@chakra-ui/react';
import './style.scss';

import Navigation from '../../components/Navigation';

import UserContext from '../../contexts/user';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forename: undefined,
      surname: undefined,
      email: undefined,
      password: null,
      confirm_password: null,
      redirect: null
    };
    this.register = this.register.bind(this);
  }

  static contextType = UserContext;

  register() {
    if (this.state.password === this.state.confirm_password) {
      alert(`Forename: ${this.state.forename} & Surname: ${this.state.surname} & Email: ${this.state.email} & Password: ${this.state.password} & Confirm: ${this.state.confirm_password}`);
      //let user = JSON.parse(`{ "user": [{ "forename":"${this.state.forename}" , "surname":"${this.state.surname}" , "email":"${this.state.email}" , "password":"${this.state.password}" }] }`)
      let user = JSON.parse(`{ "user": [{ "email":"${this.state.email}" , "password":"${this.state.password}" }] }`);
      console.log(user);
      this.context.login(user);
      this.setState({ redirect: '/' });
    } else {
      alert('Passwords must match.');
    }
  };

  render() {

    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }

    console.log(this.context.user);

    function displayError(password, confirm) {
      if (!(password === '')) {
        if (!(password === confirm)) {
          return (
            <>
              <FormErrorMessage fontSize={14}>Passwords must match.</FormErrorMessage>
            </>
          )
        } else {
          return <br />
        }
      } else {
        return <br />
      }
    }

    return (
      <>
        <Box bg="gray.700" h="7.5vh" pos="relative">
          <Navigation />
        </Box>

        <Flex minH={'92.5vh'} align={'center'} justify={'center'} bg="gray.100">
          <Stack>
            <Stack align={'center'}>
              <Heading mb='15px'>Register a new account</Heading>
            </Stack>
            <Box rounded={'lg'} bg="white" boxShadow={'lg'} p={10}>
              <Stack spacing={4}>

                <form className="w__login" onSubmit={this.register}>

                  <HStack>
                    <Box>
                      <FormControl id="firstName" isRequired>
                        <FormLabel className="w__login-label">First Name</FormLabel>
                        <Input type="text" onChange={event => this.setState({ forename: event.currentTarget.value })} />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="lastName">
                        <FormLabel className="w__login-label">Surname</FormLabel>
                        <Input type="text" onChange={event => this.setState({ surname: event.currentTarget.value })} />
                      </FormControl>
                    </Box>
                  </HStack>

                  <FormControl isRequired>
                    <FormLabel mt={5} className="w__login-label" htmlFor='email'>Email Address</FormLabel>
                    <Input w='300px' size='lg' id='email' type='email' onChange={event => this.setState({ email: event.currentTarget.value })} />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel mt={5} className="w__login-label" htmlFor='password'>Password</FormLabel>
                    <Input w='300px' size='lg' id='password' type='password' onChange={event => this.setState({ password: event.currentTarget.value })} />
                  </FormControl>

                  <FormControl isRequired isInvalid={!(this.state.password === this.state.confirm_password)}>
                    <FormLabel mt={5} className="w__login-label">Confirm Password</FormLabel>
                    <Input w='300px' size='lg' id='confirm_password' type='password' onChange={event => this.setState({ confirm_password: event.currentTarget.value })} />
                    {displayError(this.state.password, this.state.confirm_password)}
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
}

export default Register;