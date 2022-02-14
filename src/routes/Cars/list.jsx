import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import CarCardItem from '../../components/CarCardItem';
import Header from '../../components/Header';
import axios from "axios";

export default function List() {
  const [cars, setCars] = React.useState([]);

  React.useEffect(() => {
    axios.get(process.env.REACT_APP_GET_CARS)
    .then((res) => setCars(res))
    .catch(err => console.err(err));
  }, []);

  return (
    <>
    <Header title="Cars" />
    <Box id="car-listings">
      <SimpleGrid columns={3} spacing={10} py="5em" px="5em">
        {
          cars?.cars.map((car, index) => <CarCardItem key={index} car={car} /> )
        }
      </SimpleGrid>
    </Box>
    </>
  );
}
