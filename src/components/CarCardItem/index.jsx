import { Box,  Stack, Text, Image, HStack } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

export default function CarCardItem() {
  return (
    <>
        <Box boxShadow="0 10px 20px rgb(0 0 0 / 41%)" borderRadius="10">
        <Image 
            src='https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-640x354.jpg' 
            alt='Tesla' 
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
              <Text>Toyota</Text>
            </HStack>
            <HStack justify="space-between">
              <Text fontWeight="bold">Model</Text>
              <Text>Venza</Text>
            </HStack>
            <HStack justify="space-between">
              <Text fontWeight="bold">Mileage</Text>
              <Text>2300 kmpl</Text>
            </HStack>
            <Box align="right" pt="1.5em">
              <Link to="">
                <ArrowForwardIcon w={8} h={8} color="black.500" />
              </Link>
            </Box>
          </Stack>
        </Box>
    </>
    );
}
