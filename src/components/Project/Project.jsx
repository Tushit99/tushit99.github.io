import React from "react";
import pro from "./project.module.css";
import {
  Grid, 
  Flex, 
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  CardFooter, 
  Button,
} from "@chakra-ui/react";
import Img1 from "../ProjectImage/mid.png";
import Img2 from "../ProjectImage/urban.png";


const D1 = [
  {
    id: 1,
    image: Img1,
    title: "Nykaa",
    github: "https://github.com/Tushit99/nykaa-clone-main",
    netlify: "https://nykaa-clone20.netlify.app/",
  },
  {
    id: 2,
    image: Img2,
    title: "Nykaa",
    github: "https://github.com/Tushit99/nykaa-clone-main",
    netlify: "https://nykaa-clone20.netlify.app/",
  }
];

const Project = () => {
  return (
    <div className={pro.box}>
      <h1>Project</h1>
      <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} padding="20px 30px" gap={6}>
        {D1.map((e) => (
          <Card
            bg="whiteAlpha.100"
            color="black"
            boxShadow="md"
            variant="solid"
            key={e.id}
            w="80%"
            m="20px auto"
            textAlign="center"
            _hover={{
              boxShadow: "outline",
            }} >
            <CardBody>
              <Image
                src={e.image}
                alt="imgLink"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
              </Stack>
            </CardBody>
            <CardFooter w="100%"> 
              <Flex align="center" justify="space-between" w="100%" >
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button colorScheme='blue' variant='outline'>
                  Add to cart
                </Button>
              </Flex>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default Project; 
