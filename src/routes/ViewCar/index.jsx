import React, { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Text, Box, Flex, Image, Stack, HStack, Spacer } from '@chakra-ui/react';
import './style.scss';

import Header from '../../components/Header';

export default function ViewCar() {
  const [car, setCar] = React.useState([]);
  const [alternative_cars, setAlternatives] = React.useState([]);
  const [status, setStatus] = React.useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!status) {
      const options = {
        url: process.env.REACT_APP_VIEW_CAR + id,
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        }
      };

      axios(options)
        .then(response => {
          if (response.status === 200) {
            console.log(response.data.cars[0])
            setCar(response.data.cars[0])
            setStatus(response.status)
            
            const options = {
              url: "http://127.0.0.1:5000/car/similar?id=" + response.data.cars[0].car_id,
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
              }
            };

            axios(options)
              .then(response => {
                if (response.status === 200) {
                  console.log(response.data)
                  setAlternatives(response.data)
                } else {
                  alert(response.message);
                }
              }).catch(error => {
                console.error(error);
                alert("System error during alternative cars request.");
              });

          } else {
            alert(response.message);
          }
        }).catch(error => {
          console.error(error);
          alert("System error during car info request.");
        });
    }
  }, [status, id]);

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
            <Image className="w__image-large" ml='1vw' src={car.image_url} alt={car.model} />
            <Flex h='400px' w='20vw' mr='1vw'>
              <Stack w='20vw' align={'center'}>
                <Spacer />
                <Text className="w__car-title">{car.brand} {car.model}</Text>
                <Text className="w__car-subtitle">{car.year}</Text>
                <Spacer />
                <Text className="w__car-subtitle">Available at:</Text>
                <Text className="w__car-title">£{car.price}</Text>
                <Spacer />
              </Stack>
            </Flex>
          </HStack>

          <Flex ml='2vw' mt='1vw'>
            <Box>
              <HStack mt='25px' spacing='10'>
                <Text className="w__car-subtitle" w='200px'>Overview:</Text>
                <Box w='5vw' display='flex' alignItems='center'>
                  <Image className="w__image-tiny" src={require('../../assets/images/engine_vector.png')} />
                  <Text className="w__car-text">{car.engine}L</Text>
                </Box>
                <Box w='5vw' display='flex' alignItems='center'>
                  <Image className="w__image-tiny" src={require('../../assets/images/transmission_vector.png')} />
                  <Text className="w__car-text">{car.transmission}</Text>
                </Box>
                <Box w='5vw' display='flex' alignItems='center'>
                  <Image className="w__image-tiny" src={require('../../assets/images/fuel_vector.png')} />
                  <Text className="w__car-text">{car.fuel_type}</Text>
                </Box>
                <Box w='5vw' display='flex' alignItems='center'>
                  <Image className="w__image-tiny" src={require('../../assets/images/person_vector.png')} />
                  <Text className="w__car-text">{car.owners_info}</Text>
                </Box>
                <Box w='5vw' display='flex' alignItems='center'>
                  <Image className="w__image-tiny" src={require('../../assets/images/seat_vector.png')} />
                  <Text className="w__car-text">{car.seats} Seats</Text>
                </Box>
              </HStack>
              <HStack mt='25px' spacing='10'>
                <Text className="w__car-subtitle" w='200px'>Specifications:</Text>
                <Box w='7vw' display='flex' alignItems='center'>
                  <Image className="w__image-tiny" src={require('../../assets/images/check_vector.png')} />
                  <Text w='5vw' className="w__car-text">{car.max_power}bhp</Text>
                </Box>
                <Box w='7vw' display='flex' alignItems='center'>
                  <Image className="w__image-tiny" src={require('../../assets/images/check_vector.png')} />
                  <Text w='5vw' className="w__car-text">{car.km_driven}km</Text>
                </Box>
                <Box w='7vw' display='flex' alignItems='center'>
                  <Image className="w__image-tiny" src={require('../../assets/images/check_vector.png')} />
                  <Text w='5vw' className="w__car-text">{car.fuel_consumption}km/g</Text>
                </Box>
                <Box w='7vw' display='flex' alignItems='center'>
                  <Image className="w__image-tiny" src={require('../../assets/images/check_vector.png')} />
                  <Text w='5vw' className="w__car-text">{car.seller_type} Seller</Text>
                </Box>
              </HStack>
            </Box>
          </Flex>

        </Box>

        <Box w='25vw' h='92.5vh' bg='gray.200' justifyContent='center'>
          <Flex ml='5vw' mr='5vw' mt='50px' justifyContent='center'>

            <Stack align='center' spacing='24px'>
              <Text className="w__car-subtitle">Potential alternatives:</Text>
              <Image className="w__image-small" src={car.image_url} alt={car.model} />
              <Image className="w__image-small" src={car.image_url} alt={car.model} />
              <Image className="w__image-small" src={car.image_url} alt={car.model} />
              <Spacer />
            </Stack>

          </Flex>
        </Box>

      </Flex>
    </>
  );
}