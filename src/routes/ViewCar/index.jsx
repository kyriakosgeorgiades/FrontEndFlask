import React, { useState } from "react";
import Navigation from '../../components/Navigation';
import { Text, Box, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import './style.scss';

export default function ViewCar() {

  let test_string = '{ "cars": [' +
  '{ "make":"Ford" , "model":"Focus" , "year":"2017" , "km_driven":"25000" , "fuel":"Petrol" , "transmission":"Manual" , "mpg":"32" , "image":"https://cdn.motor1.com/images/mgl/PwoRG/s1/2017-ford-focus-hatchback.webp" , "price":"25000" } ]}';
  const test_json = JSON.parse(test_string);

  return (
    <>
      <Box bg={useColorModeValue('gray.700', 'gray.700')} h="7.5vh" pos="relative">
        <Navigation />
      </Box>

      <Flex align={'center'} justify={'center'}>
        <Box w='20vw' h='92.5vh' bg={useColorModeValue('gray.400', 'gray.800')} />
        <Box className="w__car" w='60vw' h='92.5vh' bg={useColorModeValue('gray.50', 'gray.800')}>
          <Image maxH='500px' padding='25px' src={test_json.cars[0].image} alt={test_json.cars[0].model} />
          <Text className="w__car-text">{test_json.cars[0].make} {test_json.cars[0].model}</Text>
          <Text className="w__car-text">{test_json.cars[0].year}</Text>
          <Text className="w__car-text">£{test_json.cars[0].price}</Text>
          <Text className="w__car-text">{test_json.cars[0].fuel}-{test_json.cars[0].mpg}mp/g</Text>
          <Text className="w__car-text">{test_json.cars[0].transmission}</Text>
        </Box>
        <Box w='20vw' h='92.5vh' bg={useColorModeValue('gray.400', 'gray.800')} />
      </Flex>
    </>
  );
}