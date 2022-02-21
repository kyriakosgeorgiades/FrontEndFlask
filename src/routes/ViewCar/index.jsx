// import required librarys
import React, { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Text, Box, Flex, Image, Stack, HStack, Spacer, Center, AspectRatio } from '@chakra-ui/react';
import ReactPlayer from "react-player"

// import stylesheet
import './style.scss';

// import header file
import Header from '../../components/Header';

export default function ViewCar() {
  // defines required variables 
  const [car, setCar] = React.useState([]);
  const [video, setVideo] = React.useState(null);
  const [alternative_cars, setAlternatives] = React.useState([]);
  const [status, setStatus] = React.useState(null);
  const { id } = useParams();

  // handles display component showing alternative car info from request
  function displayAlternatives(index) {
    // if alternative car at index specified exists
    if (alternative_cars[index]) {
      // returns a card component with the alternative car info
      return (
        <>
          <Flex ml='5vw' mr='5vw' mt='50px' justifyContent='center'>
            <Stack align='center' spacing='24px'>
              <Link onClick={"update render"} to={'/cars/' + alternative_cars[index].car_id}>
                <Box boxShadow="0 10px 20px rgb(0 0 0 / 41%)" borderRadius="10" bg='white'>
                  <Image src={alternative_cars[index].image_url} alt={alternative_cars[index].model} objectFit="cover" w='450px' maxH='350px' />
                  <Stack py="2em" mx="10">
                    <HStack justify="space-between">
                      <Text fontWeight="bold">Car: </Text>
                      <Text>{alternative_cars[index].brand + " " + alternative_cars[index].model}</Text>
                      <Text fontWeight="bold">Price: </Text>
                      <Text>£{alternative_cars[index].price}</Text>
                    </HStack>
                    <HStack justify="space-between">
                      <Text fontWeight="bold">Mileage: </Text>
                      <Text>{alternative_cars[index].km_driven}</Text>
                      <Text />
                      <Text />
                      <Text fontWeight="bold">Year: </Text>
                      <Text>{alternative_cars[index].year}</Text>
                    </HStack>
                    <Spacer />
                    <Text align='center' fontWeight="bold">{alternative_cars[index].suggestion_title}:</Text>
                    <Text align='center'>{alternative_cars[index].suggestion_reason}</Text>
                  </Stack>
                </Box>
              </Link>
            </Stack>
          </Flex>
        </>
      )
    } else {
      // if no alternative cars exist, returns a message indicating so
      if (index === 0) {
        return (
          <>
            <Flex ml='5vw' mr='5vw' mt='50px' justifyContent='center'>
              <Stack align='center' spacing='24px'>
                <Text className="w__car-text">No alternatives found</Text>
              </Stack>
            </Flex>
          </>
        )
      }
    }
  };

  // upon rendering the page
  useEffect(() => {
    // if no request has been previously made
    if (!status) {
      // request parameters
      const options = {
        url: process.env.REACT_APP_VIEW_CAR + id,
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        }
      };

      // using axios to handle backend request
      axios(options)
        .then(response => {
          // if request succeeds
          if (response.status === 200) {
            // updates state info with request data
            setCar(response.data.cars[0])
            setVideo(response.data.video_link)
            setStatus(response.status)

            // request parameters
            const options = {
              url: process.env.REACT_APP_SIMILAR_CARS + "?id=" + response.data.cars[0].car_id,
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
              }
            };

            // using axios to handle backend request
            axios(options)
              .then(response => {
                // if request succeeds
                if (response.status === 200) {
                  // updates state info with request data
                  setAlternatives(response.data.cars)
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

  function displayVideo() {
    if (video) {
      return (
        <>
        <AspectRatio maxW='560px' ratio={1}>
          <ReactPlayer
              controls={true}
              url={video}
              width='25vw'
              style={{ padding: '10px' }}
            />
          </AspectRatio>
        </>
      )
    }
  }

  return (
    <>
      <Header />

      <Flex align={'center'} justify={'center'}>
        <Box w='25vw' h='92.5vh' bg='gray.200' >
          { displayVideo() }
        </Box>
        <Box className="w__car" w='50vw' h='92.5vh' bg='white'>
          <Link to="/cars">
            <Text className="w__car-link" _hover={{ textDecoration: 'underline', color: 'blue' }}>🠔 Return to search</Text>
          </Link>

          <HStack mt='25px'>
            <Image className="w__image-large" ml='1vw' mr='50px' src={car.image_url} alt={car.model} />
            <Flex h='400px' w='20vw' mr='1vw'>
              <Stack w='20vw' align={'center'}>
                <Spacer />
                <Text className="w__car-title" align={'center'}>{car.brand} {car.model}</Text>
                <Text className="w__car-subtitle">{car.year}</Text>
                <Spacer />
                <Text className="w__car-subtitle">Available at:</Text>
                <Text className="w__car-title">£{car.price}</Text>
                <Spacer />
              </Stack>
            </Flex>
          </HStack>

          <HStack align='top' ml='1vw' mt='2vw'>
            <Stack py="5em" justify="space-between">
              <Text className="w__car-subtitle">Overview:</Text>
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


            <Stack py="6em" justify="space-between">
              <Text className="w__car-subtitle">Specifications:</Text>
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
          <Flex ml='5vw' mr='5vw' mt='35px' justifyContent='center'>
            <Stack align='center' spacing='15px'>
              <Text className="w__car-subtitle">Potential alternatives:</Text>
            </Stack>
          </Flex>
          {displayAlternatives(0)}
          {displayAlternatives(1)}
        </Box>

      </Flex>
    </>
  );
}