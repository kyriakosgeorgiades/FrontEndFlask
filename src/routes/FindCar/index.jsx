import { Box, Button, Input, Text } from '@chakra-ui/react';
import React from 'react';
import Header from '../../components/Header';
import './style.scss';
import axios from 'axios';

export default function FindCar() {
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [carTitle, setCarTitle] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData();
        formData.append("file", selectedFile);
        setIsLoading(true)
        try {
            const response = await axios({
                method: "post",
                url: process.env.REACT_APP_AI_SEARCH_API_URL,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(response);
            setIsLoading(false);
            setCarTitle(response.data);
            alert("Success!");
        } catch(error) {
            setIsLoading(false);
            console.log(error)
        }
    }

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
    }

  return (
        <>
            <Header title="Find Car" />
            <Box py="5em" m="0 auto" height="85vh" maxWidth="30%">
                <Input placeholder='Car Title' value={carTitle || ""} onChange={ e => setCarTitle(e.target.value)} size='lg' mb="2em" />
                <input type="file" className="custom-file-input" onChange={handleFileSelect} />
                <Box>
                    {
                        isLoading ? <Button 
                            py={8} 
                            px={20} 
                            mb="5em" 
                            mt="2em" 
                            fontSize="1.5rem"
                            isLoading
                            loadingText='Loading'
                            colorScheme='black'
                            variant='outline'
                            _focus={{ outline: 'none', border: "none" }}
                            spinnerPlacement='start'
                        >
                            Submit
                        </Button> 
                    : <Button 
                            className="find-btn"
                            cursor="none" 
                            _hover={{ bg: "transparent" }} 
                            py={8} 
                            px={20} 
                            bg="transparent" 
                            border="1px solid black" 
                            m="0 auto" 
                            mb="5em" 
                            mt="2em" 
                            onClick={handleSubmit}
                            fontSize="1.5rem"
                        >
                            Submit
                        </Button>
                    }
                </Box>
            </Box>
        </>
    );
}
