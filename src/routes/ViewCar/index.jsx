import React, { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Text, Box, Flex, Image, Stack, HStack, Spacer, Center } from '@chakra-ui/react';
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
              url: process.env.REACT_APP_SIMILAR_CARS + "?id=" + response.data.cars[0].car_id,
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

  function displayAlternatives() {
    let card_items = null;
    for (const alt_car in alternative_cars) {
      card_items = card_items + (
        <>
          <Flex ml='5vw' mr='5vw' mt='50px' justifyContent='center'>
            <Stack align='center' spacing='24px'>
              <Text className="w__car-subtitle">Potential alternatives:</Text>
              <Link to={'/cars/' + alt_car.car_id}>
                <Box boxShadow="0 10px 20px rgb(0 0 0 / 41%)" borderRadius="10" bg='white'>
                  <Image src={alt_car.image_url} alt={alt_car.model} objectFit="cover" width="100%" maxWidth='418px' height='300px' />
                  <Stack py="2em" mx="10">
                    <HStack justify="space-between">
                      <Text fontWeight="bold">Car: </Text>
                      <Text>Toyota Venza</Text>
                      <Text fontWeight="bold">Mileage: </Text>
                      <Text>2300 kmpl</Text>
                    </HStack>
                  </Stack>
                </Box>
              </Link>
            </Stack>
          </Flex>
        </>
      )
    }
    if (!card_items) {
      return card_items;
    } else {
      return (
        <>
          <Flex ml='5vw' mr='5vw' mt='50px' justifyContent='center'>
            <Stack align='center' spacing='24px'>
              <Text className="w__car-subtitle">Potential alternatives:</Text>
              <Text className="w__car-text">No alternatives found</Text>
            </Stack>
          </Flex>
        </>
      )
    }
  };

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

          <HStack align='top' ml='1vw' mt='2vw'>
            <Text className="w__car-subtitle" w='180px'>Overview:</Text>
            <Stack py="5em" justify="space-between">
              <Box w='15vw' display='flex' alignItems='center'>
                <Image className="w__image-tiny" src={require('../../assets/images/engine_vector.png')} />
                <Text w='130px' fontWeight="bold" className="w__car-text">Engine Size: </Text>
                <Text className="w__car-text">{car.engine} Litres</Text>
              </Box>
              <Box w='15vw' display='flex' alignItems='center'>
                <Image className="w__image-tiny" src={require('../../assets/images/transmission_vector.png')} />
                <Text w='130px' fontWeight="bold" className="w__car-text">Transmission: </Text>
                <Text className="w__car-text">{car.transmission}</Text>
              </Box>
              <Box w='15vw' display='flex' alignItems='center'>
                <Image className="w__image-tiny" src={require('../../assets/images/fuel_vector.png')} />
                <Text w='130px' fontWeight="bold" className="w__car-text">Fuel Type: </Text>
                <Text className="w__car-text">{car.fuel_type}</Text>
              </Box>
              <Box w='15vw' display='flex' alignItems='center'>
                <Image className="w__image-tiny" src={require('../../assets/images/person_vector.png')} />
                <Text w='130px' fontWeight="bold" className="w__car-text">Owners: </Text>
                <Text className="w__car-text">{car.owners_info}</Text>
              </Box>
              <Box w='15vw' display='flex' alignItems='center'>
                <Image className="w__image-tiny" src={require('../../assets/images/seat_vector.png')} />
                <Text w='130px' fontWeight="bold" className="w__car-text">Seats: </Text>
                <Text className="w__car-text">{car.seats} Seats</Text>
              </Box>
            </Stack>

            <Text className="w__car-subtitle" w='180px'>Specifications:</Text>
            <Stack py="6em" justify="space-between">
              <Box w='15vw' display='flex' alignItems='center'>
                <Image className="w__image-tiny" src={require('../../assets/images/check_vector.png')} />
                <Text w='180px' fontWeight="bold" className="w__car-text">Engine Power: </Text>
                <Text className="w__car-text">{car.max_power}bhp</Text>
              </Box>
              <Box w='15vw' display='flex' alignItems='center'>
                <Image className="w__image-tiny" src={require('../../assets/images/check_vector.png')} />
                <Text w='180px' fontWeight="bold" className="w__car-text">Mileage: </Text>
                <Text className="w__car-text">{car.km_driven}km</Text>
              </Box>
              <Box w='15vw' display='flex' alignItems='center'>
                <Image className="w__image-tiny" src={require('../../assets/images/check_vector.png')} />
                <Text w='180px' fontWeight="bold" className="w__car-text">Fuel consumption: </Text>
                <Text className="w__car-text">{car.fuel_consumption}km/g</Text>
              </Box>
              <Box w='15vw' display='flex' alignItems='center'>
                <Image className="w__image-tiny" src={require('../../assets/images/check_vector.png')} />
                <Text w='180px' fontWeight="bold" className="w__car-text">Seller type: </Text>
                <Text className="w__car-text">{car.seller_type} Seller</Text>
              </Box>
            </Stack>
          </HStack>

          <Center mt='50px' className="w__car-subtitle">Contact the seller:</Center>
          <Center className="w__car-title">01753 665431</Center>
        </Box>

        <Box w='25vw' h='92.5vh' bg='gray.200' justifyContent='center'>
          {displayAlternatives()}
        </Box>


      </Flex>
    </>
  );
}