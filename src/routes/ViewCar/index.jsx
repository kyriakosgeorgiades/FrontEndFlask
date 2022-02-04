import React from "react";
import { Link } from 'react-router-dom';
import { Text, Box, Flex, Image, Stack, HStack, Spacer } from '@chakra-ui/react';
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
        <Box w='25vw' h='92.5vh' bg='gray.200' />
        <Box className="w__car" w='50vw' h='92.5vh' bg='white'>
          <Link to="/">
            <Text className="w__car-link" _hover={{ textDecoration: 'underline', color: 'blue' }}>🠔 Return to homepage.</Text>
          </Link>

          <HStack mt='25px'>
            <Image className="w__image-large" ml='1vw' src={test_json.cars[0].image} alt={test_json.cars[0].model} />
            <Flex h='400px' w='20vw' mr='1vw'>
              <Stack w='20vw' align={'center'}>
                <Spacer />
                <Text className="w__car-title">{test_json.cars[0].make} {test_json.cars[0].model}</Text>
                <Text className="w__car-subtitle">{test_json.cars[0].year}</Text>
                <Spacer />
                <Text className="w__car-title">£{test_json.cars[0].price}</Text>
                <Spacer />
              </Stack>
            </Flex>
          </HStack>

          <Flex ml='2vw' mt='1vw'>
            <Text className="w__car-subtitle">Overview</Text>
            <HStack mt='50px'>
              <Text className="w__car-text">{test_json.cars[0].fuel}</Text>
              <Text className="w__car-text">{test_json.cars[0].mpg}mp/g</Text>
              <Text className="w__car-text">{test_json.cars[0].transmission}</Text>
            </HStack>
          </Flex>

        </Box>

        <Box w='25vw' h='92.5vh' bg='gray.200' justifyContent='center'>
          <Flex ml='5vw' mr='5vw' mt='50px' justifyContent='center'>

            <Stack align='center' spacing='24px'>
              <Text className="w__car-subtitle">View other similar cars:</Text>
              <Image className="w__image-small" src={test_json.cars[0].image} alt={test_json.cars[0].model} />
              <Image className="w__image-small" src={test_json.cars[0].image} alt={test_json.cars[0].model} />
              <Image className="w__image-small" src={test_json.cars[0].image} alt={test_json.cars[0].model} />
              <Spacer />
            </Stack>

          </Flex>
        </Box>

      </Flex>
    </>
  );
}