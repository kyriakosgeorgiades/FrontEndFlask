import React from 'react';
import { Box, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './style.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  const boxRef = React.useRef();
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    // const element = boxRef.current;
    // let tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.w__header',
    //     start: 'bottom bottom',
    //     end: "top top",
    //     scrub: true,
    //   }
    // });

    // tl.from('.w__hero-title-text', { opacity: 0, duration: 3 });
    // gsap.from(".w__hero-title-text", {
    //   opacity: 0,
    //   duration: 3,
    //   scrollTrigger: {
    //     trigger: ".w__hero-title-text",
    //     markers: true,
    //     start: "top ctop",
    //     scrub: true
    //   }
    // });
  },[]);

  React.useEffect(() => {
    // eslint-disable-next-line
    const element = boxRef.current;
    gsap.from('.w__hero-title-text', { opacity: 0, duration: 3 });
    gsap.from('.c__hero-btn-left', { x: -500, duration: 1 });
    gsap.from('.c__hero-btn-right', { x: 500, duration: 1 });
  }, []);

  
  return (
    <>
    <Box className="w__header" h="100vh" ref={boxRef} pos="relative">
      <Flex w="100%" pos="absolute" color="white" px="4em" pt="2em" justifyContent="space-between">
        <Heading fontSize="3rem">C-Rentals</Heading>
        <HStack spacing={20}>
          <Link to="/">
            <Text fontSize="1.5rem" _hover={{ transform: 'translateY(-5px)', transition: 'all 300ms linear' }}>Cars</Text>
          </Link>
          <Link to="/">
            <Text fontSize="1.5rem" _hover={{ transform: 'translateY(-5px)', transition: 'all 300ms linear' }}>Login</Text>
          </Link>
          <Link to="/">
            <Text fontSize="1.5rem" _hover={{ transform: 'translateY(-5px)', transition: 'all 300ms linear' }}>Register</Text>
          </Link>
        </HStack>
      </Flex>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Stack className="w__hero-title" alignItems="center" textAlign="center" spacing="5em">
          <Heading fontSize="4rem" color="white" className="w__hero-title-text">Welcome to C-Rentals, get your dream car now!</Heading>
          <HStack spacing={10}>
            <Link to="/">
              <Box py={5} px={20} border="1px solid white" borderRadius="30" className="c__hero-btn-left">
                <Text color="white" fontWeight="bold">VIEW LISTINGS</Text>
              </Box>
            </Link>
            <Link to="/">
              <Box py={5} px={20} bg="white" border="1px solid white" borderRadius="30" className="c__hero-btn-right">
                <Text color="black" fontWeight="bold">FIND A CAR</Text>
              </Box>
            </Link>
          </HStack>
        </Stack>
      </Box>
    </Box>
    <Box h="100vh" bg="red">
    <Text>Section 1</Text>
  </Box>
    </>
  );
}
