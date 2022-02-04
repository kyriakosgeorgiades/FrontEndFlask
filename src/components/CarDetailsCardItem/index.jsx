import { Box,  Stack, Text, Image, HStack } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function CarDetailsCardItem() {
    let { id } = useParams();

  return (
    <>
        <Box boxShadow="0 10px 20px rgb(0 0 0 / 41%)" borderRadius="10" mx="20%" mt="5em">
            <HStack>
                <Image 
                    src='https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-640x354.jpg' 
                    alt={`Tesla${id}`} 
                    objectFit="cover" 
                    width="100%"
                    maxWidth='418px' 
                    height='300px'
                    borderTopLeftRadius="10" 
                />
                <Stack width="100%" px="2em">
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
                    {/* <HStack justify="space-between">
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
                    </HStack> */}
                </Stack>
            </HStack>
        </Box>
    </>
    );
}
