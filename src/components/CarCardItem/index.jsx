import { Box, Heading, Stack, Text, Image } from '@chakra-ui/react';
import React from 'react';

export default function CarCardItem() {
  return (
    <>
        <Box boxShadow="0 10px 20px rgb(0 0 0 / 41%)" borderRadius="10">
          <Stack textAlign="center" py="2em">
            <Heading>Deal 1</Heading>
            <Text>Per day $300.00</Text>
            <Text>Mon, Tue, Wed, Thu, Fri</Text>
          </Stack>
          <Image 
            src='https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-640x354.jpg' 
            alt='Tesla' 
            objectFit="cover" 
            width="100%"
            maxWidth='418px' 
            height='300px'
            borderBottomLeftRadius="10" 
            borderBottomRightRadius="10" 
          />
        </Box>
    </>
    );
}
