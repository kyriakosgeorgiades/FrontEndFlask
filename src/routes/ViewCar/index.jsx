import React from "react";
import { Link } from 'react-router-dom';
import { Text, Box, Flex, Image, HStack } from '@chakra-ui/react';
import './style.scss';

import Header from '../../components/Header';

export default function ViewCar() {

  let test_string = '{ "cars": [' +
    '{ "make":"Ford" , "model":"Focus" , "year":"2017" , "km_driven":"25000" , "fuel":"Petrol" , "transmission":"Manual" , "mpg":"32" , "image":"https://cdn.motor1.com/images/mgl/PwoRG/s1/2017-ford-focus-hatchback.webp" , "price":"25000" } ]}';
  const test_json = JSON.parse(test_string);

  return (
    <>
      <Header />

      <Flex align={'center'} justify={'center'}>
        <Box w='20vw' h='92.5vh' bg='gray.200' />
        <Box className="w__car" w='60vw' h='92.5vh' bg='white'>
          <Link to="/">
            <Text className="w__car-link" _hover={{ textDecoration: 'underline', color: 'blue' }}>🠔 Return to homepage.</Text>
          </Link>
          <HStack>
            <Image maxH='500px' padding='25px' src={test_json.cars[0].image} alt={test_json.cars[0].model} />
            <Flex h='300px'>
              <Text className="w__car-title">{test_json.cars[0].make} {test_json.cars[0].model}</Text>
            </Flex>
            
          </HStack>
          <Text className="w__car-text">{test_json.cars[0].year}</Text>
          <Text className="w__car-text">£{test_json.cars[0].price}</Text>
          <Text className="w__car-text">{test_json.cars[0].fuel}-{test_json.cars[0].mpg}mp/g</Text>
          <Text className="w__car-text">{test_json.cars[0].transmission}</Text>
        </Box>
        <Box w='20vw' h='92.5vh' bg='gray.200' />
      </Flex>
    </>
  );
}