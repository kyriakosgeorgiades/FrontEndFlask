import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import CarCardItem from '../../components/CarCardItem';
import Header from '../../components/Header';

export default function List() {
  return (
    <>
    <Header title="Cars" />
    <Box id="car-listings">
      <SimpleGrid columns={3} spacing={10} py="5em" px="5em">
        <CarCardItem />
        <CarCardItem />
        <CarCardItem />
        <CarCardItem />
        <CarCardItem />
        <CarCardItem />
        <CarCardItem />
        <CarCardItem />
        <CarCardItem />
      </SimpleGrid>
    </Box>
    </>
  );
}
