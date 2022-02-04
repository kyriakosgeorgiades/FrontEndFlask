import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Header from '../../components/Header';
import './style.scss';
import axios from 'axios';

export default function FindCar() {
    const [selectedFile, setSelectedFile] = React.useState(null);

    const handleSubmit = async (event) => {

        event.preventDefault()
        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await axios({
                method: "post",
                url: process.env.REACT_APP_AI_SEARCH_API_URL,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(response);
        } catch(error) {
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
                <input type="file" className="custom-file-input" onChange={handleFileSelect} />
                <Box py={3} px={20} border="1px solid black" textAlign="center" m="0 auto" mb="5em" mt="2em" onClick={handleSubmit}>
                    <Text color="black" fontWeight="bold">Submit</Text>
                </Box>
            </Box>
        </>
    );
}
