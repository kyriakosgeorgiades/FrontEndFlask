import { Box, HStack, Input, Select, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useLocation } from 'react-router';
import Header from '../../components/Header';
import Lottie from 'react-lottie';
import animationData from '../../lotties/car-dashboard.json';

export default function SellCar() {
    const [inputs, setInputs] = React.useState({});  
    const [predictedPrice, setPredictedPrice] = React.useState("");

    let location = useLocation();

    // This handles initializing the lottie animation
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    /**
     * This function handles updating the input values
     * 
     * @param {Event} e 
     * @return {Void}
     */
    function handleForm(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]:value}))

    } 

     /**
     * This function handles calling the api to 
     * sell a car
     * 
     * @param {Event} e 
     * @return {Void}
     */
    function handleSubmit(e) {
        e.preventDefault();
        const options = {
            url: process.env.REACT_APP_PRICE_API_URL,
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                name: inputs.name,
                brand: inputs.brand,
                year: inputs.year,
                 "km-driven": inputs.km_driven,
                 fuel: inputs.fuel,
                 seller_type: inputs.seller_type,
                 transmission: inputs.transmission,
                 owner: inputs.owner,
                 mileage :  inputs.mileage,
                 engine: inputs.engine,
                 max_power: inputs.max_power,
                 torque: inputs.torque,
                 seats: inputs.seats,
            }
            
          };
          
          axios(options)
            .then(response => {
                console.log(response)
                setPredictedPrice(response.data.Price || 0)
                alert("Success!")
            }).catch(error => {
                console.error(error);
                alert("Error!")
            });
    } 

  return (
      <>
        <Header title="Sell Car" />
        <Box boxShadow="0 10px 20px rgb(0 0 0 / 41%)" py="5em" m="0 auto" borderRadius="10" p="4em 2em" my="5em"  maxWidth="50%">
            <Lottie 
                options={defaultOptions}
                height={50}
                width={50}
            />
            <Stack spacing="10" mt="2em">
                <HStack spacing="10">
                    <Input placeholder='Name' name="name" value={inputs.name || ""} onChange={ e => handleForm(e)} size='lg' />
                    <Input placeholder='Brand' name="brand" value={inputs.brand || ""} onChange={ e => handleForm(e)} size='lg' />
                </HStack>
                <HStack spacing="10">
                    <Input placeholder='Year' name="year" value={inputs.year || location?.state?.data.year || ""} onChange={ e => handleForm(e)} size='lg' />
                    <Input placeholder='Km-Driven' name="km_driven" value={inputs.km_driven || location?.state?.data["km-driven"] || ""} onChange={ e => handleForm(e)} size='lg' />
                </HStack>
                <HStack spacing="10">
                    <Select placeholder='Select fuel' name="fuel" value={inputs.fuel || location?.state?.data.fuel || ""} onChange={ e => handleForm(e)} size='lg'>
                        <option value='diesel'>Diesel</option>
                        <option value='petrol'>Petrol</option>
                        <option value='LPG'>LPG</option>
                        <option value='CNG'>CNG</option>
                    </Select>
                    <Select placeholder='Select seller type' name="seller_type" value={inputs.seller_type || location?.state?.data.seller_type || ""} onChange={ e => handleForm(e)} size='lg'>
                        <option value='diesel'>Individual</option>
                        <option value='petrol'>Dealer</option>
                        <option value='LPG'>Trustmark Dealer</option>
                    </Select>
                </HStack>
                <HStack spacing="10">
                    <Select placeholder='Select transmission' name="transmission" value={inputs.transmission || location?.state?.data.transmission || ""} onChange={ e => handleForm(e)} size='lg'>
                        <option value='manual'>Manual</option>
                        <option value='automatic'>Automatic</option>
                    </Select>
                    <Select placeholder='Select owner' size='lg' name='owner' value={inputs.owner || location?.state?.data.owner || ""} onChange={ e => handleForm(e)}>
                        <option value='first owner'>First Owner</option>
                        <option value='second owner'>Second Owner</option>
                        <option value='thrid owner'>Third Owner</option>
                        <option value='fourth owner and above'>Fourth Owner &amp; Above</option>
                        <option value='test drive car'>Test Drive Car</option>
                    </Select>
                </HStack>
                <HStack spacing="10">
                    <Input placeholder='Mileage (Kmpl)' name='mileage' value={inputs.mileage || location?.state?.data.mileage || ""} onChange={ e => handleForm(e)} size='lg' />
                    <Input placeholder='Engine (cc)' name='engine' size='lg' value={inputs.engine || location?.state?.data.engine || ""} onChange={ e => handleForm(e)} />
                </HStack>
                <HStack spacing="10">
                    <Input placeholder='Max Power (bhp)' name='max_power' value={inputs.max_power || location?.state?.data.max_power || ""} onChange={ e => handleForm(e)} size='lg' />
                    <Input placeholder='Torque' name='torque' value={inputs.torque || location?.state?.data.torque || ""} onChange={ e => handleForm(e)} size='lg' />
                </HStack>
                <HStack spacing="10">
                    <Input placeholder='Seats' name='price' value={inputs.price || location?.state?.data.price || ""} onChange={ e => handleForm(e)} size='lg' />
                    <Input placeholder='Seats' name='seats' value={inputs.seats || location?.state?.data.seats || ""} onChange={ e => handleForm(e)} size='lg' />
                </HStack>
                <Box onClick={handleSubmit} py={3} px={20} border="1px solid black" textAlign="center" m="0 auto" mb="5em">
                    <Text color="black" fontWeight="bold">Submit</Text>
                </Box>
                {predictedPrice && <Text fontWeight="bold">Predicted Price: £{predictedPrice}</Text>}
            </Stack>
        </Box>
      </>
    );
}
