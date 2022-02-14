import { Box,  Stack, Text, Image, HStack } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

export default function CarCardItem({ car }) {
  return (
    <>
        <Box boxShadow="0 10px 20px rgb(0 0 0 / 41%)" borderRadius="10">
        <Image 
            src={car.image_url}
            alt={car.brand} 
            objectFit="cover" 
            width="100%"
            maxWidth='418px' 
            height='300px'
            borderTopLeftRadius="10" 
            borderTopRightRadius="10" 
          />
          <Stack py="2em" mx="10">
            <HStack justify="space-between">
              <Text fontWeight="bold">Brand</Text>
              <Text>{car.brand}</Text>
            </HStack>
            <HStack justify="space-between">
              <Text fontWeight="bold">Model</Text>
              <Text>{car.model}</Text>
            </HStack>
            <HStack justify="space-between">
              <Text fontWeight="bold">Seats</Text>
              <Text>{car.seats}</Text>
            </HStack>
            <Box align="right" pt="1.5em">
              <Link to={`/cars/${car.car_id}`}>
                <ArrowForwardIcon w={8} h={8} color="black.500" />
              </Link>
            </Box>
          </Stack>
        </Box>
    </>
    );
}
