import React from "react";
import { Navigate, Link } from 'react-router-dom';
import { Flex, Input, Button, Box, Stack, Text, Heading, FormControl, FormLabel } from '@chakra-ui/react';
import './style.scss';

import Navigation from '../../components/Navigation';

import UserContext from '../../contexts/user';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined,
      redirect: null
    };
    this.login = this.login.bind(this);
  }

  static contextType = UserContext;

  login() {
    alert(`Email: ${this.state.email} & Password: ${this.state.password}`);
    let user = JSON.parse(`{ "user": [{ "email":"${this.state.email}" , "password":"${this.state.password}" }] }`);
    console.log(user);
    this.context.login(user);
    this.setState({ redirect: '/' });
  };

  render() {

    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }

    console.log(this.context.user);

    return (
      <>
        <Box bg="gray.700" h="7.5vh" pos="relative">
          <Navigation />
        </Box>

        <Flex minH={'92.5vh'} align={'center'} justify={'center'} bg="gray.100">
          <Stack>
            <Stack align={'center'}>
              <Heading mb='15px'>Sign In</Heading>
            </Stack>
            <Box rounded={'lg'} bg="white" boxShadow={'lg'} p={10}>
              <Stack spacing={4}>

                <form className="w__login" onSubmit={this.login}>
                  <FormControl isRequired>
                    <FormLabel className="w__login-label" htmlFor='email'>Email</FormLabel>
                    <Input w='300px' size='lg' id='email' type='email' onChange={event => this.setState({ email: event.currentTarget.value })} />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel mt={5} className="w__login-label" htmlFor='password'>Password</FormLabel>
                    <Input w='300px' size='lg' id='password' type='password' onChange={event => this.setState({ password: event.currentTarget.value })} />
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
}

export default Login;