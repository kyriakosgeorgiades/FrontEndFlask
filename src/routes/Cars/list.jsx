import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import CarCardItem from '../../components/CarCardItem';
import Header from '../../components/Header';
import axios from "axios";

export default function List() {
  const [cars, setCars] = React.useState([]);
  const [status, setStatus] = React.useState(null);

  React.useEffect(() => {
    if (!status) {
      const options = {
        url: process.env.REACT_APP_GET_CARS,
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        }
      };

      // using axios to handle backend request
      axios(options)
        .then(response => {
          console.log(response)
          // if request succeeds
          if (response.status === 200) {
            // updates state info with request data
            setCars(response.data.cars)
            setStatus(response.status)
          }
        }).catch(error => {
          console.error(error);
          alert("System error during alternative cars request.");
        });
    }
  }, [status]);

  return (
    <>
    <Header title="Cars" />
    <Box id="car-listings">
      <SimpleGrid columns={3} spacing={10} py="5em" px="5em">
        {
          cars.map((car, index) => <CarCardItem key={index} car={car} /> )
        }
      </SimpleGrid>
    </Box>
    </>
  );
}
